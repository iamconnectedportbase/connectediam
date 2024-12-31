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
import Link from "next/link";

import StatusDot from "@/components/greenRedDot";

const OrderPage = () => {
  const session = getCookie("connectedLog", { cookies });

  if (!session) {
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

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="acc-1">
              <AccordionTrigger className="uppercase font-semibold">
                <p>AO Mellyaneft</p>
              </AccordionTrigger>
              <AccordionContent className="space-y-2">
                <div className="grid grid-cols-[1fr_2fr] gap-y-2 gap-x-4">
                  {/* <h6 className="font-bold">
                    Caution notice on ACT of Transfer:
                  </h6>
                  <p>Terminal authority regulations and notification</p> */}
                  <p className="font-medium">
                    Caution notice on ACT of Transfer:
                  </p>
                  <div className="text-sm w-full break-words">
                    <p>Terminal authority regulations and notification</p>
                  </div>

                  <p className="font-medium lowercase">
                    Sanctions Regulations”
                  </p>
                  <div className="text-sm w-full break-words lowercase">
                    <p>
                      {" "}
                      means any export or import controls, embargos, trade
                      restrictions, listing of persons or entities, asset
                      freezing, prohibitions to sell, purchase, import, export,
                      transfer or transport, or any other economic or trade
                      sanctions adopted by the United Nations, the European
                      Union or any Member State of the European Union, the
                      United Kingdom and the United States of America or any
                      other jurisdiction where the Seller delivers Energy
                      Products or otherwise carries out business.
                    </p>
                  </div>

                  <p className="font-medium lowercase">
                    Regulation Perimeters:
                  </p>
                  <div className="text-sm w-full break-words lowercase">
                    <p>
                      {" "}
                      Asset Freezing and Liquidation Not
                      Guranteed/Specified-Multiple assets not guranteed for
                      configuration duration
                    </p>
                  </div>

                  <p className="font-medium lowercase">Payment Interference”</p>
                  <div className="text-sm w-full break-words lowercase">
                    <p>
                      {" "}
                      means confiscation, freezing, detainment, arrest,
                      stoppage, blocking of funds or any other interference
                      exercised by banks, courts, public authorities or
                      otherwise (and whether or not such interference is
                      justified).
                    </p>
                  </div>

                  <p className="font-medium lowercase">
                    Interference refrences:
                  </p>
                  <div className="text-sm w-full break-words lowercase">
                    <p>
                      {" "}
                      Multiple payment sources not identified to Disponent
                      Owner. Disponent Owner means any party contracting with
                      the cargo owner to charter or otherwise commercially own
                      the cargo, or any other party who controls the cargo
                      rights and enjoys the benefit without the act of transfer
                      from the titleholder thereof under a similar arrangement
                      which permits cargo inspection and injection request.
                    </p>
                  </div>

                  <p className="font-medium lowercase">Notification:</p>
                  <div className="text-sm w-full break-words lowercase">
                    <p>
                      {" "}
                      Product ownership misappropriation and allocation caution
                      is expedited from Cargo Availibility to Disponent Owner
                      for ninety working days (90). Product has been secured in
                      Disponent owners tank for more than 90 days and All port
                      terminal registration is applied and paid in cash and
                      instrument by cargo holder/carrier
                    </p>
                  </div>
                </div>
                <div className="text-sm w-full break-words lowercase">
                  <p>
                    {" "}
                    Please note that the above caution is a fuction of your
                    allocation certicate which must be issued to disponent owner
                    prior to dip test.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h4 className="font-bold">Ordered by</h4>
          <Link
            href="/orders/information"
            className="hover:underline-offset-4 text-iam-orange-500 underline"
          >
            Hainan Oumeirand Technology Co., Ltd
          </Link>

          <h4 className="font-bold">Carrier</h4>
          <p>Ocean traffic services</p>

          <h4 className="font-bold">Product</h4>
          <p>Jet fuel Aviation grade jet a1</p>

          <h4 className="font-bold">Inspection Company</h4>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="acc-1">
              <AccordionTrigger className="uppercase font-semibold">
                <p>SGS</p>
              </AccordionTrigger>
              <AccordionContent className="space-y-2">
                <div className="grid grid-cols-[1fr_2fr] gap-y-2 gap-x-4">
                  {/* <h6 className="font-bold">
                    Caution notice on ACT of Transfer:
                  </h6>
                  <p>Terminal authority regulations and notification</p> */}

                  <p className="font-medium">Titleholder DIP Authorization:</p>

                  <div className="text-sm w-full break-words">
                    <div>
                      <StatusDot status="green" />
                      <p>specied-AOMYN/DIP-JA1-RT92830 </p>
                    </div>
                  </div>

                  <p className="font-medium">
                    Titleholder DIP Compliance Authorization:{" "}
                  </p>

                  <div className="text-sm w-full break-words">
                    <div>
                      <StatusDot status="red" />
                      <p> Not Specified </p>
                    </div>
                  </div>

                  <p className="font-medium">
                    Titleholder DIP Confirmation Report:{" "}
                  </p>

                  <div className="text-sm w-full break-words">
                    <div>
                      <StatusDot status="red" />
                      <p> Sanctioned </p>
                    </div>
                  </div>

                  <p className="font-medium ">
                    Terminal Authority DIP supervision report:
                  </p>
                  <div className="text-sm w-full break-words lowercase">
                    <p>
                      {" "}
                      Financial discombobulation which indicates multiple
                      payment principal from cargo holder/carrier and not
                      Disponent Owner. Injection Obligation and Regulations
                      which indicates tank security and injection completion on
                      the 10th of June 2024 making it six (6) Months of product
                      security without inspection and terminal scrutiny
                    </p>
                  </div>

                  <p className="font-medium ">
                    Terminal Authority DIP conclusion report:
                  </p>
                  <div className="text-sm w-full break-words lowercase">
                    <p>
                      {" "}
                      Testing and Anaysis as programmed for 02-06 December for
                      delivery to beneciary is pending release due to the
                      terminal cuations which should be countered with the
                      allocation certifcate in the beneciary as well as the
                      conrmation report sanction charges to be reviewed and
                      clearance effective.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
                <br />
                <p>Subject to compliance</p>
                <p className="uppercase">Cargo act of transfer (aot)</p>
                <p className="uppercase">
                  Cargo discharge programming plan (dpp)
                </p>
                <div className="grid grid-cols-[1fr_2fr] gap-y-1">
                  <h6 className="font-bold">Session Ended: </h6>
                  <p>Configuration Date 30 12 2024</p>
                </div>
                <hr />

                <div className="grid grid-cols-[1fr_2fr] gap-y-1">
                  <h6 className="font-bold">Category</h6>
                  <p>Allocation</p>
                </div>

                <p>Subject of Certification </p>
                <p className="uppercase">ALLOCATION of CERTIFICATION </p>
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
