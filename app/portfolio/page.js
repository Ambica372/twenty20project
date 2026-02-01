"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PortfolioPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Get the logged-in user's email from localStorage
    const savedEmail = localStorage.getItem("userEmail");
    if (!savedEmail) {
      router.push("/"); // Redirect to login if not logged in
    } else {
      setEmail(savedEmail);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Header Section */}
      <nav className="flex justify-between items-center mb-12 bg-white p-4 rounded-lg shadow-sm max-w-5xl mx-auto">
        <h1 className="text-xl font-bold text-blue-600">Ambica Natraj | Portfolio</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </nav>

      {/* Profile Section */}
      <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Ambica Natraj</h2>
            <p className="text-blue-600 font-medium text-lg">Computer Science Engineering Student</p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-gray-600"><strong>Email:</strong> {email}</p>
            <p className="text-gray-600"><strong>CGPA:</strong> 9.48</p>
          </div>
        </div>
        
        <hr className="my-6" />
        
        <h3 className="text-xl font-semibold mb-4 text-blue-500 border-b-2 border-blue-100 pb-2 inline-block">About Me</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          A highly passionate Computer Science engineering student at M. S. Ramaiah University of Applied Sciences. 
          I have a strong academic record and a passion for connecting technology with human behavior. 
          Experienced in leading projects in AI, personality analysis, and database systems with a research-focused approach.
        </p>
      </section>

      {/* Skills & Projects Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skills Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-blue-500">Technical Skills</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-bold text-sm text-gray-500 uppercase tracking-wider">Programming</p>
              <p>Python, Java (JSwing), C</p>
            </div>
            <div>
              <p className="font-bold text-sm text-gray-500 uppercase tracking-wider">AI & Machine Learning</p>
              <p>PyTorch, Deep Learning (CNNs, GANs), NLP, RAG</p>
            </div>
            <div>
              <p className="font-bold text-sm text-gray-500 uppercase tracking-wider">Computer Vision</p>
              <p>OpenCV, YOLOv8-face, ArcFace</p>
            </div>
            <div>
              <p className="font-bold text-sm text-gray-500 uppercase tracking-wider">Tools & Frameworks</p>
              <p>React.js, MySQL, Android Studio, NetBeans IDE</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-blue-500">Key Projects</h3>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-800">Facial Detection & Recognition</p>
              <p className="text-sm text-gray-600 mt-1">High-accuracy system using YOLOv8-face and ArcFace for detection under transparent reflective barriers.</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">Personalized Learning Platform</p>
              <p className="text-sm text-gray-600 mt-1">Leading development of an adaptive Agentic AI platform tailoring educational content to learner profiles.</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">Attachment Styles Detection</p>
              <p className="text-sm text-gray-600 mt-1">Built a Machine Learning classifier using NLP to predict psychological attachment styles from text.</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">Research Management System</p>
              <p className="text-sm text-gray-600 mt-1">Designed an academic data management system using Java JSwing and MySQL for research tracking.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Accomplishments Section */}
      <section className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
        <h3 className="text-xl font-bold mb-4 text-blue-500">Accomplishments</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>1st Rank Holder in 10th board exams (96.2%) and Distinction in 2nd PUC (94%)[cite: 32].</li>
          <li>Represented Bangalore Urban three times at State-Level Chess Tournaments.</li>
          <li>AI structured data extraction project for healthcare records using RAG[cite: 24, 25].</li>
        </ul>
      </section>
    </div>
  );
}
