"use client";

import {useContext, useState} from "react";
import {CursorContext} from "@/components/CursorProvider";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {AiOutlineMenu} from "react-icons/ai";
import MobileNav from "./MobileNav";
import {HTMLMotionProps} from "framer-motion";
import Nav from "./Nav";
import Socials from "./Socials";
import {FaPhoneAlt} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header() {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext) as {
    mouseEnterHandler: () => void;
    mouseLeaveHandler: () => void;
  };
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="absolute pb-6 xl:pb-[50px]  w-full bg-accent-100 xl:bg-transparent">
      {/* topbar */}
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        <div className="container h-full">
          <div className="flex items-center justify-between h-full">
            {/* phone and email */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal"
            >
              {/* phone */}
              <div className="flex items-center gap-2 text-white">
                <FaPhoneAlt />
                <span>+1 (123) 456-7890</span>
              </div>
              {/* email */}
              <div className="flex items-center gap-2 text-white">
                <IoMdMail />
                <span>info@example.com</span>
              </div>
            </motion.div>
            {/* socials */}
            <motion.div
              className="hidden xl:block"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <Socials containerStyle="flex gap-6 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
      {/* container */}
      <div className="container flex items-center justify-between px-6">
        {/* logo */}
        <Link href="/">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="relative w-[120px] h-[44px] cursor-pointer"
          >
            <Image src="/assets/logo.svg" alt="logo" fill priority />
          </motion.div>
        </Link>
        {/* mobile nav trigger */}
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        {/* mobile nav */}
        <motion.div
          initial={{right: "-100%"}}
          animate={{right: mobileNav ? "0%" : "-100%"}}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>

        {/* nav */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
