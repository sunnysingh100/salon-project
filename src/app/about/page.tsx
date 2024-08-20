"use client";
import {CursorContext} from "@/components/CursorProvider";
import StatsItem from "@/components/StatsItem";
import {motion} from "framer-motion";
import Image from "next/image";
import {useContext} from "react";
function About() {
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
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col xl:flex-row items-center w-full h-full justify-between">
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{opacity: 0, x: -60}}
            animate={{
              opacity: 1,
              x: 1,
              transition: {delay: 2, duration: 0.8, ease: "easeInOut"},
            }}
            className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0"
          >
            <Image
              src="/assets/about/img.jpg"
              alt="about image"
              fill
              priority
              quality={100}
              sizes="(max-width: 1200px) 100vw, 50vw"
            />
          </motion.div>

          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{opacity: 0, x: 60}}
            animate={{
              opacity: 1,
              x: 1,
              transition: {delay: 2.4, duration: 0.8, ease: "easeInOut"},
            }}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Commited to Your Skin&apos;s Health and Beauty
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Tailored skincare solution for a healthy complexion, offering
              customized care for radiant skin
            </p>
            {/* items */}
            <div className="grid grid-cols-3 mb-14 mx-auto gap-[30px] xl:mx-0">
              <div>
                <StatsItem countNum={13} text="Years On Market" />
              </div>
              <div>
                <StatsItem countNum={35} countText="k+" text="Happy Clients" />
              </div>
              <div>
                <StatsItem
                  countNum={97}
                  countText="%"
                  text="Natural Ingradients"
                />
              </div>
            </div>

            {/* button */}
            <button className="btn mx-auto xl:mx-0">Contact Us</button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
