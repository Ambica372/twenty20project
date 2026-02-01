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
  }, [router]);

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif", maxWidth: "800px", margin: "auto" }}>
      <header style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #0070f3" }}>
        <h1>Ambica Natraj</h1>
        <button onClick={() => { localStorage.clear(); router.push("/"); }} style={{ color: "red", cursor: "pointer" }}>Logout</button>
      </header>

      <section style={{ marginTop: "20px" }}>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Education:</strong> B.Tech CSE, MSRUAS | <strong>CGPA: 9.48</strong></p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Core Projects</h2>
        <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "#f4f4f4" }}>
          <h3>Facial Detection (YOLOv8-face)</h3>
          <p>High-accuracy recognition system developed for occluded environments.</p>
        </div>
        <div style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
          <h3>Agentic AI Platform</h3>
          <p>Adaptive educational platform using RAG and NLP classifiers.</p>
        </div>
      </section>
    </div>
  );
}
