"use client";

import { NextPage } from "next";

import { useEffect } from "react";

import { trpc } from "~/trpc";

import { EyesIcon } from "~/components/icons/eyes";
import { FireIcon } from "~/components/icons/fire";
import { ShareIcon } from "~/components/icons/share";

const EpisodePage: NextPage<{ params: { episodeIdx: number } }> = ({
  params,
}) => {
  const episodeQuery = trpc.episodes.getByIndex.useQuery({
    index: +params.episodeIdx,
  });

  return (
    <div className="flex flex-col gap-6 w-[768px]">
      <iframe
        width="768"
        height="400"
        src={episodeQuery.data?.youtubeUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-md"
        onClick={() => {
          console.log("clicked...");
        }}
      ></iframe>

      <div className="flex justify-between w-[768px] items-center">
        <div className="font-playpen">
          {episodeQuery.data?.title} - {episodeQuery.data?.guestName}
        </div>

        <div className="flex">
          <div className="py-2 px-4 flex gap-2 items-center">
            <ShareIcon className="w-6 h-6" /> share
          </div>
          <div className="flex rounded-full overflow-hidden border-2 bg-white shadow border-iris-200">
            <div className="flex gap-3 text-center px-4 py-2">
              <EyesIcon className="w-6 h-6" />
              <div>{episodeQuery.data?.views}</div>
            </div>

            <button className="flex gap-3 text-center px-4 py-2 border-l-2 border-iris-200 hover:text-orange-500 transition-colors">
              <FireIcon className="w-6 h-6" />
              <div>{episodeQuery.data?.likes}</div>
            </button>
          </div>
        </div>
      </div>

      <div>
        <hr />
      </div>

      <div className="w-[768px]">
        <div className="font-bold mb-8">7 comments</div>

        <div className="flex flex-col gap-6">
          <div>
            <input
              type="text"
              className="border-b p-4 w-full"
              placeholder="Add a comment..."
            />
          </div>
          <div>
            <div className="flex gap-4">
              <b>@davidchris</b>{" "}
              <span className="text-slate-600">2 years ago.</span>
            </div>
            <div className="mt-2">
              Crossing fingers for image optimization and resizinga1{" "}
            </div>
          </div>

          <div>
            <div className="flex gap-4">
              <b>@davidchris</b>{" "}
              <span className="text-slate-600">2 years ago.</span>
            </div>
            <div className="mt-2">
              Crossing fingers for image optimization and resizinga1{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodePage;
