import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Title({
  children,
  className,
  h1,
  shadow,
}: {
  children: ReactNode;
  className?: string;
  h1?: boolean;
  shadow?: boolean;
}) {
  const Tag = h1 ? "h1" : "h2";
  return (
    <Tag
      className={cn(
        "text-4xl md:text-5xl xl:text-6xl font-extrabold",
        className,
        shadow && "drop-shadow-lg",
      )}
    >
      {children}
    </Tag>
  );
}
