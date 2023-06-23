import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[50px] text-md flex items-center justify-between mt-4">
      <div>©2023 Mamia. All rights reserved.</div>
      <div className="flex items-center gap-4">
        <Image src="/1.png" width={15} height={15} className="cursor-pointer opacity-60" alt="Lama Dev Facebook Account" />
        <Image src="/2.png" width={15} height={15} className="cursor-pointer opacity-60" alt="Lama Dev" />
        <Image src="/3.png" width={15} height={15} className="cursor-pointer opacity-60" alt="Lama Dev" />
        <Image src="/4.png" width={15} height={15} className="cursor-pointer opacity-60" alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;
