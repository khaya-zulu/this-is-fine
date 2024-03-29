import { pgTable, integer, varchar, pgEnum } from "drizzle-orm/pg-core";
import { relations, type InferSelectModel } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";

export const actionTypesEnum = pgEnum("action_types", ["like", "view"]);

export const tableEpisodes = pgTable("episodes", {
  id: varchar("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  title: varchar("title").notNull(),
  index: integer("index").notNull(),
  youtube_url: varchar("youtube_url").notNull(),
  // bucket/key.
  thumbnailPath: varchar("thumbnail_path").notNull(),
  guestName: varchar("guest_name").notNull(),
});

export type Episode = InferSelectModel<typeof tableEpisodes>;

export const episodesRelations = relations(tableEpisodes, ({ many }) => ({
  actions: many(tableActions),
}));

export const tableActions = pgTable("actions", {
  id: varchar("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  episode_id: varchar("episode_id")
    .notNull()
    .references(() => tableEpisodes.id),
  userId: varchar("user_id"),
  type: actionTypesEnum("type").notNull(),
});

export type Action = InferSelectModel<typeof tableActions>;

export const actionsRelations = relations(tableActions, ({ one }) => ({
  episode: one(tableEpisodes, {
    fields: [tableActions.episode_id],
    references: [tableEpisodes.id],
  }),
}));

export const comments = pgTable("comments", {
  id: varchar("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: varchar("user_id"),
  body: varchar("body").notNull(),
  episode_id: varchar("episode_id")
    .notNull()
    .references(() => tableEpisodes.id),
});
