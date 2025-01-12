"use client";
import { motion } from "motion/react";
import { clipVariants } from "./clipvariants";
import Image from "next/image";
import { images } from "./images";

export default function Index({ className, onAnimationComplete }) {
  return (
    <motion.div
      className={className}
      onAnimationComplete={onAnimationComplete}
      variants={clipVariants}
      initial="hidden"
      animate="visible"
    >
      {images.map((image, index) => {
        return (
          <motion.div
            key={index}
            variants={clipVariants}
            custom={index}
            className="w-full h-full absolute"
          >
            <Image
              src={image}
              fill
              alt={`Image ${index + 1}`}
              className="object-cover"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
