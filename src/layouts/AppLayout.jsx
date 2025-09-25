import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";
// import './App.css'

const AppLayout = () => {
  return (
    <>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header/>
      <Outlet />
      <div className="p-8 text-2xl text-center">Made With 💗 By DeekshantTyagi.</div>
      </main>
    </>
  );
};

export default AppLayout;
