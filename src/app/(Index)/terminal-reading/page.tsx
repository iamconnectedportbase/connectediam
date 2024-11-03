import MaxWidth from "@/components/general/MaxWidth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import DiagonsticForm from "@/components/DiagonsticForm";
import TerminalForm from "@/components/TerminalForm";

const TerminalReadingPage = () => {
  const session = getCookie("connectedLog", { cookies });

  if (!session) {
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
            <DiagonsticForm />
          </TabsContent>
          <TabsContent value="request">
            <TerminalForm />
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
