import { and, eq, sql } from "drizzle-orm";
import { publicProcedure, router } from "./trpc";

import { db, tableEpisodes, tableActions } from "~/db";

import { supabase } from "~/supabase";

export const appRouter = router({
  getEpisodes: publicProcedure.query(async () => {
    const episodes = await db.select().from(tableEpisodes);

    // todo before review: instead of Promise.all, use a single query to fetch all actions for all episodes
    // just prototype for now.
    return Promise.all(
      episodes.map(async (epi) => {
        const [bucket, key] = epi.thumbnailPath.split("/");

        // fetch episode thumbnail
        const thumbnail = await supabase.storage.from(bucket).getPublicUrl(key);

        // fetch actions group by type
        const actions = await db
          .select({
            type: tableActions.type,
            count: sql<number>`cast(count(${tableActions.id}) as int)`,
          })
          .from(tableActions)
          .where(eq(tableActions.episode_id, epi.id))
          .groupBy(tableActions.type);

        return {
          id: epi.id,
          thumbnail: thumbnail.data.publicUrl,
          title: epi.title,
          idx: epi.index,
          views: actions.find((a) => a.type === "view")?.count ?? 0,
          likes: actions.find((a) => a.type === "like")?.count ?? 0,
          youtubeUrl: epi.youtube_url,
          guestName: epi.guestName,
        };
      })
    );
  }),
});

export type AppRouter = typeof appRouter;
