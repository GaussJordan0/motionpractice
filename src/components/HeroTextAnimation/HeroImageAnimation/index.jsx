'use client'
import { motion } from "motion/react";
import {  imageVariants } from "../variants";
import {images} from "../images"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function index() {
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
    <motion.div className="absolute h-full w-full" 
    variants={imageVariants}
    initial="hidden"
    animate="visible"
    key={index}>
      <Image
        src={images[index]}
        fill
        alt="imagealt"/>

    </motion.div>
  )
}
