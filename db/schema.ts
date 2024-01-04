import { pgTable, integer, varchar, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";

export const actionTypesEnum = pgEnum("action_types", ["like", "view"]);

export const tableEpisodes = pgTable("episodes", {
  id: varchar("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  title: varchar("title").notNull(),
  index: integer("index").notNull(),
  youtube_url: varchar("video").notNull(),
  // bucket/key.
  thumbnailPath: varchar("thumbnail_path").notNull(),
  guestName: varchar("author_name").notNull(),
});

export const episodesRelations = relations(tableEpisodes, ({ many }) => ({
  actions: many(tableActions),
}));

export const tableActions = pgTable("actions", {
  id: varchar("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  episode_id: varchar("episode_id").notNull(),
  userId: varchar("user_id"),
  type: actionTypesEnum("type").notNull(),
});

export const actionsRelations = relations(tableActions, ({ one }) => ({
  episode: one(tableEpisodes, {
    fields: [tableActions.episode_id],
    references: [tableEpisodes.id],
  }),
}));
