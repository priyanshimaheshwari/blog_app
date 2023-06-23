import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="">
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className="" key={item.id}>
          <div className="flex-1 h-[500px] relative">
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            <h1 className="text-4xl">{item.title}</h1>
            <p className="text-xl">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
