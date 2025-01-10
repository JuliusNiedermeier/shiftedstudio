import { cn } from "@/utils/cn";
import { ComponentProps, FC } from "react";

export const NavigationLinkIndicator: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex [&>*]:transition-all [&>*]:duration-200 w-6",
        className
      )}
      style={{ "--height": "3px" }}
      {...props}
    >
      <div className="flex-1 bg-foreground-primary h-[var(--height)] group-hover:mt-[var(--height)]" />
      <div className="flex-1 bg-foreground-primary h-[var(--height)] group-hover:mb-[var(--height)]" />
    </div>
  );
};
