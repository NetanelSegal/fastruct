"use client";

import Image from "next/image";
import TypingEffect from "@/components/TypingEffect";
import { useRef } from "react";
import Parallax from "@/components/Parallax";
import { UseScrollOptions } from "motion/react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const offset: UseScrollOptions["offset"] = ["center center", "end start"];
  const unitType = "vh";

  return (
    <div ref={ref} className="bg-light relative pt-[30vh]">
      {/* text container */}
      <Parallax endRange={15} ref={ref} offset={offset} unitType={unitType}>
        <div className="flex flex-col flex-wrap justify-end px-[12%] lg:justify-between xl:flex-row xl:items-end">
          <h1 className="text-h1 font-bebas text-dark whitespace-nowrap uppercase">
            Build{" "}
            <TypingEffect
              strings={["Faster", "Smarter", "For Life"]}
              className="text-accent"
            />
          </h1>
          <p className="text-h6 font-poppins text-dark max-w-xl">
            Fastruct delivers modular and panelized buildings designed to fit
            your needs - from consultation to completion.
          </p>
        </div>
      </Parallax>

      {/* image container */}
      <Parallax endRange={-15} ref={ref} offset={offset} unitType={unitType}>
        <div className="relative overflow-hidden aspect-[3/1]">
          <Image
            priority
            fill
            src="/assets/hero-image.png"
            alt="Modern modular home"
            className="object-top object-cover "
          />
        </div>
      </Parallax>
    </div>
  );
};

export default HeroSection;
