import MaxWidth from "@/components/general/MaxWidth";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

const ConfigurationPage = () => {
  const session = getCookie("connectedLog", { cookies });

  if (!session && session !== "true") {
    redirect("/");
  }
  return (
    <MaxWidth>
      <div className="bg-white border rounded-sm md:p-10 p-4 pb-24  text-iam-blue-500">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2 ">
          List of members
        </h2>
        <div className="space-y-4">
          <div className="flex md:items-center flex-col md:flex-row  flex-wrap gap-2">
            <p className="font-medium">Shipping:</p>
            <div className="text-sm w-full break-words">
              <a
                href="https://rotterdamtransport.com/chapter/1-shipping/"
                className="underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://rotterdamtransport.com/chapter/1-shipping/
              </a>
            </div>
          </div>
          <div className="flex md:items-center flex-col md:flex-row  flex-wrap gap-2">
            <p className="font-medium">Supply:</p>
            <div className="text-sm w-full break-words">
              <a
                href="https://rotterdamtransport.com/chapter/6d-general-sales-agents/"
                className="underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://rotterdamtransport.com/chapter/6d-general-sales-agents/
              </a>
            </div>
          </div>
          <div className="flex md:items-center flex-col md:flex-row  flex-wrap gap-2">
            <p className="font-medium">Maritime:</p>
            <div className="text-sm w-full break-words">
              <a
                href="https://rotterdamtransport.com/branche/banking-financial-services-logistic-maritime-etc/"
                className="underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://rotterdamtransport.com/branche/banking-financial-services-logistic-maritime-etc/
              </a>
            </div>
          </div>
          <div className="flex md:items-center flex-col md:flex-row  flex-wrap gap-2">
            <p className="font-medium">Import/Export:</p>
            <div className="text-sm w-full break-words">
              <a
                href="https://rotterdamtransport.com/branche/import-and-export-manufacturers"
                className="underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://rotterdamtransport.com/branche/import-and-export-manufacturers
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  flex-wrap gap-2 ">
            <p className="font-medium">Extras:</p>
            <div className="text-sm text-wrap w-full break-words">
              <a
                href="https://rotterdamtransport.com/branche/liquid-bulk"
                className="underline underline-offset-2 text-wrap "
                target="_blank"
                rel="noopener noreferrer"
              >
                https://rotterdamtransport.com/branche/liquid-bulk
              </a>
              ,{" "}
              <a
                href="https://rotterdamtransport.com/branche/offshore-and-offshore-related-activities/"
                className="underline underline-offset-2 text-wrap "
                target="_blank"
                rel="noopener noreferrer"
              >
                https://rotterdamtransport.com/branche/offshore-and-offshore-related-activities/
              </a>
              ,{" "}
              <a
                href="https://rotterdamtransport.com/branche/petrochemical-industry"
                className="underline underline-offset-2 text-wrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://rotterdamtransport.com/branche/petrochemical-industry
              </a>
              ,{" "}
              <a
                href="https://rotterdamtransport.com/branche/port-authorities"
                className="underline underline-offset-2 text-wrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://rotterdamtransport.com/branche/port-authorities
              </a>
            </div>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default ConfigurationPage;
