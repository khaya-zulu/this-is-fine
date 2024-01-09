import { SnapletClient } from "@snaplet/seed";
import { copycat } from "@snaplet/copycat";

const snaplet = new SnapletClient({
  dryRun: process.env.DRY !== "0",
  models: {
    buckets: {
      data: {
        avif_autodetection: true,
        file_size_limit: null,
        allowed_mime_types: null,
      },
    },
    objects: {
      data: {
        id: (seed) => copycat.uuid(seed),
        version: (seed) => copycat.uuid(seed),
        metadata: {},
      },
    },
    episodes: {
      data: {
        guest_name: (seed) => copycat.fullName(seed),
      },
    },
  },
});

// clears all existing data in the database, but keep the structure
await snaplet.$resetDatabase();

// seed "public" schema.
await snaplet.$pipe([
  snaplet.episodes((x) =>
    x(3, (idx) => ({
      index: idx + 1,
      title: `Episode ${idx + 1}`,
      youtube_url: copycat.oneOf([
        "https://www.youtube.com/embed/_OqMRtg4Gy8?si=BEewYL_YxemGzvRJ",
        "https://www.youtube.com/embed/eCbiywoDORw?si=M3eHDn8Ur23Z1Y9m",
      ]),
    }))
  ),
  snaplet.actions((x) => x(50), { autoConnect: true }),
]);

// // seed "storage" schema.
// await snaplet.$pipe([
//   snaplet.buckets((x) =>
//     x(1, () => ({ name: "thumbnails", id: "thumbnails" }))
//   ),
//   snaplet.objects(
//     (x) =>
//       x(10, (idx) => ({
//         name: `episode${idx}`,
//         path_tokens: [`episodes${idx}`],
//       })),
//     {
//       autoConnect: true,
//     }
//   ),
// ]);
