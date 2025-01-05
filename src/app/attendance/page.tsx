"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Attendance = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") {
      router.push("/login"); // Redirect to Login if not authenticated
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen b">
      <h1 className="text-3xl font-bold">Welcome to the Attendance </h1>
      <h1 className="text-2xl font-bold">(Coming Soon) </h1>
    </div>
  );
};

export default Attendance;
