"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import AuthError from "@/components/general/AuthError";

const DiagonsticForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [resetError, setResetError] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "c4548fc4-b6b3-4dc7-bb1c-65934f881160");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setLoading(true);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((res) => res.json())
      .catch(() => setResetError("Something went wrong"))
      .finally(() => setLoading(false));

    if (res.success) {
      setSuccess(true);
      form.reset();
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }
  }, [success]);

  return (
    <form
      onSubmit={onSubmit}
      className="my-6 flex flex-col gap-4 items-start md:w-1/2 relative"
    >
      {resetError && <AuthError message={resetError} />}
      {success && (
        <div className="border rounded-md flex items-center overflow-hidden gap-4 my-4 w-full">
          <div className="bg-green-500 py-3.5 px-2.5">
            <Check className="size-4 text-white" />
          </div>
          <span className="text-sm text-gray-500">Submitted Sucessfully</span>
        </div>
      )}
      {loading && (
        <div className="absolute z-10 top-[85px] left-1/2 -translate-x-1/2 bg-white px-2">
          <div className="loader"></div>
        </div>
      )}
      <label htmlFor="reading">
        Kindly submit your logistics for diagnostic:
      </label>
      <Input
        id="request"
        name="terminal-reading"
        className="w-full py-2 px-2 border border-iam-blue-500  block focus-within:outline-iam-blue-500"
        disabled={loading}
      />
      <Button disabled={loading}>Submit</Button>
    </form>
  );
};

export default DiagonsticForm;
