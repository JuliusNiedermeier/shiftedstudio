import { cn } from "@/utils/cn";
import { FC } from "react";

const lineBaseClasses =
  "h-1 w-full absolute top-1/2 left-0 -translate-y-1/2 bg-foreground-primary transition-[opacity_transform] duration-300";

export const ExpansionToggleIcon: FC = () => {
  return (
    <div className="size-6 relative">
      <div
        className={cn(
          lineBaseClasses,
          "group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90"
        )}
      />
      <div
        className={cn(
          lineBaseClasses,
          "rotate-90 group-data-[state=open]:rotate-180"
        )}
      />
    </div>
  );
};
