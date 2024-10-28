import MaxWidth from "@/components/general/MaxWidth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import Link from "next/link";

const RegisterOrder = () => {
  const session = getCookie("connectedLog", { cookies });

  if (!session && session !== "true") {
    redirect("/");
  }
  return (
    <MaxWidth>
      <div className="bg-white border rounded-sm md:p-10 p-5 pb-24  text-iam-blue-500">
        <Tabs defaultValue="register" className="md:w-9/12">
          <TabsList className="grid w-full grid-cols-2 h-16 bg-transparent">
            <TabsTrigger
              value="register"
              className=" text-sm md:text-base data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-iam-orange-500 data-[state=active]:shadow-none data-[state=active]:text-iam-orange-500 rounded-none text-iam-blue-500"
            >
              Register Order
            </TabsTrigger>
            <TabsTrigger
              value="terminated"
              className=" text-sm md:text-base data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-iam-orange-500 data-[state=active]:shadow-none rounded-none text-iam-blue-500 data-[state=active]:text-iam-orange-500 "
            >
              Terminated Order
            </TabsTrigger>
          </TabsList>

          <TabsContent value="register">
            <div className="my-6 space-y-4">
              <h4>
                Kindly download and fill the form for submission and approval of
                your order by the terminal port authority.
              </h4>
              <Button>
                <a href="/images/test.pdf" download>
                  Download
                </a>
              </Button>
              <p>
                Orders will be processeed in configuration of your supplier and
                carrier with accordance to the terms and conditions of the
                terminal between transferrer and transferor.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="terminated">
            <div className="w-full h-full flex items-center justify-center min-h-[30dvh]">
              You no terminated order
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MaxWidth>
  );
};

export default RegisterOrder;
