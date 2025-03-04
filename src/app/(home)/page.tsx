import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to CashMonitor</h1>
      <p className="text-lg mt-4">A simple money tracker app</p>
      <p className="text-lg mt-4">
        Built with React, TypeScript, TailwindCSS, and Vite
      </p>
      <Button className="mt-4">Get Started</Button>
    </div>
  );
};

export default Home;
