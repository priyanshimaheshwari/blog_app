"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="text-xl font-bold mb-6">Create an Account</h1>
      <h2 className="text-lg font-bold mb-4">Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[300px]">
        <input
          type="text"
          placeholder="Username"
          required
          className="bg-transparent p-4 border-2 rounded border-[#bbb] font-bold text-xl"
        />
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
        <button className="w-[300px] p-4 bg-[#53c28b] rounded text-lg text-white font-bold hover:bg-[#49b07d]">Register</button>
        {error && "Something went wrong!"}
      </form>
      <span className="text-[#bbb]">- OR -</span>
      <Link  className="underline text-[#605f5f] hover:text-[rgb(84,83,83)] cursor-pointer" href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
