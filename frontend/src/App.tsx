import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1e293b",
            color: "#fff",
            border: "1px solid #4f46e5",
          },
          success: {
            iconTheme: {
              primary: "#4f46e5",
              secondary: "#fff",
            },
          },
        }}
      />
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
