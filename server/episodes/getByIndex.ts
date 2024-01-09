import { z } from "zod";
import { eq } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

import { publicProcedure } from "../trpc";

import { db, tableEpisodes } from "~/db";

import { createEpisodeObject } from "../services/createEpisodeObject";

export const episodesGetByIndex = publicProcedure
  .input(z.object({ index: z.number() }))
  .query(async ({ input }) => {
    const episode = await db.query.tableEpisodes.findFirst({
      where: eq(tableEpisodes.index, input.index),
    });

    if (!episode) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Episode not found" });
    }

    return createEpisodeObject(episode);
  });
