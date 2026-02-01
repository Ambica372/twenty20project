"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Portfolio() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("userEmail");
    if (!user) router.push("/");
    else setEmail(user);
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>{email}'s Portfolio</h1>
      <button onClick={() => { localStorage.clear(); router.push("/"); }} style={{ color: "red" }}>Logout</button>
      <div style={{ marginTop: "20px", border: "1px solid blue", padding: "20px" }}>
        <h2>Ambica Natraj | B.Tech CSE</h2>
        <p><strong>University:</strong> M. S. Ramaiah University Of Applied Sciences</p>
        <p><strong>Academic Excellence:</strong> 9.48 CGPA</p>
        <h3>Core Projects:</h3>
        <ul>
          <li><strong>YOLOv8 Facial Recognition:</strong> Detection under transparent barriers.</li>
          <li><strong>Agentic AI Platform:</strong> Adaptive educational content tailoring.</li>
        </ul>
      </div>
    </div>
  );
}
