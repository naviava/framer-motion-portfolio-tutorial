"use client";

import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export default function Links() {
  const items = ["home", "services", "portfolio", "contact", "about"];

  return (
    <motion.div
      variants={variants}
      className="absolute flex h-full w-full flex-col items-center justify-center gap-[20px] text-[40px]"
    >
      {items.map((item) => (
        <motion.a
          key={item}
          href={`#${item}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="capitalize"
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
