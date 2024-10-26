import MaxWidth from "@/components/general/MaxWidth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

const TerminalReadingPage = () => {
  const session = getCookie("connectedLog", { cookies });

  if (!session && session !== "true") {
    redirect("/");
  }
  return (
    <MaxWidth>
      <div className="bg-white border rounded-sm md:p-10 p-6 pb-24 text-iam-blue-500">
        <Tabs defaultValue="reading" className="md:w-9/12">
          <TabsList className="grid w-full grid-cols-2 h-16 bg-transparent">
            <TabsTrigger
              value="reading"
              className="text-sm md:text-base data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-iam-orange-500 data-[state=active]:shadow-none data-[state=active]:text-iam-orange-500 rounded-none text-iam-blue-500"
            >
              Terminal Reading
            </TabsTrigger>
            <TabsTrigger
              value="request"
              className=" text-sm md:text-base data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-iam-orange-500 data-[state=active]:shadow-none rounded-none text-iam-blue-500 data-[state=active]:text-iam-orange-500 "
            >
              Terminal Request
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reading">
            <div className="my-6 flex flex-col gap-4 items-start md:w-1/2">
              <label htmlFor="reading">
                Kindly submit your logistics for diagnostic:
              </label>
              <input
                id="request"
                className="w-full py-2 border border-iam-blue-500  block focus-within:outline-iam-blue-500"
              />
              <Button>Submit</Button>
            </div>
          </TabsContent>
          <TabsContent value="request">
            <div className="my-6 flex flex-col gap-4 items-start md:w-8/12">
              <label htmlFor="request">
                Kindly submit your terminal request for consideration:
              </label>
              <textarea
                id="request"
                rows={4}
                className="w-full py-2 border border-iam-blue-500  block focus-within:outline-iam-blue-500 "
              />
              <span>Please note that diagnosis takes 12 - 24 hours</span>
              <Button>Submit</Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-[1fr_2fr] gap-y-2 uppercase md:w-10/12 gap-x-2 text-sm md:text-base">
          <h4 className="font-bold">Terminal Reflective code</h4>
          <p>BFG987654008769678-NLRTMHA00001 AB</p>

          <h4 className="font-bold">Terminal Officer</h4>
          <p>Thomas jcogtov</p>

          <h4 className="font-bold">Terminal Id</h4>
          <p>75687nj/rtmnl</p>
        </div>
      </div>
    </MaxWidth>
  );
};

export default TerminalReadingPage;
