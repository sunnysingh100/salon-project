"use client";
import CountUp from "react-countup";

interface StatsItemProps {
  countNum: number;
  countText?: string;
  text: string;
}

function StatsItem({countNum, countText, text}: StatsItemProps) {
  return (
    <div className="text-center font-primary">
      <div className="md:text-[40px] text-accent mb-2 md:mb-4 text-3xl font-bold md:font-normal">
        <CountUp end={countNum} delay={2.8} duration={6} />
        <span className="text-center">{countText}</span>
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
}

export default StatsItem;
