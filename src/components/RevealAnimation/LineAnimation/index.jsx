"use client";
import { motion } from "motion/react";
import { drawingVariants } from "./variants";

export default function Index({ onAnimationComplete, className }) {
  return (
    <motion.div className={className}>
      <motion.svg
        width={"100%"}
        height={"100%"}
        xmlns="http://www.w3.org/2000/svg"
        variants={drawingVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onAnimationComplete={onAnimationComplete}
      >
        <motion.line
          variants={drawingVariants}
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="gray"
          strokeWidth="1"
        />
      </motion.svg>
    </motion.div>
    
  );
}
