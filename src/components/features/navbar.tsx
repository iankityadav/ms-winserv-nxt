import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

const poppins = Poppins({ weight: "200", subsets: ["latin"] });
const NavBar = () => {
  return (
    <nav
      className="mx-auto flex items-center justify-between p-6 lg:px-8 bg-white fixed w-full"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="text-gray-900 font-light text-xl border-y-[1px]">
            WinMS
          </span>
        </Link>
      </div>
      <div className={"flex lg:gap-x-12 gap-x-4 " + poppins.className}>
        <Link
          href="/"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Home
        </Link>
        <Link
          href="/teams"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Servers
        </Link>
        <Link
          href="#"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Info
        </Link>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
        <Link
          href="/login"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          <button className="bg-blue-600 text-white px-2 py-1 rounded-md">
            Signup
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
