import { publicProcedure } from "../trpc";

import { db } from "~/db";

import { createEpisodeObject } from "../services/createEpisodeObject";

export const episodesList = publicProcedure.query(async () => {
  const episodes = await db.query.tableEpisodes.findMany();

  // todo before review: instead of Promise.all, use a single query to fetch all actions for all episodes
  // just prototype for now.
  return Promise.all(episodes.map(createEpisodeObject));
});
