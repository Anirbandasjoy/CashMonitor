/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const Home = () => {
  const handleMakeToast = () => {
    toast("Move to dashboard!", {
      icon: "➡️",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const { setTheme, theme } = useTheme();

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 ${
        theme === "dark" ? "bg-zinc-950" : "bg-gray-50"
      }`}
    >
      <div
        className={`max-w-xl w-full text-start p-10 rounded-lg ${
          theme === "dark" ? "bg-zinc-950" : "bg-gray-50"
        }`}
      >
        {/* Logo & Title */}
        <div className="flex items-center justify-start gap-2 mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOjmLtnY2tgWTpYU9fQS0pm9oMGPkGhG1Mg&s"
            alt="Income Tracker Logo"
            className="w-10 h-10"
          />
          <h1 className="text-4xl font-extrabold">
            <span className="text-blue-500">C</span>
            <span className="text-green-500">a</span>
            <span className="text-purple-500">s</span>
            <span className="text-yellow-500">h</span>
            <span className="text-red-500">M</span>
            <span className="text-teal-500">o</span>
            <span className="text-orange-500">n</span>
            <span className="text-pink-500">i</span>
            <span className="text-indigo-500">t</span>
            <span className="text-blue-400">o</span>
            <span className="text-lime-500">r</span>
          </h1>
        </div>

        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } mb-2`}
        >
          Keep track of your <span className="font-medium">income sources</span>
          , monitor your <span className="font-medium">earnings</span>, and stay
          organized with your{" "}
          <span className="font-medium">financial growth</span>. Manage all your
          income in one simple place.
        </p>

        {/* Privacy Info */}
        <p
          className={`text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          } mt-4 mb-8`}
        >
          We respect your privacy. Income Tracker securely stores your data
          directly on your Google Drive account — no external servers involved.
        </p>

        {/* Buttons */}
        <div className="flex md:flex-row flex-col justify-start gap-4">
          <Link href="/dashboard">
            <Button
              onClick={handleMakeToast}
              className="bg-blue-600 rounded-[3px] hover:bg-blue-700 text-white px-6 cursor-pointer"
            >
              Go to Dashboard
            </Button>
          </Link>
          <Button
            variant="outline"
            className={` ${
              theme === "dark"
                ? "bg-zinc-800 text-white border-gray-700 hover:bg-gray-800 hover:text-white"
                : "bg-white text-gray-700 border-gray-300"
            }  rounded-[3px]  px-6 cursor-pointer`}
          >
            Send Feedback
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Button
                variant="outline"
                className={` ${
                  theme === "dark"
                    ? "bg-zinc-800 text-white border-gray-700 hover:bg-gray-800 hover:text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }  rounded-[3px]  px-6 cursor-pointer`}
              >
                <span className="flex items-center justify-center gap-1">
                  <SunMoon />
                  <span>Theme</span>
                  <ChevronsUpDown />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={
                theme === "dark"
                  ? "bg-zinc-800 border-gray-700 border text-white rounded-[2px]"
                  : "bg-white rounded-[2px]"
              }
            >
              <DropdownMenuLabel className="cursor-pointer">
                Change theme
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setTheme("dark")}
              >
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setTheme("light")}
              >
                Light
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Footer */}
        <p
          className={`text-xs ${
            theme === "dark" ? "text-gray-500" : "text-gray-400"
          } mt-10`}
        >
          Income Tracker is built by{" "}
          <a
            href="https://joydas.vercel.app"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Anirban das joy
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Home;
