"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWarapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail, MapPin, Menu, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMedia } from "react-use";
import { HeaderLogo } from "@/components/header-logo";
import { NavButton } from "@/components/nav-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const routes = [
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/business ",
    label: "Our Business",
  },

  {
    href: "/clients-partners",
    label: "Clients and Partners",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const isMobile = useMedia("(max-width:1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="focus-visible:ring-offset-0 focus-visible:ring-transparent font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none outline-none text-black focus:bg-white/30 cursor-pointer transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="px-2" side="left">
          <HeaderLogo />
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "secondary" : "ghost"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
            <Button asChild>
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
                      Acacia Court 9, Masai Lodge Road off Magadi Road, Nairobi
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <MaxWidthWrapper>
      <header className="px-4 py-4 lg:px-14">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <HeaderLogo />
          </div>
          <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            <div className="flex-1 flex justify-center">
              {routes.map((route) => (
                <NavButton
                  key={route.href}
                  href={route.href}
                  label={route.label}
                  isActive={pathname === route.href}
                />
              ))}
            </div>
          </nav>
          <div className="flex items-center">
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
                    href="mailto:info@fieldtechsystems.co.ke"
                    className="hover:underline font-sans"
                  >
                    info@fieldtechsystems.co.ke
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-4">
                  <MapPin className="h-4 w-4" />
                  <Link
                    href="https://maps.app.goo.gl/v7pud8iwhtMXmoxR9"
                    target="_blank"
                    className="hover:underline font-sans"
                  >
                    Acacia Court 9, Masai Lodge Road off Magadi Road, Nairobi
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </MaxWidthWrapper>
  );
};

export default Navbar;
