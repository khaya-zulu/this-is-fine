DO $$ BEGIN
 CREATE TYPE "action_types" AS ENUM('like', 'view');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "actions" ADD COLUMN "type" "action_types" NOT NULL;