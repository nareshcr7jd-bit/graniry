import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  boolean,
  timestamp,
  pgEnum,
  jsonb,
  numeric,
  index,
} from "drizzle-orm/pg-core"

// ─── Enums ───────────────────────────────────────────────────────────────────

export const productCategoryEnum = pgEnum("product_category", [
  "everyday",
  "diet",
  "premium",
  "multigrain",
  "ancient",
  "brown",
])

export const orderStatusEnum = pgEnum("order_status", [
  "pending",
  "confirmed",
  "packed",
  "out_for_delivery",
  "delivered",
  "cancelled",
])

export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "active",
  "paused",
  "cancelled",
])

// ─── Products ────────────────────────────────────────────────────────────────

export const products = pgTable(
  "products",
  {
    id: varchar("id", { length: 50 }).primaryKey(),              // e.g. "sona-masoori-old-raw"
    slug: varchar("slug", { length: 100 }).unique().notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    shortName: varchar("short_name", { length: 100 }).notNull(),
    tagline: text("tagline").notNull(),
    description: text("description").notNull(),
    longDescription: text("long_description").notNull(),
    pricePerKg: integer("price_per_kg").notNull(),               // in rupees (integer)
    category: productCategoryEnum("category").notNull(),
    badges: jsonb("badges").notNull().default([]),               // string[]
    bagColor: varchar("bag_color", { length: 50 }).notNull(),
    bagGradient: text("bag_gradient").notNull(),
    bagAccent: varchar("bag_accent", { length: 50 }).notNull(),
    bagTextColor: varchar("bag_text_color", { length: 50 }).notNull(),
    emoji: varchar("emoji", { length: 10 }).notNull(),
    aging: varchar("aging", { length: 50 }),
    origin: varchar("origin", { length: 100 }).notNull(),
    nutrition: jsonb("nutrition").notNull(),                      // { calories, protein, carbs, fibre, fat, gi }
    healthClaims: jsonb("health_claims").notNull().default([]),  // string[]
    cookTime: varchar("cook_time", { length: 100 }).notNull(),
    bestFor: jsonb("best_for").notNull().default([]),             // string[]
    featured: boolean("featured").default(false).notNull(),
    popular: boolean("popular").default(false).notNull(),
    active: boolean("active").default(true).notNull(),
    sortOrder: integer("sort_order").default(0).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  t => [
    index("products_category_idx").on(t.category),
    index("products_active_idx").on(t.active),
  ]
)

// ─── Customers ───────────────────────────────────────────────────────────────

export const customers = pgTable(
  "customers",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 20 }).unique().notNull(),
    email: varchar("email", { length: 255 }),
    city: varchar("city", { length: 100 }).default("Bangalore"),
    area: varchar("area", { length: 100 }),                      // e.g. "Koramangala", "HSR Layout"
    address: text("address"),
    notes: text("notes"),
    isSubscriber: boolean("is_subscriber").default(false).notNull(),
    totalOrders: integer("total_orders").default(0).notNull(),
    totalSpend: integer("total_spend").default(0).notNull(),     // in rupees
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  t => [
    index("customers_phone_idx").on(t.phone),
  ]
)

// ─── Orders ──────────────────────────────────────────────────────────────────

export const orders = pgTable(
  "orders",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    orderNumber: varchar("order_number", { length: 20 }).unique().notNull(), // e.g. "GR-20260001"
    customerId: uuid("customer_id").references(() => customers.id),
    customerName: varchar("customer_name", { length: 255 }).notNull(),
    customerPhone: varchar("customer_phone", { length: 20 }).notNull(),
    deliveryAddress: text("delivery_address"),
    status: orderStatusEnum("status").default("pending").notNull(),
    totalAmount: integer("total_amount").notNull(),               // in rupees
    deliveryCharge: integer("delivery_charge").default(0).notNull(),
    discount: integer("discount").default(0).notNull(),
    notes: text("notes"),
    whatsappOrderText: text("whatsapp_order_text"),
    source: varchar("source", { length: 30 }).default("website"), // "website" | "whatsapp" | "instagram"
    confirmedAt: timestamp("confirmed_at"),
    packedAt: timestamp("packed_at"),
    deliveredAt: timestamp("delivered_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  t => [
    index("orders_customer_idx").on(t.customerId),
    index("orders_status_idx").on(t.status),
    index("orders_created_idx").on(t.createdAt),
  ]
)

// ─── Order Items ─────────────────────────────────────────────────────────────

export const orderItems = pgTable(
  "order_items",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    orderId: uuid("order_id").references(() => orders.id, { onDelete: "cascade" }).notNull(),
    productId: varchar("product_id", { length: 50 }).references(() => products.id).notNull(),
    productName: varchar("product_name", { length: 255 }).notNull(),    // snapshot at order time
    sizeKg: integer("size_kg").notNull(),                                // 1 | 5 | 10 | 25
    qty: integer("qty").notNull().default(1),
    pricePerKg: integer("price_per_kg").notNull(),                       // snapshot at order time
    lineTotal: integer("line_total").notNull(),                          // pricePerKg × sizeKg × qty
  }
)

// ─── Subscriptions ───────────────────────────────────────────────────────────

export const subscriptions = pgTable(
  "subscriptions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    customerId: uuid("customer_id").references(() => customers.id).notNull(),
    productId: varchar("product_id", { length: 50 }).references(() => products.id).notNull(),
    productName: varchar("product_name", { length: 255 }).notNull(),
    sizeKg: integer("size_kg").notNull(),
    qty: integer("qty").notNull().default(1),
    pricePerKg: integer("price_per_kg").notNull(),
    discountPct: numeric("discount_pct", { precision: 4, scale: 2 }).default("5.00"),
    deliveryDayOfMonth: integer("delivery_day_of_month").default(1),    // 1-28
    status: subscriptionStatusEnum("status").default("active").notNull(),
    nextDeliveryDate: timestamp("next_delivery_date"),
    lastDeliveredAt: timestamp("last_delivered_at"),
    totalDeliveries: integer("total_deliveries").default(0).notNull(),
    notes: text("notes"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  t => [
    index("subscriptions_customer_idx").on(t.customerId),
    index("subscriptions_status_idx").on(t.status),
  ]
)

// ─── Leads / WhatsApp Signups ─────────────────────────────────────────────────

export const leads = pgTable(
  "leads",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    phone: varchar("phone", { length: 20 }),
    email: varchar("email", { length: 255 }),
    name: varchar("name", { length: 255 }),
    source: varchar("source", { length: 50 }).default("website"),       // "website" | "instagram" | "referral"
    interest: varchar("interest", { length: 100 }),                     // product slug or category
    convertedToCustomer: boolean("converted_to_customer").default(false).notNull(),
    convertedAt: timestamp("converted_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  t => [
    index("leads_phone_idx").on(t.phone),
    index("leads_converted_idx").on(t.convertedToCustomer),
  ]
)

// ─── Product Reviews ─────────────────────────────────────────────────────────

export const reviews = pgTable(
  "reviews",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    productId: varchar("product_id", { length: 50 }).references(() => products.id).notNull(),
    customerId: uuid("customer_id").references(() => customers.id),
    reviewerName: varchar("reviewer_name", { length: 255 }).notNull(),
    reviewerLocation: varchar("reviewer_location", { length: 100 }),
    rating: integer("rating").notNull(),                                 // 1-5
    reviewText: text("review_text").notNull(),
    verified: boolean("verified").default(false).notNull(),
    featured: boolean("featured").default(false).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  t => [
    index("reviews_product_idx").on(t.productId),
    index("reviews_featured_idx").on(t.featured),
  ]
)

// ─── Types ────────────────────────────────────────────────────────────────────

export type Product = typeof products.$inferSelect
export type NewProduct = typeof products.$inferInsert
export type Customer = typeof customers.$inferSelect
export type NewCustomer = typeof customers.$inferInsert
export type Order = typeof orders.$inferSelect
export type NewOrder = typeof orders.$inferInsert
export type OrderItem = typeof orderItems.$inferSelect
export type NewOrderItem = typeof orderItems.$inferInsert
export type Subscription = typeof subscriptions.$inferSelect
export type NewSubscription = typeof subscriptions.$inferInsert
export type Lead = typeof leads.$inferSelect
export type NewLead = typeof leads.$inferInsert
export type Review = typeof reviews.$inferSelect
export type NewReview = typeof reviews.$inferInsert
