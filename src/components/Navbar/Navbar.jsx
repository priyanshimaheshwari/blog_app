"use client";

import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";



const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className="flex items-center justify-between h-20">
      <Link href="/" className="font-bold text-2xl">
        lamamia
      </Link>
      <div className="flex items-center gap-6">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="flex items-center gap-6">
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className="p-[5px] border-none text-white bg-[#53c28b] cursor-pointer rounded-md" onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
