"use client"

import React from 'react'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle/DarkModeToggle';

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
  return (
    <div className='h-[100px] flex justify-between items-center'>
      <Link href='/' className='font-bold text-lg'>Mania</Link>
      <div className='flex items-center gap-5'>
        <DarkModeToggle />
      {links.map((link) => (
          <Link key={link.id} href={link.url} className='link'>
            {link.title}
          </Link>
        ))}
        <button className='p-[5px] border-none bg-green-400 text-white rounded-lg' onClick={()=>{
          console.log("logged out");
        }}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar