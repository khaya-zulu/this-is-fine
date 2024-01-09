import { Episode } from "~/db";

import { eq, sql } from "drizzle-orm";

import { db, tableActions } from "~/db";
import { supabase } from "~/supabase";

export const createEpisodeObject = async (epi: Episode) => {
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

  const youtubeUrl = new URL(epi.youtube_url);
  youtubeUrl.searchParams.append("autoplay", "1");

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
};
