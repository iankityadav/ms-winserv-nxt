import React from "react";

const InputBox = ({
  label,
  type,
  handleChange,
}: {
  label: string;
  type: string;
  handleChange: (e: any) => void;
}) => {
  return (
    <div>
      <label
        htmlFor={label.toLowerCase()}
        className="block mb-1 text-gray-600 font-semibold"
      >
        {label}
      </label>
      <input
        id={label.toLowerCase()}
        type={type}
        className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-black"
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default InputBox;
