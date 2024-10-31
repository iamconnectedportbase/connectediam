import MaxWidth from "@/components/general/MaxWidth";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import ResetPasswordForm from "@/components/ResetPasswordForm";

const SettingsPage = () => {
  const session = getCookie("connectedLog", { cookies });

  if (!session) {
    redirect("/");
  }
  return (
    <MaxWidth>
      <div className="bg-white border rounded-sm md:p-10 p-5 pb-24  text-iam-blue-500">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <ResetPasswordForm userId={session} />
      </div>
    </MaxWidth>
  );
};

export default SettingsPage;
