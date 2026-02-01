"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // This stops the page from just refreshing
    
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        alert("Registration Successful! Now try to Login."); // REQUIRED SUCCESS MESSAGE
        window.location.href = "/"; // Redirect to login
      } else {
        const errorData = await res.json();
        alert("Error: " + errorData.message); // REQUIRED ERROR MESSAGE
      }
    } catch (err) {
      alert("Network error: Could not connect to the database.");
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Register Account</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
