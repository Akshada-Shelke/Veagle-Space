"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    console.log(email, password);
    alert("Login Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        
        <h2 className="text-xl font-semibold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
         
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />

       
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />

         
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}