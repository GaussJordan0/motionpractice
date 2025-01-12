"use client";
import { motion, AnimatePresence } from "motion/react";
import { textVariants, parentVariants } from "./variants";
import { texts } from "./texts";
import { useState, useEffect } from "react";
export default function Index() {
  const AnimationLoopCounter = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
      }, 3000);
    },[currentIndex]);
    return currentIndex;
  };
  const index = AnimationLoopCounter();
  return (
    <div className="text-nowrap origin-center text-white relative w-full h-full">
      <AnimatePresence mode="sync">
        <motion.div
          className="font-bold text-5xl relative"
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={index}
        >
          <div className="overflow-hidden absolute">
            <motion.div variants={textVariants}>
              {texts[index].upper}
            </motion.div>
          </div>

          {
            <div className="overflow-hidden absolute top-16">
              <motion.div variants={textVariants}>
                {texts[index].lower}
              </motion.div>
            </div>
          }
        </motion.div>
      </AnimatePresence>
      
    </div>
  );
}
