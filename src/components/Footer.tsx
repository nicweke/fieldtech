import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWarapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <div className="">
      <MaxWidthWrapper>
        <footer className="bg-black  mt-20 rounded-md justify-center">
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
          </div>
        </footer>
        {/* <footer>
          <div className="custom-screen pt-5 mb-0">
            <div className="mt-10 py-4 border-t border-black items-center justify-between sm:flex">
              <p className="text-gray-600">
                © 2023 Blinder Startup. All rights reserved.
              </p>
            </div>
          </div>
        </footer> */}
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
