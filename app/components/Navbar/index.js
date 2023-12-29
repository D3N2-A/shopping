"use client";
import { useRouter } from "next/navigation";
import { auth } from "../../../connector/firebase";
import React from "react";

function Navbar() {
  const router = useRouter();
  const logoutHandler = () => {
    auth.signOut().then(() => {
      router.push("/");
    });
  };
  return (
    <div className="relative flex items-center justify-start p-4 lg:px-6">
      <a className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
        <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Acme Store logo"
            viewBox="0 0 32 28"
            className="h-4 w-4 fill-black dark:fill-white h-[16px] w-[16px]"
          >
            <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
            <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
          </svg>
        </div>
        <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
          Shopper's Place
        </div>
      </a>
      <div className="gap-6 flex flex-row items-center justify-start">
        <div className="text-neutral-500 hover:underline hover:text-white transition-all cursor-crosshair underline-offset-4">
          All Items
        </div>
        <div className="text-neutral-500 hover:underline hover:text-white transition-all cursor-crosshair underline-offset-4">
          Contact Us
        </div>
      </div>
      <div
        className="ml-auto"
        onClick={() => {
          logoutHandler();
        }}
      >
        <a className="btn">Log out</a>
      </div>
    </div>
  );
}

export default Navbar;
