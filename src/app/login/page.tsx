"use client";
import InputBox from "@/components/utils/inputBox";
import SubmitButton from "@/components/utils/submitButton";
import { setCredentials } from "@/store/auth/auth.slice";
import { useLazyLoginQuery } from "@/store/services/api.endpoint";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const LoginPage = () => {
  const [loginApp, { isError, data, isLoading, isFetching }] =
    useLazyLoginQuery();
  const [formData, setFormData] = useState<object>({});
  const dispatch = useAppDispatch();
  const router = useRouter();
  const swal = withReactContent(Swal);

  const handleLoginForm = () => {
    loginApp(formData).then((res) => {
      if (res.error) {
        swal.fire({
          icon: "error",
          title: "Login Failure",
          text: "Invalid username or password",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        swal
          .fire({
            icon: "success",
            title: "Login Success",
            text: "Redirecting to Application ...",
            showConfirmButton: false,
            timer: 1500,
          })
          .finally(() => router.push("/"));
      }
    });
  };

  useEffect(() => {
    console.log(data);
    if (data) {
      dispatch(setCredentials(data));
    }
  }, [data, dispatch]);

  const handleChange = (label: string) => {
    return (e: any) => {
      setFormData({ ...formData, [label]: e.target.value });
    };
  };
  const inputList = [
    { label: "Username", type: "username", fn: handleChange("username") },
    { label: "Password", type: "password", fn: handleChange("password") },
  ];

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <form action={handleLoginForm}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Login
            </h1>
            {inputList.map((el: any, i) => {
              return (
                <InputBox
                  label={el.label}
                  type={el.type}
                  handleChange={el.fn}
                  key={i}
                ></InputBox>
              );
            })}
          </div>
          <SubmitButton
            isFetching={isFetching}
            isLoading={isLoading}
            label={"Login"}
          ></SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
