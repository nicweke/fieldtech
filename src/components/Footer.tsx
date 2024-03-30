import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWarapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <footer className="bg-black  mx-4 mt-60 rounded-md justify-center">
        {/* <div className="border-b border-zinc-600" /> */}
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div className="text-sm text-slate-50 sm:text-center font-semibold">
            <Link
              href="https://flowbite.com/"
              className=" ml-4 hover:underline"
            >
              Fieldtech Systems K Limited{" "}
            </Link>
          </div>
          <div className="text-sm text-slate-50 font-semibold sm:text-center">
            © 2024{" "}
          </div>
          {/* <ul className="flex flex-wrap items-center mt-3 text-sm  text-slate-50 font-semibold justify-center">
            <Link href="#" className="hover:underline me-4 md:me-6">
              About
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </ul> */}
        </div>
      </footer>
    </MaxWidthWrapper>
  );
};

export default Footer;
