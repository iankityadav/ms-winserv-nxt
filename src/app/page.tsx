"use client";
import { useLazyGetUserDetailQuery } from "@/store/services/api.endpoint";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

export default function Home() {
  const { token, user } = useAppSelector(
    (state) => state.authenticationReducer
  );
  const [getUserDetail, { data, isError }] = useLazyGetUserDetailQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    !user.name && getUserDetail({});
    console.log(user);
  }, [getUserDetail, user, token]);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {user.name ? (
        <div className="text-xl font-light">Hi {user.name}!</div>
      ) : (
        <></>
      )}
      <div className="sm:w-[80vw] w-[90vw] bg-white rounded-lg shadow-md m-4 mt-16">
        <div className="sm:grid flex sm:grid-cols-2 grid-cols-1">
          <div
            className="h-full w-full bg-right-top block"
            style={{
              background: "url(/landing.png)",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="gap-y-5 flex flex-col p-4 items-center justify-center">
            <div className="text-3xl font-light ">
              Windows Remote Services Management System
            </div>
            <div className="text-blue-900">
              Manage remote Windows services securely and efficiently through a
              RESTful API built with FastAPI. Users can sign up and log in using
              JWT-based authentication to ensure secure access. The core
              functionality includes managing remote Windows services, such as
              starting and stopping them, as well as retrieving detailed service
              information. Additionally, the application offers a paginated view
              of all services.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
