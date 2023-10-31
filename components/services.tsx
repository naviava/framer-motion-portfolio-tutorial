"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ServicesProps {}

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function Services({}: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-200px", once: false });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      className="services flex h-full flex-col justify-between bg-gradient-to-b from-[#0c0c1d] to-[#111132]"
    >
      <motion.div
        variants={variants}
        className="textContainer flex flex-1 items-center gap-5 self-end text-right text-[20px] font-extralight text-gray-400"
      >
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr className="w-[500px] border-gray-400" />
      </motion.div>
      <motion.div
        variants={variants}
        className="titleContainer flex flex-[2] flex-col items-center"
      >
        <div className="title flex items-center gap-12">
          <div className="relative h-[100px] w-[300px] rounded-full">
            <Image
              fill
              src="/people.webp"
              alt="Services"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="select-none text-[96px] font-thin">
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title flex items-center gap-12">
          <h1 className="select-none text-[96px] font-thin">
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button className="h-[100px] w-[300px] rounded-full border-none bg-[#FFA500] text-2xl text-black">
            WHAT WE DO?
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="listContainer m-auto flex max-w-[1366px] flex-[2]"
      >
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="box flex flex-col justify-between border-[0.5px] border-gray-600 p-12"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, dolor voluptatum veniam minima culpa mollitia iusto
            alias modi enim quam inventore consectetur debitis porro aperiam
            fugiat odit ipsa libero blanditiis!
          </p>
          <button className="border-none bg-[#FFA500] p-2.5 text-black">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="box flex flex-col justify-between border-[0.5px] border-gray-600 p-12"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, dolor voluptatum veniam minima culpa mollitia iusto
            alias modi enim quam inventore consectetur debitis porro aperiam
            fugiat odit ipsa libero blanditiis!
          </p>
          <button className="border-none bg-[#FFA500] p-2.5 text-black">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="box flex flex-col justify-between border-[0.5px] border-gray-600 p-12"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, dolor voluptatum veniam minima culpa mollitia iusto
            alias modi enim quam inventore consectetur debitis porro aperiam
            fugiat odit ipsa libero blanditiis!
          </p>
          <button className="border-none bg-[#FFA500] p-2.5 text-black">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="box flex flex-col justify-between border-[0.5px] border-gray-600 p-12"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, dolor voluptatum veniam minima culpa mollitia iusto
            alias modi enim quam inventore consectetur debitis porro aperiam
            fugiat odit ipsa libero blanditiis!
          </p>
          <button className="border-none bg-[#FFA500] p-2.5 text-black">
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
