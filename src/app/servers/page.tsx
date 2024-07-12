"use client";
import { useLazyGetServersListQuery } from "@/store/services/api.endpoint";
import { useAppSelector } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";

const ServersPage = () => {
  const { user } = useAppSelector((state) => state.authenticationReducer);
  const [getServersList, { data, isError, isLoading }] =
    useLazyGetServersListQuery();
  useEffect(() => {
    console.log(user);
    !data && getServersList({});
  }, [data, getServersList, user]);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex gap-3 justify-center items-center p-4">
        {data?.map((e: any, i: number) => {
          return (
            <div className="bg-white shadow-lg rounded-md p-4" key={i}>
              <div>
                <div className="text-gray-500 text-sm">IP address</div>
                <div>{e.ip}</div>
                <div className="text-gray-500 text-sm">Description</div>
                <div>{e.description}</div>
              </div>
              <div className="my-2">
                <Link
                  href={`/services/${e.id}`}
                  className="bg-blue-400 text-white px-4 py-1 rounded-full"
                >
                  See Services
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServersPage;
