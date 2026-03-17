"use client";
import Link from "next/link";

export default function Navbar({ setPage }) {
  return (
    <nav className="flex justify-between items-center bg-blue-600 px-6 py-3 text-white">
      
      <h1 className="text-lg font-bold">Akshada Shelke</h1>

      <div className="space-x-4">
        <button onClick={() => setPage("home")} className="hover:underline">
          Home
        </button>

        <button onClick={() => setPage("login")} className="hover:underline">
          Login
        </button>

        <button onClick={() => setPage("dashboard")} className="hover:underline">
          Dashboard
        </button>
      </div>

    </nav>
  );
}