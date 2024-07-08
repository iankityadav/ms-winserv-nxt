import React from "react";

const Loader = ({
  isFetching,
  isLoading,
  sx,
}: {
  isFetching?: boolean;
  isLoading?: boolean;
  sx?: any;
}) => {
  return (
    <svg
      className={`animate-spin mr-3 ${sx ?? "h-12 w-12"} ${
        isFetching || isLoading ? "" : "hidden"
      } `}
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25 text-pink-500 bg-white"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75 text-pink-200"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Loader;
