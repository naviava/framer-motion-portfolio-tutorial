"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CursorProps {}

export default function Cursor({}: CursorProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function mouseMoveHandler(evt: MouseEvent) {
      setCursorPosition({ x: evt.clientX, y: evt.clientY });
    }

    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);

  return (
    <motion.div
      animate={{ x: cursorPosition.x, y: cursorPosition.y }}
      transition={{ duration: 0 }}
      className="cursor fixed z-[9999] h-12 w-12 rounded-full border"
    />
  );
}
