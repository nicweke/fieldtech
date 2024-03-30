import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWarapper";
import { Button, buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky w-full h-16 inset-x-0 bg-white/65 backdrop-blur-lg transition-all top-1 z-30 ">
      <MaxWidthWrapper className="">
        <div className="flex h-16 items-center justify-between border-b border-zinc-600">
          <Link href="/" className="font-semibold flex z-30">
            <span>Fieldtech Systems (K) Limited.</span>
          </Link>

          <div className="hidden items-center gap-x-5 sm:flex ">
            <Link href="/about">About Us</Link>
            <Link href="business">Our Business</Link>
            <Link href="/about">Clients and Partners</Link>
            <Button
              className={buttonVariants({
                variant: "noghost",
                //className: "bg-slate-200 text-slate-950",
                //className: "bg-yellow-700",
              })}
              asChild
            >
              <Link href="/contact-us" className="font-semibold">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
