"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/login" : "/api/register";
    
    const res = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (res.ok) {
      if (isLogin) {
        localStorage.setItem("userEmail", email);
        router.push("/portfolio");
      } else {
        setMessage("Registration successful! Please login.");
        setIsLogin(true);
      }
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login to Portfolio" : "Register Account"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" placeholder="Email" className="w-full p-2 border rounded"
            onChange={(e) => setEmail(e.target.value)} required 
          />
          <input 
            type="password" placeholder="Password" className="w-full p-2 border rounded"
            onChange={(e) => setPassword(e.target.value)} required 
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <button 
          onClick={() => setIsLogin(!isLogin)} 
          className="w-full mt-4 text-sm text-blue-500 hover:underline"
        >
          {isLogin ? "Need an account? Register" : "Have an account? Login"}
        </button>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
}