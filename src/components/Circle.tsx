import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion";
export const Circle = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, children } = props;
  return (
    <div
      className={twMerge(
        "bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full relative",
        className
      )}
    >
        <motion.div 
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className=" absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 border-[6px] border-transparent border-t-fuchsia-500/30">
        </motion.div>
      {children}
    </div>
  );
};
