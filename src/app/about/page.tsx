"use client";

import StatsItem from "@/components/StatsItem";
import Image from "next/image";
function About() {
  return (
    <section className="min-h-screen flex items-center overflow-x-hidden">
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col xl:flex-row items-center w-full h-full justify-between">
          {/* image */}
          <div className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8  xl:mx-0">
            <Image
              src="/assets/about/img.jpg"
              alt="about image"
              fill
              sizes="50vw"
              priority
              quality={100}
            />
          </div>

          {/* text */}
          <div className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
