"use client";
import {usePathname} from "next/navigation";
import {AnimatePresence, motion} from "framer-motion";

function PageTransition({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{opacity: 1}}
        animate={{
          opacity: 0,
          transition: {duration: 1, delay: 1, ease: "easeIn"},
        }}
        className="w-screen h-screen fixed z-40 bg-white pointer-events-none top-0"
      />
      {children}
    </AnimatePresence>
  );
}

export default PageTransition;
