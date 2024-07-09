"use client";
import { logOut } from "@/store/auth/auth.slice";
import { useAppDispatch } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";

const Logout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3">
      <div className="bg-white flex flex-col justify-center items-center gap-3 p-16 w-full">
        <div className="text-blue-800">
          You have been logged out successfully!
        </div>
        <Link
          href="/login"
          className="bg-blue-700 text-blue-100 shadow-lg px-3 py-1.5 rounded-lg"
        >
          Login Again
        </Link>
      </div>
    </div>
  );
};

export default Logout;
