import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full lg:w-auto font-normal text-base hover:bg-black hover:text-white border-none   outline-none text-black cursor-pointer",
        isActive ? "underline text-black" : "bg-transparent text-black"
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
