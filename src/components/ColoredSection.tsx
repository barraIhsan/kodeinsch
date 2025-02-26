import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Image from "next/image";

export default function ColoredSection({
  children,
  className,
  left,
  right,
}: {
  children: ReactNode;
  className: string;
  left?: string;
  right?: string;
}) {
  return (
    <div
      className={cn(
        "relative z-0 container mx-auto px-5 sm:px-12 xl:px-24 py-12 xl:py-24 min-h-[40rem] flex flex-col justify-center bg-linear-to-b overflow-hidden",
        className,
      )}
    >
      {children}
      <Image
        src="/img/decoration/colored-left.svg"
        alt=""
        width={606}
        height={1082}
        className={cn(
          "-z-10 absolute left-0 bottom-1/4 pointer-events-none",
          left,
        )}
      />
      <Image
        src="/img/decoration/colored-right.svg"
        alt=""
        width={438}
        height={1077}
        className={cn(
          "-z-10 absolute right-0 top-0 pointer-events-none",
          right,
        )}
      />
    </div>
  );
}
