import { easeIn } from "motion";

export const clipVariants = {
    hidden: {
        clipPath:"polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
    },
    visible: (index) => ({
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        transition: {
            duration: 0.5,
            delay: ((index / 2 )+0.5),
            ease: easeIn
        },
    }),
};