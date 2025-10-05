"use client";

import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <h1 className="text-4xl">Hello Next JS</h1>
      <button onClick={handleNavigation}  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition duration-200 cursor-pointer">Dashboard</button>
    </div>
  );
};

export default HomePage;
