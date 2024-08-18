"use client";

import Link from "next/link";
import {FaYoutube, FaInstagram, FaTwitter, FaFacebook} from "react-icons/fa";

interface ContainerProps {
  containerStyle?: string;
}

const socilLinks = [
  {icon: <FaYoutube />, href: "https://youtube.com"},
  {icon: <FaInstagram />, href: "https://instagram.com"},
  {icon: <FaTwitter />, href: "https://twitter.com"},
  {icon: <FaFacebook />, href: "https://facebook.com"},
];
function Socials({containerStyle}: ContainerProps) {
  return (
    <ul className={`${containerStyle}`}>
      {socilLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          className="hover:fill-blue-700"
        >
          {link.icon}
        </Link>
      ))}
    </ul>
  );
}

export default Socials;
