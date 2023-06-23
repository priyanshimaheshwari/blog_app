import React from "react";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="text-white bg-[#53c28b] p-4 rounded-lg">{text}</button>
    </Link>
  );
};

export default Button;