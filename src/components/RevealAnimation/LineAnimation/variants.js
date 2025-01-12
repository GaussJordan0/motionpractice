 export const drawingVariants ={
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
        exit: {
            opacity: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }
    },

}