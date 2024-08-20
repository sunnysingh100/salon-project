"use client";
import {CursorContext} from "@/components/CursorProvider";
import ModalVideo from "@/components/ModalVideo";
import {motion} from "framer-motion";
import Image from "next/image";
import {useContext} from "react";

function HomePage() {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext) as {
    mouseEnterHandler: () => void;
    mouseLeaveHandler: () => void;
  };

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2}}}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center h-full">
          {/* text */}
          <motion.div
            initial={{opacity: 0, y: -100}}
            animate={{
              opacity: 1,
              y: 0,
              transition: {delay: 2, duration: 1, ease: "easeInOut"},
            }}
            className="w-full text-center xl:text-left xl:w-[550px] pt-[120px]"
          >
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h1 mb-6"
            >
              Natural Beauty <br />
              Starts Here
            </motion.h1>
            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead max-w-xl mx-auto"
            >
              Tailored skincare solution for a healthy complexion, offering
              customized care for radiant skin
            </motion.p>
            <motion.div
              className="flex flex-col xl:flex-row gap-6 items-center max-w-max mx-auto xl:mx-0"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <button className="btn btn-lg">Book an appointment now</button>
              <ModalVideo />
            </motion.div>
          </motion.div>
          {/* image */}
          <div className="flex-1">
            <motion.div
              initial={{opacity: 0, bottom: "-100%"}}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: {delay: 2.4, duration: 1.2, ease: "easeInOut"},
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:flex fixed bottom-0"
            >
              <Image
                src="/assets/home/img.png"
                alt="home-image"
                width={864}
                height={650}
                quality={100}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default HomePage;
