import { pgTable, integer, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";

export const episodes = pgTable("episodes", {
  id: varchar("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  title: varchar("title").notNull(),
  index: integer("index").notNull(),
  youtube_url: varchar("video").notNull(),
  // bucket/key.
  thumbnailPath: varchar("thumbnail_path").notNull(),
});

export const episodesRelations = relations(episodes, ({ many }) => ({
  actions: many(actions),
}));

export const actions = pgTable("actions", {
  id: varchar("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  episode_id: varchar("episode_id").notNull(),
  userId: varchar("user_id"),
});

export const actionsRelations = relations(actions, ({ one }) => ({
  episode: one(episodes, {
    fields: [actions.episode_id],
    references: [episodes.id],
  }),
}));
