import Loader from "../features/loader";

const SubmitButton = ({
  isFetching,
  isLoading,
  label,
}: {
  isFetching: boolean;
  isLoading: boolean;
  label: string;
}) => {
  return (
    <button
      className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-blue-800 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
      disabled={isFetching || isLoading}
    >
      <div className="flex justify-center items-center">
        <Loader sx={"h-6 w-6"} isFetching={isFetching} isLoading={isLoading} />
        <span>{label}</span>
      </div>
    </button>
  );
};

export default SubmitButton;
