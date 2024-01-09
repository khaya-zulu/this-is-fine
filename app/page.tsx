"use client";

import { trpc } from "~/trpc";

import { EpisodeCard } from "~/components/episode-card";

export default function Home() {
  const episodesQuery = trpc.episodes.list.useQuery();

  return (
    <>
      {episodesQuery.data?.map((epi) => (
        <EpisodeCard key={epi.id} {...epi} />
      ))}
    </>
  );
}
