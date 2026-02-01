"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ message: "", type: "" }); // To show feedback

  const handleSubmit = async (e) => {
    e.preventDefault(); // STOP the page from refreshing
    setStatus({ message: "Connecting to server...", type: "info" });

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // SUCCESS: Requirement for "Clear success message"
        setStatus({ message: "Registration Successful! You can now log in.", type: "success" });
        alert("Success: User data stored in database!"); 
        setEmail("");
        setPassword("");
      } else {
        // ERROR: Requirement for "Clear error message"
        setStatus({ message: data.message || "Registration failed", type: "error" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ message: "Network error. Check your connection.", type: "error" });
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Register for Portfolio</h2>
      
      {/* SUCCESS/ERROR BOXES */}
      {status.message && (
        <div style={{ 
          padding: '10px', 
          marginBottom: '10px', 
          borderRadius: '5px',
          backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
          color: status.type === 'success' ? '#155724' : '#721c24'
        }}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <button type="submit" style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>
          Register
        </button>
      </form>
    </div>
  );
}
