import Galaxy from "@/components/Galaxy";
import Header from "@/components/Header";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
// import './App.css'

const AppLayout = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Prevent horizontal scroll
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <div className="grid-background z-10"></div>
      <div className="fixed -z-20" style={{ width: "100%", height: "700px" }}>
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.15}
          glowIntensity={0.2}
        />
      </div>
      <main className="min-h-screen container" style={{ overflowX: "hidden" }}>
        <Header />
        <Outlet />
      </main>
      <div className="p-8 text-2xl text-center">
        Made With 💗 By {" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
         DeekshantTyagi.
        </span>
      </div>
    </>
  );
};

export default AppLayout;
