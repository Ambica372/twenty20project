"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PortfolioPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (!savedEmail) {
      router.push("/"); 
    } else {
      setEmail(savedEmail);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("/");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #0070f3", paddingBottom: "10px" }}>
        <h1>Ambica Natraj | Portfolio</h1>
        <button onClick={handleLogout} style={{ background: "red", color: "white", padding: "8px", border: "none", cursor: "pointer" }}>Logout</button>
      </nav>

      <section style={{ marginTop: "20px" }}>
        <h2>About Me</h2>
        <p><strong>Education:</strong> B.Tech in Computer Science, M. S. Ramaiah University Of Applied Sciences [cite: 8]</p>
        <p><strong>Academic Performance:</strong> CGPA: 9.48 [cite: 8]</p>
        <p><strong>Email:</strong> {email}</p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <p><strong>AI & ML:</strong> PyTorch, Deep Learning (CNNs, GANs), NLP, RAG [cite: 12]</p>
        <p><strong>Computer Vision:</strong> YOLOv8-face, ArcFace, OpenCV [cite: 13]</p>
      </section>

      <section>
        <h2>Key Projects</h2>
        <ul>
          <li><strong>Facial Detection:</strong> Developed a system using YOLOv8-face and ArcFace for recognition under transparent barriers[cite: 17].</li>
          <li><strong>Agentic AI Platform:</strong> Leading development of an adaptive educational content platform[cite: 19].</li>
          <li><strong>NLP Classifier:</strong> Built a model to predict psychological attachment styles from text[cite: 21].</li>
        </ul>
      </section>
    </div>
  );
}
