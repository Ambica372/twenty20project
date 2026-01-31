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
      <nav className="flex justify-between items-center mb-12 bg-white p-4 rounded-lg shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">My Portfolio</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </nav>

      {/* Profile Section */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-bold mb-2">Welcome, {email.split('@')[0]}!</h2>
        <p className="text-gray-600 mb-4">Logged in as: <strong>{email}</strong></p>
        <hr className="my-6" />
        
        <h3 className="text-xl font-semibold mb-4 text-blue-500">About Me</h3>
        <p className="text-gray-700 leading-relaxed">
          I am a passionate Full-Stack Developer with experience in building responsive 
          web applications using Next.js, Tailwind CSS, and MongoDB.
        </p>
      </section>

      {/* Skills & Projects Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-blue-500">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>JavaScript (ES6+)</li>
            <li>React & Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js & MongoDB</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-blue-500">Recent Projects</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Twenty20 Assessment App</p>
              <p className="text-sm text-gray-600">Full-stack auth system with MongoDB integration.</p>
            </div>
            <div>
              <p className="font-bold">Responsive Dashboard</p>
              <p className="text-sm text-gray-600">A clean UI for data visualization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}