CREATE TABLE IF NOT EXISTS "actions" (
	"id" varchar PRIMARY KEY NOT NULL,
	"episode_id" varchar NOT NULL,
	"user_id" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "episodes" (
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"index" integer NOT NULL,
	"video" varchar NOT NULL,
	"thumbnail_path" varchar NOT NULL
);
