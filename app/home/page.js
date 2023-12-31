"use client";
import React from "react";
import { toastSuccess } from "../utils/theme";
import styles from "./page.module.scss";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold hover:text-white hover:tracking-wide transition-all">
              Hello there
            </h1>
            <p className="mb-5  hover:text-white hover:tracking-wide transition-all">
              This is a shopping website mockup for Xenonstack Assignment
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                router.push("/items");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
