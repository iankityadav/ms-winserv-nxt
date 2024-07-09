"use client";
import InputBox from "@/components/utils/inputBox";
import SubmitButton from "@/components/utils/submitButton";
import { setCredentials } from "@/store/auth/auth.slice";
import { useLazySignupQuery } from "@/store/services/api.endpoint";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SignupPage = () => {
  const [signup, { data, isError, isLoading, isFetching }] =
    useLazySignupQuery();
  const [formData, setFormData] = useState<object>();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const swal = withReactContent(Swal);

  const handleSignupForm = () => {
    signup(formData).then((res) => {
      if (res.error) {
        swal.fire({
          icon: "error",
          title: "Login Failure",
          text: "Bad Request",
          showConfirmButton: false,
          timer: 1500,
          toast: true,
          position: "top-right",
        });
      }
    });
  };

  useEffect(() => {
    console.log(data);
    if (data) {
      dispatch(setCredentials(data));
      swal
        .fire({
          icon: "success",
          title: "Signup Success",
          text: "Redirecting to login ...",
          showConfirmButton: false,
          timer: 1500,
          toast: true,
          position: "top-right",
        })
        .finally(() => router.push("/login"));
    }
  }, [data, dispatch, router, swal]);

  const handleChange = (label: string) => {
    return (e: any) => {
      setFormData({ ...formData, [label]: e.target.value });
    };
  };
  const inputList = [
    { label: "Name", type: "text", fn: handleChange("name") },
    { label: "Username", type: "text", fn: handleChange("username") },
    { label: "Email", type: "email", fn: handleChange("email") },
    { label: "Password", type: "password", fn: handleChange("password") },
  ];

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <form action={handleSignupForm}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Register
            </h1>
            {inputList.map((el, i) => {
              return (
                <InputBox
                  key={el + "-" + i}
                  type={el.type}
                  label={el.label}
                  handleChange={el.fn}
                ></InputBox>
              );
            })}
          </div>
          <SubmitButton
            isFetching={isFetching}
            isLoading={isLoading}
            label={"Signup"}
          ></SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
