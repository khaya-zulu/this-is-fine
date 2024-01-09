"use client";

import { RouterOutput } from "~/trpc";

import { PlayIcon } from "~/components/icons/play";
import { FireIcon } from "~/components/icons/fire";
import { EyesIcon } from "~/components/icons/eyes";

import Link from "next/link";

export const EpisodeCard = ({
  thumbnail,
  idx,
  title,
  likes,
  views,
  guestName,
}: RouterOutput["episodes"]["list"][number]) => {
  return (
    <Link href={`/episodes/${idx}`}>
      <div className="flex items-center gap-6 p-4 bg-white rounded-md group border-4 border-slate-100 relative">
        <div className="rounded-md overflow-hidden border-2 hover:border-iris-200 w-36 shadow transition-all group-hover:-translate-y-1 duration-200 absolute -bottom-4">
          <img
            src={
              "https://cdn.dribbble.com/users/12363/screenshots/14457904/media/0ddfca7922a3a820eafe27ebae1038a0.png?resize=1000x750&vertical=center" ??
              thumbnail
            }
            alt="Episode thumbnail"
            className="w-full h-36 object-cover flex-1 bg-slate-200"
          />
          <div className="flex justify-between items-center p-4 bg-white">
            <PlayIcon className="w-5 h-5" />
            <h3 className="text-right font-playpen"># {idx}</h3>
          </div>
        </div>
        <div className="w-36" />
        <div className="py-2">
          <div className="text-lg font-playpen">{title}</div>
          <div className="mt-1 text-slate-600">{guestName}</div>

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
    </Link>
  );
};
