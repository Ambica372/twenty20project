"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // For success messages
  const [error, setError] = useState("");     // For error messages
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("User registered successfully! You can now log in.");
        setEmail("");
        setPassword("");
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      
      {/* Success Message Display */}
      {message && <p className="p-2 mb-4 bg-green-100 text-green-700 rounded text-sm">{message}</p>}
      
      {/* Error Message Display */}
      {error && <p className="p-2 mb-4 bg-red-100 text-red-700 rounded text-sm">{error}</p>}

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
