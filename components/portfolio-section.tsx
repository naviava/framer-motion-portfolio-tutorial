"use client";

import { useRef } from "react";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

interface PortfolioSectionProps {
  item: {
    id: number;
    title: string;
    img: string;
    desc: string;
  };
}

export default function PortfolioSection({ item }: PortfolioSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sectionYProgress } = useScroll({ target: ref });

  const y = useTransform(sectionYProgress, [0, 1], [-300, 300]);

  return (
    <section key={item.id} className="h-[100vh] snap-center">
      <div className="conatiner flex h-full w-full items-center justify-center overflow-hidden">
        <div className="wrapper m-auto flex h-full max-w-[1366px] items-center justify-center gap-12">
          <div ref={ref} className="relative h-[50%] flex-1">
            <Image
              fill
              src={item.img}
              alt="Project image"
              className="object-cover"
            />
          </div>
          <motion.div
            style={{ y }}
            className="textContainer flex flex-1 flex-col gap-8"
          >
            <h2 className="text-[72px] font-semibold">{item.title}</h2>
            <p className="text-[20px] text-gray-400">{item.desc}</p>
            <button className="w-[200px] rounded-xl border-none bg-[#FFA500] p-2.5 text-black">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
