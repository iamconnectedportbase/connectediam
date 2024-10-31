"use client";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, ResetPasswordType } from "@/schema";
import { useEffect, useState } from "react";
import { PiWarningCircleFill } from "react-icons/pi";
import { Button } from "./ui/button";
import AuthError from "./general/AuthError";
import { resetPassword } from "@/actions/resetpassword";
import { Check } from "lucide-react";

const ResetPasswordForm = ({ userId }: { userId: string }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [resetError, setResetError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
    },
  });

  const submitHandler: SubmitHandler<ResetPasswordType> = async (formData) => {
    setLoading(true);

    try {
      const res = await resetPassword(
        formData.old_password,
        formData.new_password,
        userId
      );

      if (res?.error) {
        setResetError(res.error);
        return;
      }

      setResetError("");
      setSuccess(true);
      reset();
    } catch (error) {
      console.error(error);
      setResetError("Unable to reset password: ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  }, [success]);

  return (
    <div className="md:w-1/2 relative">
      {resetError && <AuthError message={resetError} />}
      {loading && (
        <div className="absolute z-10 top-[85px] left-1/2 -translate-x-1/2 bg-white px-2">
          <div className="loader" />
        </div>
      )}
      {success && (
        <div className="border rounded-md flex items-center overflow-hidden gap-4 my-4">
          <div className="bg-green-500 py-3.5 px-2.5">
            <Check className="size-4 text-white" />
          </div>
          <span className="text-sm text-gray-500">
            Password Reset Sucessfully
          </span>
        </div>
      )}
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        <div className="space-y-[0.43rem]">
          <Label htmlFor="old_password">Old Password</Label>
          <Input
            className="text-sky-900 box_shadow"
            {...register("old_password")}
            id="old_password"
            disabled={loading}
          />
          {errors?.old_password && (
            <span className="flex text-sm text-red-600 items-center gap-1">
              <PiWarningCircleFill className="size-4" />
              {errors?.old_password?.message}
            </span>
          )}
        </div>
        <div className="space-y-[0.43rem]">
          <Label htmlFor="new_password"> New Password</Label>
          <Input
            className="text-sky-900 box_shadow "
            id="new_password"
            {...register("new_password")}
            disabled={loading}
          />
          {errors?.new_password && (
            <span className="flex text-sm text-red-600 items-center gap-1">
              <PiWarningCircleFill className="size-4" />
              {errors?.new_password?.message}
            </span>
          )}
        </div>
        <Button
          size="lg"
          className="w-fit h-[50px] rounded-[3px] mb-[1.5rem] bg-iam-blue-500 "
          disabled={loading}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
