import MaxWidth from "@/components/general/MaxWidth";

import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const InformationPage = () => {
  const session = getCookie("connectedLog", { cookies });

  if (!session) {
    redirect("/");
  }
  return (
    <MaxWidth>
      <div className="text-sm md:text-base bg-white border rounded-sm md:p-10 p-4 pb-24 text-iam-blue-500">
        <div className="mb-4">
          <Button asChild>
            <Link href="/orders">Go Back</Link>
          </Button>
        </div>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2 ">PROFILE</h2>
        <div className="grid grid-cols-[1fr_2fr] gap-y-2 uppercase md:w-8/12 gap-x-2  w-full break-words ">
          <h4 className="font-bold">Principal:</h4>
          <p>Hainan Oumeirand Technology Co., Ltd</p>

          <h4 className="font-bold">Type:</h4>
          <p> Limited liability company</p>

          <h4 className="font-bold"> Establishment date:</h4>
          <p> July 28, 2021</p>

          <h4 className="font-bold">Legal representative:</h4>
          <p> Shi Xiang</p>

          <h4 className="font-bold">Business Address:</h4>
          <p className="break-words text-wrap">
            {" "}
            4th Floor, Incubation Building of Hainan Ecological Software
            Park,Old Town Hi tech Industry Demonstration Zone, Chengmai County,
            Hainan Province
          </p>

          <hr className="col-span-2 my-2" />

          <h4 className="font-bold">Total assets:</h4>
          <p>Not insured</p>

          <h4 className="font-bold">Terminal logistics data:</h4>
          <p>NL04678441</p>

          <h4 className="font-bold">Terminal ID:</h4>
          <p> ROTT466789876/30090512</p>

          <h4 className="font-bold">Index:</h4>
          <p> BFG987654008769678-NLRTMHA00001AB</p>

          <h4 className="font-bold">CONFIGURATION OFFICE REF:</h4>
          <p>ROTT466789876/30090512 N1.998979</p>

          <h4 className="font-bold">Payment type:</h4>
          <p> Cash Payment</p>

          <h4 className="font-bold">Payment status:</h4>
          <p> Approved</p>

          <h4 className="font-bold">Vendor REF:</h4>
          <p> OTSROTTNL-NL04678441</p>

          <hr className="col-span-2 my-2" />

          <h4 className="font-bold">Potential assets:</h4>
          <p>2,000,000 BBL</p>

          <h4 className="font-bold">Quality:</h4>
          <p> European</p>
        </div>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2 mt-8">
          INSURANCE
        </h2>
        <div className="grid grid-cols-[1fr_2fr] gap-y-2 uppercase md:w-8/12 gap-x-2">
          <h4 className="font-bold">Specification:</h4>
          <p>Portbase</p>

          <h4 className="font-bold">Value:</h4>
          <p> 120,000 Euros</p>

          <h4 className="font-bold"> Payment type:</h4>
          <p> Bank Credit Line</p>

          <h4 className="font-bold">Payment status:</h4>
          <p> Approved</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 border-b pb-2 mt-8 uppercase">
          Inspection
        </h2>
        <div className="grid grid-cols-[1fr_2fr] gap-y-2 uppercase md:w-8/12 gap-x-2">
          <h4 className="font-bold">Specification:</h4>
          <p>SGS</p>

          <h4 className="font-bold">Category:</h4>
          <p> Q&Q Dip Test</p>

          <h4 className="font-bold"> Value:</h4>
          <p>48,090 Euros</p>

          <h4 className="font-bold">Payment type:</h4>
          <p> Cash Payment</p>
          <h4 className="font-bold">Payment status:</h4>
          <p> Approved</p>
          <h4 className="font-bold">Inspection status:</h4>
          <p> Dip Test and Analysis Panding release date Expected date </p>
          <h4 className="font-bold">Expected date:</h4>
          <p> 26, December to 02 December 2024 </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 border-b pb-2 mt-8 uppercase">
          Tax
        </h2>
        <div className="grid grid-cols-[1fr_2fr] gap-y-2 uppercase md:w-8/12 gap-x-2">
          <h4 className="font-bold">Specification:</h4>
          <p>Portbase</p>

          <h4 className="font-bold"> Value:</h4>
          <p>20,000 Euros</p>

          <h4 className="font-bold">Payment type:</h4>
          <p> Bank Credit Line</p>
          <h4 className="font-bold">Payment status:</h4>
          <p> Approved</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 border-b pb-2 mt-8 uppercase">
          TERMINAL DATA
        </h2>
        <div className="grid grid-cols-[1fr_2fr] gap-y-2 uppercase md:w-8/12 gap-x-2">
          <h4 className="font-bold">Id:</h4>
          <p>ROTT466789876/30090512</p>

          <h4 className="font-bold"> Type:</h4>
          <p>Configuration service</p>
          <h4 className="font-bold">Payment type:</h4>
          <p> Bank Credit Line</p>
          <h4 className="font-bold">Payment status:</h4>
          <p>Approved</p>
          <h4 className="font-bold">Outstanding value:</h4>
          <p> 38,000 EUROS</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 border-b pb-2 mt-8 uppercase">
          Transferable data
        </h2>
        <div className="grid grid-cols-[1fr_2fr] gap-y-2 uppercase md:w-8/12 gap-x-2">
          <h4 className="font-bold">Specification:</h4>
          <p>Port base configuration</p>

          <h4 className="font-bold"> Value:</h4>
          <p>599,999 Euros</p>

          <h4 className="font-bold"> Type:</h4>
          <p>Petroleum/Bulk goods</p>

          <h4 className="font-bold">Payment type:</h4>
          <p> Bank Credit Line</p>
          <h4 className="font-bold">Payment status:</h4>
          <p> Approved</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 border-b pb-2 mt-8 uppercase">
          Borrow data
        </h2>
        <h3 className="font-semibold text-lg">Check eligibility</h3>
        <p>
          Submit your terminal reflective code and your logistics request for
          feedback.
        </p>
        <p className="mt-4 md:w-9/12">
          This platform allows you to contact and borrow logistics data for
          storage in the portbase for any valid transaction. Terms of repayment
          is a jurisdiction of service provider only
        </p>
      </div>
    </MaxWidth>
  );
};

export default InformationPage;

/** 
 1. 
2. 
3. : 




 */
