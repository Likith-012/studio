// app/page.tsx
"use client"; // Mark as client component
import { fetchBackend } from "@/lib/api";

export default function Home() {
  const testBackend = async () => {
    try {
      const data = await fetchBackend("http://localhost:5000/api/healthcheck");
      alert(`Backend response: ${data}`);
    } catch (err) {
      alert("Failed to connect to backend");
    }
  };

  return (
    <div>
      <h1>Studio Management System</h1>
      <button onClick={testBackend} className="bg-blue-500 text-white p-2 rounded">
        Test Backend Connection
      </button>
    </div>
  );
}