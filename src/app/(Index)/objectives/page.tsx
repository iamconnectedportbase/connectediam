import MaxWidth from "@/components/general/MaxWidth";

import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

const ObjectivePage = () => {
  const session = getCookie("connectedLog", { cookies });

  if (!session) {
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
          <li>
            Port Community System (PCS), a digital system connecting people,
            companies, and supply chains. The PCS optimizes logistics through
            three layers of smart applications allowing all users to exchange
            information quickly and easily
          </li>
          <li>
            Portbase realises an annual added value for the Dutch port sector of
            more than € 400 million. At the end of 2022, there were 24,000
            individual users registered and 5,100 organisations connected.
          </li>
          <li>
            Portbase manages the Port Community System (PCS), a digital port
            logistics platform for all Dutch ports. Portbase enables companies
            and governments to seamlessly exchange data with each other in an
            efficient and secure manner.
          </li>
          <li>
            The Port Union Membership is an organization of prestigious and
            honorable companies in the Rotterdam Commercial Sea Port that are
            interrelated in agreement to protect their interest, Provide
            guarantees to all members to the terminal authority, and convey all
            taxes. Business Relationship is maintained within all companies in
            this organization as your<strong> LOGIN </strong>and{" "}
            <strong>PASSWORD</strong> being confidential to your company should
            give you access to the port union database and rights to cargo
            orders or authorize testing and analysis for your titled product
            also members of the union do not face any terminal challenges as all
            subjects including SGS and shipping agents are under the
            accreditation of the terminal authority.
          </li>
        </ol>
      </div>
    </MaxWidth>
  );
};

export default ObjectivePage;

/**
 * 

Iii. The Port Union Membership is an organization of prestigious and honorable companies in the Rotterdam
Commercial Sea Port that are interrelated in agreement to protect their interest, Provide guarantees to all
members to the terminal authority, and convey all taxes. Business Relationship is maintained within all
companies in this organization as your
*/
