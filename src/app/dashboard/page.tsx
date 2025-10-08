"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setFirstName(user.firstName || "");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-[#009688]">
        Welcome, {firstName || "User"} 👋🏽
      </h1>
      <p className="text-gray-600 mt-3">
        Glad to have you back on your dashboard.
      </p>
    </div>
  );
}
