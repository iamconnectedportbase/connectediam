"use client";

import HomeLogo from "@/components/general/HomeLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginType } from "@/schema";
import { PiWarningCircleFill } from "react-icons/pi";
import { setCookie } from "cookies-next";

import { useEffect, useState } from "react";

import AuthError from "@/components/general/AuthError";
import { delay } from "@/lib/utils";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const [loginError, setLoginError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    const usernameInput = document.getElementById("username");
    if (usernameInput) {
      usernameInput.focus();
    }
  }, []);

  const submitHandler: SubmitHandler<LoginType> = async (formData) => {
    setLoading(true);
    await delay(2);
    if (formData.username === "name") {
      setLoginError(true);
      setLoading(false);
      return;
    }

    setCookie("connectedLog", "true", {
      path: "/",
    });
    window.location.href = "/";
  };

  return (
    <div className="bg-white w-full max-w-[400px] mx-auto rounded-sm shadow-sm border relative">
      <div className="h-[6.25rem] flex justify-center items-center border-b">
        <HomeLogo />
      </div>
      <div className="py-5 px-[2.6rem]">
        <div>
          <h2 className="text-zinc-600 font-semibold text-[1rem] my-4">
            Sign in
          </h2>
          <form onSubmit={handleSubmit(submitHandler)}>
            {loginError && <AuthError message="Unable to sign in" />}
            {loading && (
              <div className="absolute z-10 top-[85px] left-1/2 -translate-x-1/2 bg-white px-2">
                <div className="loader"></div>
              </div>
            )}
            <div className="space-y-4">
              <div className="space-y-[0.43rem]">
                <Label>Username</Label>
                <Input
                  className="text-sky-900 box_shadow"
                  {...register("username")}
                  id="username"
                  disabled={loading}
                />
                {errors?.username && (
                  <span className="flex text-sm text-red-600 items-center gap-1">
                    <PiWarningCircleFill className="size-4" />
                    {errors?.username?.message}
                  </span>
                )}
              </div>
              <div className="space-y-[0.43rem]">
                <Label>Password</Label>
                <Input
                  className="text-sky-900 box_shadow "
                  type="password"
                  autoComplete="off"
                  {...register("password")}
                  disabled={loading}
                />
                {errors?.password && (
                  <span className="flex text-sm text-red-600 items-center gap-1">
                    <PiWarningCircleFill className="size-4" />
                    {errors?.password?.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-[30px] mb-[14px] ">
              <label
                htmlFor="input42"
                className="text-[13px] text-gray-500 flex items-center gap-2  py-1.5 group"
              >
                <span className="size-4 aspect-square inline-flex border justify-center items-center group-hover:border-black/25 rounded-[2px]">
                  <input
                    type="checkbox"
                    name="remember"
                    id="input42"
                    className="hidden peer"
                  />
                  <Check className="text-green-600 font-black hidden peer-checked:flex" />
                </span>
                <span>Remember me</span>
              </label>
            </div>
            <Button
              size="lg"
              className="w-full h-[50px] rounded-[3px] mb-[1.5rem] bg-iam-blue-500 "
              disabled={loading}
            >
              Sign in
            </Button>
          </form>
        </div>

        <Link href="#" className="text-sky-600 w-fit mx-auto block text-sm">
          Need help signing in?
        </Link>
        <div className="mt-[30px] border-t py-[30px] text-sm">
          <span className="inline-block mr-2 text-gray-500">
            Don&apos;t have an account?
          </span>
          <Link href="#" className="text-sky-600">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
