import { router } from "./trpc";

import { episodesList } from "./episodes/list";
import { episodesGetByIndex } from "./episodes/getByIndex";

export const appRouter = router({
  episodes: router({
    list: episodesList,
    getByIndex: episodesGetByIndex,
  }),
});

export type AppRouter = typeof appRouter;
