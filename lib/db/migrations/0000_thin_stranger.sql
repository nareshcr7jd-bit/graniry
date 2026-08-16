CREATE TYPE "public"."order_status" AS ENUM('pending', 'confirmed', 'packed', 'out_for_delivery', 'delivered', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."product_category" AS ENUM('everyday', 'diet', 'premium', 'multigrain', 'ancient', 'brown');--> statement-breakpoint
CREATE TYPE "public"."subscription_status" AS ENUM('active', 'paused', 'cancelled');--> statement-breakpoint
CREATE TABLE "customers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"email" varchar(255),
	"city" varchar(100) DEFAULT 'Bangalore',
	"area" varchar(100),
	"address" text,
	"notes" text,
	"is_subscriber" boolean DEFAULT false NOT NULL,
	"total_orders" integer DEFAULT 0 NOT NULL,
	"total_spend" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "customers_phone_unique" UNIQUE("phone")
);
--> statement-breakpoint
CREATE TABLE "leads" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"phone" varchar(20),
	"email" varchar(255),
	"name" varchar(255),
	"source" varchar(50) DEFAULT 'website',
	"interest" varchar(100),
	"converted_to_customer" boolean DEFAULT false NOT NULL,
	"converted_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "order_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"order_id" uuid NOT NULL,
	"product_id" varchar(50) NOT NULL,
	"product_name" varchar(255) NOT NULL,
	"size_kg" integer NOT NULL,
	"qty" integer DEFAULT 1 NOT NULL,
	"price_per_kg" integer NOT NULL,
	"line_total" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"order_number" varchar(20) NOT NULL,
	"customer_id" uuid,
	"customer_name" varchar(255) NOT NULL,
	"customer_phone" varchar(20) NOT NULL,
	"delivery_address" text,
	"status" "order_status" DEFAULT 'pending' NOT NULL,
	"total_amount" integer NOT NULL,
	"delivery_charge" integer DEFAULT 0 NOT NULL,
	"discount" integer DEFAULT 0 NOT NULL,
	"notes" text,
	"whatsapp_order_text" text,
	"source" varchar(30) DEFAULT 'website',
	"confirmed_at" timestamp,
	"packed_at" timestamp,
	"delivered_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "orders_order_number_unique" UNIQUE("order_number")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"slug" varchar(100) NOT NULL,
	"name" varchar(255) NOT NULL,
	"short_name" varchar(100) NOT NULL,
	"tagline" text NOT NULL,
	"description" text NOT NULL,
	"long_description" text NOT NULL,
	"price_per_kg" integer NOT NULL,
	"category" "product_category" NOT NULL,
	"badges" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"bag_color" varchar(50) NOT NULL,
	"bag_gradient" text NOT NULL,
	"bag_accent" varchar(50) NOT NULL,
	"bag_text_color" varchar(50) NOT NULL,
	"emoji" varchar(10) NOT NULL,
	"aging" varchar(50),
	"origin" varchar(100) NOT NULL,
	"nutrition" jsonb NOT NULL,
	"health_claims" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"cook_time" varchar(30) NOT NULL,
	"best_for" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"popular" boolean DEFAULT false NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "products_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" varchar(50) NOT NULL,
	"customer_id" uuid,
	"reviewer_name" varchar(255) NOT NULL,
	"reviewer_location" varchar(100),
	"rating" integer NOT NULL,
	"review_text" text NOT NULL,
	"verified" boolean DEFAULT false NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_id" uuid NOT NULL,
	"product_id" varchar(50) NOT NULL,
	"product_name" varchar(255) NOT NULL,
	"size_kg" integer NOT NULL,
	"qty" integer DEFAULT 1 NOT NULL,
	"price_per_kg" integer NOT NULL,
	"discount_pct" numeric(4, 2) DEFAULT '5.00',
	"delivery_day_of_month" integer DEFAULT 1,
	"status" "subscription_status" DEFAULT 'active' NOT NULL,
	"next_delivery_date" timestamp,
	"last_delivered_at" timestamp,
	"total_deliveries" integer DEFAULT 0 NOT NULL,
	"notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "customers_phone_idx" ON "customers" USING btree ("phone");--> statement-breakpoint
CREATE INDEX "leads_phone_idx" ON "leads" USING btree ("phone");--> statement-breakpoint
CREATE INDEX "leads_converted_idx" ON "leads" USING btree ("converted_to_customer");--> statement-breakpoint
CREATE INDEX "orders_customer_idx" ON "orders" USING btree ("customer_id");--> statement-breakpoint
CREATE INDEX "orders_status_idx" ON "orders" USING btree ("status");--> statement-breakpoint
CREATE INDEX "orders_created_idx" ON "orders" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "products_category_idx" ON "products" USING btree ("category");--> statement-breakpoint
CREATE INDEX "products_active_idx" ON "products" USING btree ("active");--> statement-breakpoint
CREATE INDEX "reviews_product_idx" ON "reviews" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX "reviews_featured_idx" ON "reviews" USING btree ("featured");--> statement-breakpoint
CREATE INDEX "subscriptions_customer_idx" ON "subscriptions" USING btree ("customer_id");--> statement-breakpoint
CREATE INDEX "subscriptions_status_idx" ON "subscriptions" USING btree ("status");