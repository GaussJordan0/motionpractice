export const textVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.0, 1, 0.7, 1],
    },
  },
  exit:{
    y:"-100%",
    transition: {
        duration: 0.5,
        ease: [0.0, 1, 0.7, 1],
    }
}
};

export const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },

  },
  exit: {
    transition:{
        staggerChildren: 0.3
    }
  }
};

export const imageVariants = {
  hidden: {
    opacity: 0,
    scale:1.5
  },
  visible: {
    opacity:1,
    scale:1,
    transition: {
      duration: 1,
      ease: [0.0, 1, 0.7, 1],
    },
  },


};
