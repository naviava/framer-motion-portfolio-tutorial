"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {}

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const scrollButtonAnimation = {
  opacity: 0,
  y: 50,
  transition: {
    duration: 2,
    repeat: Infinity,
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};

export default function Hero({}: HeroProps) {
  return (
    <div
      id="home"
      className="hero relative h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]"
    >
      <div className="wrapper mx-auto h-full max-w-[1366px]">
        <motion.div
          variants={textVariants}
          className="textContainer flex h-full w-[50%] flex-col justify-center gap-[40px]"
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            className="text-[30px] font-bold tracking-[10px] text-[#663399]"
          >
            HARVEY TYLER
          </motion.h2>
          <motion.h1 variants={textVariants} className="text-[88px]">
            Full-stack web developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons space-x-5">
            <motion.button
              variants={textVariants}
              className="rounded-[10px] border border-white bg-transparent p-5 font-light text-white"
            >
              See the latest work
            </motion.button>
            <motion.button
              variants={textVariants}
              className="rounded-[10px] border border-white bg-transparent p-5 font-light text-white"
            >
              Contact me
            </motion.button>
          </motion.div>
          <motion.div variants={textVariants} animate="scrollButtonAnimation">
            <motion.div animate={scrollButtonAnimation}>
              <Image
                width={50}
                height={50}
                src="/scroll.png"
                alt="Scroll down image"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer absolute bottom-[-130px] w-[50%] whitespace-nowrap text-[40vh] font-bold tracking-tighter text-white/5"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="absolute right-0 top-0 h-full">
        <Image width={1000} height={1000} src="/hero.png" alt="Hero image" />
      </div>
    </div>
  );
}
