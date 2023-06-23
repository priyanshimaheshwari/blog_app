import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="">
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">{data.title}</h1>
          <p className="text-lg font-absolute">
            {data.desc}
          </p>
          <div className="flex items-center gap-2">
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className="object-cover rounded-full"
            />
            <span className="text-2xl">{data.username}</span>
          </div>
        </div>
        <div className="flex-1 h-96 relative">
          <Image
            src={data.img}
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-12 font-absolute text-xl text-[#999] text-justify">
        <p className="text-md">
         {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
