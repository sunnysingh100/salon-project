"use client";

import ModalVideo from "@/components/ModalVideo";
import {motion} from "framer-motion";
import Image from "next/image";

function HomePage() {
  return (
    <section className="min-h-screen flex items-center overflow-x-hidden">
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center h-full">
          {/* text */}
          <div className="w-full text-center xl:text-left xl:w-[550px] pt-[120px]">
            <h1 className="h1 mb-6">
              Natural Beauty <br />
              Starts Here
            </h1>
            <motion.p className="lead max-w-xl mx-auto">
              Tailored skincare solution for a healthy complexion, offering
              customized care for radiant skin
            </motion.p>
            <motion.div className="flex flex-col xl:flex-row gap-6 items-center max-w-max mx-auto xl:mx-0">
              <button className="btn btn-lg">Book an appointment now</button>
              <ModalVideo />
            </motion.div>
          </div>
          {/* image */}
          <div className="flex-1">
            <div className="hidden xl:flex fixed bottom-0">
              <Image
                src="/assets/home/img.png"
                alt="home-image"
                width={864}
                height={650}
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
