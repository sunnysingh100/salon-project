"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
  {name: "Home", href: "/"},
  {name: "About", href: "/about"},
  {name: "Treatments", href: "/treatments"},
  {name: "Contact", href: "/contact"},
];
function Nav() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="container flex gap-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`capitalize ${
              pathname === link.href ? "border-b-2 border-accent" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
