"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") {
      router.push("/login"); // Redirect to Login if not authenticated
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen b">
      <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
    </div>
  );
};

export default Dashboard;
