import MaxWidth from "@/components/general/MaxWidth";
import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portbase",
};

const HomePage = async () => {
  const session = getCookie("connectedLog", { cookies });

  return (
    <>
      <MaxWidth className="grid md:grid-cols-3 gap-x-6 gap-y-4">
        <div className="bg-white border rounded-sm md:p-10 pb-24 p-5 pt-10  md:col-span-2 text-iam-blue-500">
          <h1 className="text-2xl font-bold mb-4">Welcome</h1>
          <p className="font-medium text-xl md:w-10/12 leading-8">
            Your access to digital services in port and logistics simple,
            secure, individual, free
          </p>

          <div className="border-y-[2.3px]  border-dotted border-y-iam-orange-500 my-4 py-2">
            <div className="relative md:w-9/12 w-full md:h-[5rem] h-[4rem] mx-auto">
              <Image
                src="/images/icon-desktop.png"
                alt="icons"
                className="hidden md:block object-contain"
                fill
              />
              <Image
                src="/images/icon-mobile.png"
                alt="icons"
                className="block md:hidden object-contain"
                fill
              />
            </div>
          </div>
          <div className="space-y-4 text-sm text-iam-blue-500">
            <div className="space-y-4">
              <h4>One single gateway to various services</h4>
              <p>
                IAMconnected is your access point to numerous digital
                port-related and logistics-related services. You will no longer
                need to remember login details for each service. Logging in once
                through IAMconnected suffices.
              </p>
            </div>
            <div className="space-y-4">
              <h4>How can you participate</h4>
              <p>
                On your first visit to IAMconnected, you create a personal
                identity once. This consists of a self-selected, unique username
                plus a strong password. You will receive a confirmation email.
              </p>
            </div>
            <div className="space-y-4">
              <h4>Security first</h4>
              <p>
                For security reasons it is important that each person creates
                their own individual account. Please do not use a shared
                account, whereby multiple people share and use the same login
                credentials. Preferably use an email address with the domain
                name of your organization. This makes it clear you are logging
                in on behalf of your company.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border rounded-sm px-8 py-12 space-y-6 h-fit">
          {session === "true" ? (
            <>
              <h2 className="text-iam-blue-500 text-2xl font-bold">
                Go to dashboard
              </h2>
              <Button
                className="bg-iam-orange-500 px-10 text-wrap md:py-11 py-8 text-base leading-[1.2rem]"
                size="lg"
              >
                <Link href="/orders">
                  {" "}
                  Go to IAMconnected account Dashboard
                </Link>
              </Button>
            </>
          ) : (
            <>
              <h2 className="text-iam-blue-500 text-2xl font-bold">
                Ready to get started?
              </h2>
              <Button
                className="bg-iam-orange-500 px-10 text-wrap md:py-11 py-8 text-base leading-[1.2rem]"
                size="lg"
              >
                <Link href="/login">Log in to IAMconnected account now</Link>
              </Button>
            </>
          )}
        </div>
      </MaxWidth>
    </>
  );
};

export default HomePage;
