import Image from "next/image";
import { Section } from "@/components/Section";
import AnimatedText from "@/components/AnimatedText";
import Parallax from "@/components/Parallax";

const IntroSection = () => {
  return (
    <Section bgColor="dark" textColor="light" className="z-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative z-10 flex flex-col md:-mr-24">
          <AnimatedText
            text="More Than Just Construction"
            className="text-h2 font-bebas "
          />
          <p className="text-h6">
            <AnimatedText text="Fastruct is redefining how homes and spaces are built. By combining modular and panelized construction, we deliver faster timelines, higher quality, and a smoother experience from start to finish." />
          </p>
        </div>
        <Parallax startRange={10} endRange={-10} unitType="vh" className="z-10">
          <div className="relative aspect-video overflow-hidden rounded-lg scale-125 translate-x-[10%] -translate-y-[30%]">
            <Image
              fill
              sizes="100%"
              src="https://picsum.photos/800/600"
              alt="Construction site"
              className="object-cover"
            />
          </div>
        </Parallax>
      </div>
    </Section>
  );
};

export default IntroSection;
