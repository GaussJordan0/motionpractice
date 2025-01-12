"use client";
import { motion, AnimatePresence } from "motion/react";
import LineAnimation from "./LineAnimation";
import { useState } from "react";
import ImageAnimation from "./ImageAnimation";
import HeroTextAnimation from "../HeroTextAnimation";
import HeroImageAnimatio from "../HeroTextAnimation/HeroImageAnimation"

export default function index() {
  const [animationComplete, setAnimationComplete] = useState({
    animation1: false,
    animation2: false,
  });

  const handleAnimationComplete = () => {
    setAnimationComplete((prevState) => ({ ...prevState, animation1: true }));
  };

  const handleSecondAnimationComplete = () => {
    setAnimationComplete((prevState) => ({ ...prevState, animation2: true }));
  };

  return (
    <div className="relative h-[100vh] w-[100vw]">
      <AnimatePresence>
        {!animationComplete.animation1 && (
          <motion.div
            exit={{
              opacity: 0,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
            className="absolute top-[50%] w-full"
          >
            <LineAnimation onAnimationComplete={handleAnimationComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {animationComplete.animation1 && (
        <div className="h-full w-full relative">
          <div className="absolute">
            <ImageAnimation
              className="w-[100vw] h-[100vh] relative"
              onAnimationComplete={handleSecondAnimationComplete}
            />
          </div>
          <div className=" relative  flex items-center justify-center h-full w-full">
            <AnimatePresence>
              {!animationComplete.animation2 && (
                <div className="overflow-hidden">
                  <motion.div
                    className="  relative z-[99]"
                    exit={{
                      y: "100%",
                      transition: {
                        duration: 1.2,
                        ease:[.3,1.06,.58,1]
                      },
                    }}
                  >
                    <ImageAnimation className="w-[17.5vw] aspect-square relative" />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
            <div className="absolute  z-1">
              {animationComplete.animation2 && (
                <div>
                  <HeroTextAnimation />
               

                </div>

              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
