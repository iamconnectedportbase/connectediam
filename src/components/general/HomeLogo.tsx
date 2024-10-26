import { cn } from "@/lib/utils";
import Image from "next/image";

import logo from "@/Images/logo.png";

const HomeLogo = ({ size }: { size?: string }) => {
  return (
    <div className={cn("relative", size || "w-[8.2rem] h-[2.5rem]")}>
      <Image
        src={logo}
        alt="logo"
        fill
        className={cn(size || "object-cover")}
      />
    </div>
  );
};

export default HomeLogo;
