import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-6xl mb-16 text-center">Let us Keep in Touch</h1>
      <div className="flex items-center gap-20">
        <div className="flex-1 h-[500px] relative">
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className="object-contain animate-bounce"
          />
        </div>
        <form className="flex-1 flex flex-col gap-2">
          <input type="text" placeholder="name" className="p-6 bg-transparent border-4   border-[#bbb] text-[#bbb] font-bold text-xl " />
          <input type="text" placeholder="email" className="p-6 bg-transparent border-4   border-[#bbb] text-[#bbb] font-bold text-xl " />
          <textarea
            className="p-6 bg-transparent border-4   border-[#bbb] text-[#bbb] font-bold text-xl "
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <button  className="text-white bg-[#53c28b] p-4 rounded-lg" ><a href="#">Send</a></button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
