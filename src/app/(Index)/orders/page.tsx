import MaxWidth from "@/components/general/MaxWidth";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

const OrderPage = () => {
  const session = getCookie("connectedLog", { cookies });

  if (!session && session !== "true") {
    redirect("/");
  }
  return (
    <MaxWidth>
      <div className="text-sm md:text-base bg-white border rounded-sm md:p-10 p-6 pb-24 text-iam-blue-500">
        <h1 className="text-2xl font-bold mb-4 border-b pb-2 ">
          PORT OF ROTTERDAM
        </h1>
        <div className="grid grid-cols-[1fr_2fr] gap-y-2 uppercase md:w-8/12 gap-x-2">
          <h4 className="font-bold">Titleholder</h4>
          <p>AO Mellyaneft</p>

          <h4 className="font-bold">Ordered by</h4>
          <p>hainan outmerirand tech co ltd</p>

          <h4 className="font-bold">Carrier</h4>
          <p>Ocean traffic services</p>

          <h4 className="font-bold">Product</h4>
          <p>Jet fuel Aviation grade jet a1</p>

          <h4 className="font-bold">Inspection Company</h4>
          <p>sgs</p>
        </div>

        <div className="md:w-6/12 mb-5 mt-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="acc-1">
              <AccordionTrigger className="uppercase font-semibold">
                Order Inspection
              </AccordionTrigger>
              <AccordionContent className="space-y-2">
                <div className="grid grid-cols-[1fr_2fr] gap-y-1">
                  <h6 className="font-bold">Category</h6>
                  <p>Compliance</p>
                </div>
                <p>Subject to compliance</p>
                <p className="uppercase">Cargo act of transfer (aot)</p>
                <p className="uppercase">
                  Cargo discharge programming plan (dpp)
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="acc-2">
              <AccordionTrigger className="uppercase font-semibold">
                Membership Configuration
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-[1fr_2fr] gap-y-2 gap-x-4">
                  <h6 className="font-bold">Category</h6>
                  <p>Compliance</p>

                  <h6 className="font-bold">Clearance code</h6>
                  <p>687943GUU</p>

                  <h6 className="font-bold">Clearance Valid</h6>
                  <p>2024-08-13</p>

                  <h6 className="font-bold">Clearance Valid</h6>
                  <p>2024-10-25</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </MaxWidth>
  );
};

export default OrderPage;
