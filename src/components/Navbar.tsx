import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWarapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail, MapPin, Phone } from "lucide-react";

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
            <Link href="/business">Our Business</Link>
            <Link href="/clients-partners">Clients and Partners</Link>
            <Button
              className={buttonVariants({
                variant: "noghost",
                //className: "bg-slate-200 text-slate-950",
                // className: "p-4 border",
              })}
              asChild
            >
              <DropdownMenu>
                <Button className="bg-violet-600">
                  <DropdownMenuTrigger className="font-bold">
                    Contact Us
                  </DropdownMenuTrigger>
                </Button>
                <DropdownMenuContent className="mx-4">
                  <DropdownMenuItem className="flex items-center space-x-4 ">
                    <Phone className="h-4 w-4" />
                    <Link
                      href="tel:0202144490"
                      className="hover:underline font-sans"
                    >
                      0202144490
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-4 ">
                    <Mail className="h-4 w-4" />
                    <Link
                      href="mailto:info@fieldtechsystems.com"
                      className="hover:underline font-sans"
                    >
                      info@fieldtechsystems.com
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-4">
                    <MapPin className="h-4 w-4" />
                    <Link
                      href="https://maps.app.goo.gl/v7pud8iwhtMXmoxR9"
                      target="_blank"
                      className="hover:underline font-sans"
                    >
                      Acacia Court 9, Masai Lodge Road off Mbagathi Road,
                      Nairobi
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
