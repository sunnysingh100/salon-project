"use client";
import {IoCloseOutline} from "react-icons/io5";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Socials from "./Socials";

type SetMobileNav = (value: boolean) => void;
interface ContainerProps {
  containerStyle?: string;
}

const links = [
  {name: "Home", href: "/"},
  {name: "About", href: "/about"},
  {name: "Treatments", href: "/treatments"},
  {name: "Contact", href: "/contact"},
];

function MobileNav({setMobileNav}: {setMobileNav: SetMobileNav}) {
  const pathname = usePathname();
  return (
    <nav className="relative flex flex-col justify-between h-full p-8">
      <div className="flex justify-end cursor-pointer text-accent">
        <IoCloseOutline
          className="text-4xl"
          onClick={() => setMobileNav(false)}
        />
      </div>
      <ul className="text-white flex flex-col gap-10 text-xl justify-between">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`capitalize ${
              pathname === link.href && "border-b-2 border-accent"
            } max-w-max mx-auto`}
            onClick={() => setMobileNav(false)}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <Socials containerStyle="text-white text-xl flex gap-6 justify-center" />
    </nav>
  );
}

export default MobileNav;
