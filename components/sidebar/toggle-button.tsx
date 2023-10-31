import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface ToggleButtonProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ToggleButton({ setIsOpen }: ToggleButtonProps) {
  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className="fixed left-[40px] top-[25px] z-[999] h-[50px] w-[50px] rounded-[50%] border-none"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}
