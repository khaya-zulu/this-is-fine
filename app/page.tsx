"use client";

import { trpc, RouterOutput } from "~/trpc";

import { PlayIcon } from "~/components/icons/play";
import { FireIcon } from "~/components/icons/fire";
import { EyesIcon } from "~/components/icons/eyes";

export const EpisodeCard = ({
  thumbnail,
  idx,
  title,
  likes,
  views,
}: RouterOutput["getEpisodes"][number]) => {
  return (
    <div className="flex items-center gap-6 p-4 bg-slate-50 rounded-t-md rounded-b-2xl group shadow-sm border-2 border-slate-200 relative">
      <div className="rounded-b-xl rounded-t-md overflow-hidden border-2 border-[#301b3d] hover:border-orange-600 w-36 shadow transition-all group-hover:-translate-y-1 duration-200 absolute bottom-4">
        <img
          src={thumbnail}
          alt="Episode thumbnail"
          className="w-full h-28 object-cover flex-1"
        />
        <div className="flex justify-between items-center p-4 bg-white">
          <PlayIcon className="w-5 h-5" />
          <h3 className="text-right font-playpen"># {idx}</h3>
        </div>
      </div>
      <div className="w-36" />
      <div className="py-2">
        <div className="text-xl font-playpen">{title}</div>
        <div className="mt-1 text-slate-600">Dave Cameron</div>

        <div className="flex items-center gap-2 mt-4 -translate-x-1 mb-2">
          <EyesIcon className="w-5 h-5 text-slate-500" />
          <div>{views}</div>
        </div>

        <div className="flex items-center gap-2 -translate-x-1">
          <FireIcon className="w-5 h-5 text-slate-500" />
          <div>{likes}</div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const episodesQuery = trpc.getEpisodes.useQuery();

  return (
    <>
      {episodesQuery.data?.map((epi) => (
        <EpisodeCard key={epi.id} {...epi} />
      ))}
    </>
  );
}
