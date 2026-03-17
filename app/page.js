"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./login/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  const [page, setPage] = useState("home");

  return (
    <div className="flex flex-col min-h-screen">

      <Navbar setPage={setPage} />

      <div className="flex-grow">
        {page === "home" && (
          <div className="flex items-center justify-center h-[80vh] bg-gray-100">
            <h2 className="text-3xl font-bold">Welcome to Home Page</h2>
          </div>
        )}

        {page === "login" && <Login />}
        {page === "dashboard" && <Dashboard />}
      </div>

      <Footer />

    </div>
  );
}