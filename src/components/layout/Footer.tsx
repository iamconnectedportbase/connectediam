"use client";
import MaxWidth from "@/components/general/MaxWidth";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

import logo from "@/Images/footer-logo.svg";

const FOOTER_LINKS = [
  {
    title: "Privacy Statement and General Terms & Conditions",
    link: "#",
  },
  {
    title: "Cookies",
    link: "#",
  },
];

const Footer = () => {
  const [showFooterLinks, setShowFooterLinks] = useState(true);
  const onlyWidth = useWindowWidth();

  const mobile = useMemo(() => {
    return onlyWidth < 420;
  }, [onlyWidth]);

  return (
    <footer className="bg-white fixed bottom-0 w-full py-2">
      <MaxWidth className="flex md:items-end justify-between gap-x-8 ">
        <div
          className={cn(
            "md:flex md:items-center md:flex-row flex-col text-xs text-iam-blue-500 md:flex-1 gap-y-2",
            mobile && showFooterLinks ? "flex" : "hidden"
          )}
        >
          {FOOTER_LINKS.map((item) => (
            <Link
              href={item.link}
              key={item.title}
              className="underline underline-offset-2 md:last:ml-auto"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div
          className={cn(
            "relative w-[12rem] h-[1.2rem] -order-1 md:order-1 md:block ",
            mobile && !showFooterLinks ? "block" : "hidden"
          )}
        >
          <Image src={logo} alt="logo" fill className="object-contain" />
        </div>

        <button
          className="md:hidden self-start"
          onClick={() => setShowFooterLinks(!showFooterLinks)}
        >
          <ChevronUp className={cn(showFooterLinks && "rotate-180")} />
        </button>
      </MaxWidth>
    </footer>
  );
};

export default Footer;
