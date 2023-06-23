"use client";
import React, { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-[#bbb]">{success ? success : "Welcome Back"}</h1>
      <h2 className="text-[#bbb] mb-8 text-xl ">Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[300px]">
        <input
          type="text"
          placeholder="Email"
          required
          className="bg-transparent p-4 border-2 rounded border-[#bbb] font-bold text-xl"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="bg-transparent p-4 border-2 rounded border-[#bbb] font-bold text-xl"
        />
        <button className="w-[300px] p-4 bg-[#53c28b] rounded text-lg text-white font-bold hover:bg-[#49b07d]">Login</button>
        {error && error}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className="w-[300px] p-4 bg-red-500 rounded text-lg text-white font-bold hover:bg-red-800"
      >
        Login with Google
      </button>
      <span className="text-[#bbb]">- OR -</span>
      <Link className="underline text-[#605f5f] hover:text-[rgb(84,83,83)] cursor-pointer" href="/dashboard/register">
        Create new account
      </Link>
      {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
    </div>
  );
};

export default Login;
