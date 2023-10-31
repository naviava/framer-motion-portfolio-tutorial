"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import PortfolioSection from "~/components/portfolio-section";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

export default function Portfolio() {
  const mainDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: mainDivYProgress } = useScroll({
    target: mainDivRef,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(mainDivYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={mainDivRef} className="portfolio">
      <div className="progress sticky left-0 top-0 z-10 pt-12">
        <h1 className="text-center text-4xl font-semibold text-[#FFA500]">
          Featured Work
        </h1>
        <motion.div style={{ scaleX }} className="progressBar h-2.5 bg-white" />
      </div>
      {items.map((item) => (
        <PortfolioSection key={item.id} item={item} />
      ))}
    </div>
  );
}
