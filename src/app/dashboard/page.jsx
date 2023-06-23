"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {

  //OLD WAY TO FETCH DATA

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json()

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData()
  // }, []);

  const session = useSession();

  const router = useRouter();
  
  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex gap-24">
        <div className="flex-1">
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className="flex items-center justify-between mx-12 " key={post._id}>
                  <div className="w-48 h-24 relative">
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className="text-lg">{post.title}</h2>
                  <span
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className="bg-transparent p-3 border-2 rounded border-[#bbb] font-bold text-xl" />
          <input type="text" placeholder="Desc" className="bg-transparent p-3 border-2 rounded border-[#bbb] font-bold text-xl" />
          <input type="text" placeholder="Image" className="bg-transparent p-3 border-2 rounded border-[#bbb] font-bold text-xl" />
          <textarea
            placeholder="Content"
            className="bg-transparent p-3 border-2 rounded border-[#bbb] font-bold text-xl"
            cols="30"
            rows="10"
          ></textarea>
          <button className="w-[300px] p-4 bg-[#53c28b] rounded text-lg text-white font-bold hover:bg-[#49b07d]">Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
