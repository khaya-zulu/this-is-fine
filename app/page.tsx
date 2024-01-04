import { PlayIcon } from "~/components/icons/play";
import { FireIcon } from "~/components/icons/fire";

export const Card = ({ src }: { src: string }) => {
  return (
    <div className="flex items-center gap-6 p-4 bg-slate-50 rounded-t-md rounded-b-2xl group shadow-sm">
      <div className="rounded-b-xl rounded-t-md overflow-hidden border-2 border-[#301b3d] group-hover:border-orange-600 w-36 shadow transition-colors">
        <img src={src} alt="" className="w-full h-28 object-cover flex-1" />
        <div className="flex justify-between items-center p-4 bg-white">
          <PlayIcon className="w-5 h-5" />
          <h3 className="text-right font-playpen"># 4</h3>
        </div>
      </div>
      <div className="py-4">
        <div className="text-xl font-playpen">Episode 1</div>
        <div className="mt-1 text-slate-600">Dave Cameron</div>

        <div className="flex items-center gap-1 mt-4 -translate-x-1 mb-2">
          <PlayIcon className="w-5 h-5 text-slate-500" />
          <div>200</div>
        </div>

        <div className="flex items-center gap-1 -translate-x-1">
          <FireIcon className="w-5 h-5 text-slate-500" />
          <div>2 hours</div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Card src="https://res.cloudinary.com/khaya-zulu/image/upload/v1694797375/Untitled_design_jw9ao1.png" />
      <Card src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww" />
      <Card src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
      <Card src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
    </>
  );
}
