import { cn } from "@/lib/utils";
import React from "react";

const MaxWidth = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        props.className,
        "md:w-[90%] w-[92%] max-w-[68.5rem] mx-auto"
      )}
    />
  );
};

export default MaxWidth;
