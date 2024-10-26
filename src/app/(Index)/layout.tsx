import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = getCookie("connectedLog", { cookies });

  return (
    <>
      <style>
        {`body {
            background: #E0F0FE
            }`}
      </style>
      <Navbar session={session} />
      <main className="pt-10 pb-20">{children}</main>
      <Sidebar />
      <Footer />
    </>
  );
}
