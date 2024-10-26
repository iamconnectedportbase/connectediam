import LoginForm from "@/components/LoginForm";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const session = getCookie("connectedLog", { cookies });

  if (session && session === "true") {
    redirect("/");
  }
  return <LoginForm />;
};

export default LoginPage;
