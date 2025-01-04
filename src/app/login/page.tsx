"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import banner from "./../../../public/assets/images/login-banner.jpg";
import logo from "../../../public/assets/logo/logo.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-between p-3 w-100 min-h-screen">
      <div className=" w-[50%] flex flex-col items-center justify-center max-h-screen ">
        <div className="w-[72%] flex justify-start">
          <Image src={logo} alt="banner-img" className="object-cover" />
        </div>
        <form onSubmit={handleLogin} className=" p-8 rounded  w-[80%] ">
          <div className="mb-5 flex flex-col gap-[10px]">
            <h2 className="text-3xl font-bold ">Welcome</h2>
            <p className="text-base font-thin">
              Please enter your account details
            </p>
          </div>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <div className="mb-5">
            <label className="block text-gray-700 mb-1 font-semibold">
              Username
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-1.5 rounded-xl"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 px-3 py-1.5 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#4153F0] text-white w-full py-2 rounded-xl hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
      <div className="w-[50%] rounded-lg overflow-hidden">
        <Image
          src={banner}
          alt="banner-img"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;
