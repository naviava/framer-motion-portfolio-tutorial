"use client";

import { motion } from "framer-motion";

import Sidebar from "~/components/sidebar/sidebar";
import SocialIcon from "~/components/navbar/social-icon";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <div className="h-[100px]">
      <Sidebar />
      <div className="m-auto flex h-full max-w-[1366px] items-center justify-between">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold"
        >
          Old Man Nav
        </motion.span>
        <div className="social flex gap-x-5">
          <SocialIcon filePath="/facebook.png" />
          <SocialIcon filePath="/instagram.png" />
          <SocialIcon filePath="/youtube.png" />
          <SocialIcon filePath="/dribbble.png" />
        </div>
      </div>
    </div>
  );
}
