import MaxWidth from "@/components/general/MaxWidth";

import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

const ObjectivePage = () => {
  const session = getCookie("connectedLog", { cookies });

  if (!session && session !== "true") {
    redirect("/");
  }
  return (
    <MaxWidth>
      <div className="bg-white border rounded-sm md:p-10 p-6 pb-24 text-iam-blue-500 w-fit">
        <h1 className="text-2xl font-bold mb-8 border-b pb-2 ">Objectives</h1>
        <ol className="list-[upper-roman] list-outside px-4 space-y-4 md:w-8/12 ">
          <li>
            We build the smartest port communities. Together, we are increasing
            the potential of data for seamless, sustainable and secure cargo
            flows.
          </li>
          <li>
            Home of logistics intelligence. <strong>Portbase</strong> is the
            neutral ans reliable hub for all logistics information in the ports
            of <strong>Rotterdam.</strong>
          </li>
        </ol>
      </div>
    </MaxWidth>
  );
};

export default ObjectivePage;
