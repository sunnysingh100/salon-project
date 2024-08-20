"use client";

import Image from "next/image";

function TreatmentPage() {
  return (
    <section className="min-h-screen flex items-center overflow-x-hidden">
      <div className="container flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex items-center justify-between">
          {/* text */}
          <div className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto">
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none ">
              Indulge in Our Luxurious Treatments
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Tailored skincare solution for a healthy complexion, offering
              customized care for radiant skin
            </p>
            {/* items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]" />
                  <h3 className="text-2xl">Classic Facial</h3>
                </div>
                <p className="pl-7 text-[15px]">
                  Deep cleaning, exfoilation and hydration for a refreshed
                  complexion
                </p>
              </div>
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Chemical Peel</h3>
                </div>
                <p className="pl-7 text-[15px]">
                  Peeling to remove dead skin cells and impurities
                </p>
              </div>
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Acne Treatment</h3>
                </div>
                <p className="pl-7 text-[15px]">
                  Treatment to remove dead skin cells and impurities
                </p>
              </div>
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Hydrating Treatment</h3>
                </div>
                <p className="pl-7 text-[15px]">
                  Treatment to remove dead skin cells and impurities
                </p>
              </div>
            </div>
            {/* btn */}
            <button className="btn mx-auto xl:mx-0">Discover more</button>
          </div>
          {/* image */}
          <div className="hidden xl:flex w-[384px] h-[534px] relative">
            <Image
              src="/assets/treatments/img.jpg"
              fill
              quality={100}
              alt="treatment image"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TreatmentPage;
