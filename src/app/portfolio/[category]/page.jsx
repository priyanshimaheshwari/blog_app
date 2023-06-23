import React from "react";
import Image from "next/image";
import {items} from "./data.js";
import {notFound} from "next/navigation";
import Button from "@/src/components/Button/Button";


const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className="">
      <h1 className="text-[#53c28b] text-5xl mt-8 ">{params.category}</h1>

      {data.map((item) => (
        <div className="flex gap-12 mt-12 mb-24 [&:nth-child(odd)]:flex-row-reverse" key={item.id}>
          <div className="flex-1 flex flex-col justify-center gap-3">
            <h1 className="text-5xl">{item.title}</h1>
            <p className="text-xl">{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className="flex-1 h-[500px] relative">
            <Image
              className="object-cover"
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
