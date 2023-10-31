"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "~/lib/utils";

interface ParallaxProps {
  type: "services" | "portfolio";
}

export default function Parallax({ type }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className={cn(
        "parallax relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#111132]",
        type === "services" ? "to-[#0c0c1d]" : "to-[#505064]",
      )}
    >
      <motion.h1 style={{ y: yText }} className="text-[100px] font-bold">
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains absolute z-[3] h-full w-full bg-[url('/mountains.png')] bg-cover bg-bottom" />
      <motion.div
        style={{ y: yBg }}
        className={cn(
          "planets absolute z-[2] h-full w-full bg-[url('/planets.png')] bg-cover bg-bottom",
          type === "services"
            ? "bg-[url('/planets.png')]"
            : "bg-[url('/sun.png')]",
        )}
      />
      <motion.div
        style={{ x: yBg }}
        className="stars absolute z-[1] h-full w-full bg-[url('/stars.png')] bg-cover bg-bottom"
      />
    </div>
  );
}
