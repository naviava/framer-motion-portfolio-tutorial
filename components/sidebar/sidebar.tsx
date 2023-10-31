import { useState } from "react";

import { motion } from "framer-motion";

import Links from "~/components/sidebar/links";
import ToggleButton from "~/components/sidebar/toggle-button";

interface SidebarProps {}

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
      // restDelta: 2
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Sidebar({}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="z-[999] flex flex-col items-center justify-center bg-white text-black"
    >
      <motion.div
        variants={variants}
        className="fixed inset-y-0 left-0 z-[999] w-[400px] bg-white"
      >
        <Links />
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} />
    </motion.div>
  );
}
