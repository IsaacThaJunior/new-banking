"use client";
import CountUp from "react-countup";
const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <section className="w-full">
      <CountUp decimal="." decimals={2} end={amount} duration={2} prefix="$" />
    </section>
  );
};

export default AnimatedCounter;
