import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="">
      <h1 className="my-5">Choose a gallery</h1>
      <div className="flex gap-12">
        <Link href="/portfolio/illustrations" className="border-4 border-[#bbb] border-solid w-[300px] h-[400px] relative bg-cover rounded bg-illustration-pattern">
          <span className="absolute right-3 bottom-3 font-bold text-4xl  hover:text-[#53c28b]">Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className="border-4 border-[#bbb] border-solid w-[300px] h-[400px] relative bg-cover rounded bg-website-pattern">
        <span className="absolute right-3 bottom-3 font-bold text-4xl  hover:text-[#53c28b]">Websites</span>
        </Link>
        <Link href="/portfolio/application" className="border-4 border-[#bbb] border-solid w-[300px] h-[400px] relative bg-cover rounded bg-app-pattern">
        <span className="absolute right-3 bottom-3 font-bold text-4xl  hover:text-[#53c28b]">Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
