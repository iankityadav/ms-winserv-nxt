"use client";
import { useLazyGetServicesListQuery } from "@/store/services/api.endpoint";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "bg-green-600 p-2 px-4 mx-4 rounded-md text-white",
    cancelButton: "bg-red-600 p-2 px-4  mx-4 rounded-md text-white",
  },
  buttonsStyling: false,
});
const ReactSwal = withReactContent(swalWithBootstrapButtons);
enum ServiceEnum {
  "",
  "Stopped",
  "StartPending",
  "StopPending",
  "Running",
  "ContinuePending",
  "PausePending",
  "Paused",
}

const ServicesPage = ({ params }: { params: { id: number } }) => {
  const [getServicesList, { data, isError, isLoading }] =
    useLazyGetServicesListQuery();
  const [services, setServices] = useState([]);
  useEffect(() => {
    params.id && getServicesList({ id: params.id });
    data && setServices(data);
  }, [data, getServicesList, params.id]);
  const findService = (e: any) => {
    const input = e.target.value;
    if (!input) {
      setServices(data);
    } else {
      setServices(
        services.filter((s: any) =>
          s?.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  };
  const handleClick = (e: any) => {
    ReactSwal.fire({
      title: e.name,
      html: (
        <div>
          Status: {ServiceEnum[e.status]}
          <div className="text-sm text-gray-500">
            Click to start or stop the service on the server
          </div>
        </div>
      ),
      confirmButtonText: "Start",
      cancelButtonText: "Stop",
      showCancelButton: true,
    });
  };
  return (
    <div>
      {isError ? (
        <div className="h-screen flex flex-col justify-center items-center">
          Error
        </div>
      ) : (
        <div className="h-screen flex flex-col">
          <div className="sm:pt-6 pt-4 flex justify-center items-center gap-x-2 mt-14">
            <input
              type="text"
              className="px-3 py-1 rounded-lg"
              onChange={findService}
            />
            <button
              type="submit"
              className="my-3 rounded-lg bg-blue-200 py-1 px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          <div className="max-h-[80vh] overflow-y-scroll w-full ">
            <div className="flex flex-col justify-center items-center text-blue-700">
              {services?.map((e: any, i: number) => {
                return (
                  <div
                    key={i}
                    className="flex sm:w-3/4 w-full sm:text-base text-sm p-2 justify-between"
                    onClick={() => {
                      handleClick(e);
                    }}
                  >
                    <div className="flex justify-between w-full bg-white shadow-md rounded-md p-3">
                      <div>{e.name}</div>
                      <div className="text-gray-700">
                        {ServiceEnum[e.status]}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
