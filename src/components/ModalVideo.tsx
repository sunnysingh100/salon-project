"use client";
import ReactPlayer from "react-player/youtube";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

function ModalVideo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          <button className="relative w-[58px] h-[58px] bg-white flex items-center justify-center rounded-full shadow-2xl shadow-accent">
            <Image
              src="/assets/home/play.svg"
              width={36}
              height={36}
              alt="play-svg"
            />
          </button>
          <span className="text-lg font-primary">Watch Video</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>Watch Video</DialogTitle>
          <DialogDescription>this is a video</DialogDescription>
        </VisuallyHidden>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={"http://www.youtube.com/watch?v=Er5a7snyQKM"}
          controls={true}
          muted
        />
      </DialogContent>
    </Dialog>
  );
}

export default ModalVideo;
