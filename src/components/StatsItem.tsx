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
      <div className="text-[40px] text-accent mb-4">
        <CountUp end={countNum} delay={0.3} duration={6} />
        <span>{countText}</span>
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
}

export default StatsItem;
