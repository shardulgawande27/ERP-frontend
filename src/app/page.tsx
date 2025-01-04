"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login"); // Redirect to Login by default
  }, [router]);

  return null;
};

export default Home;
