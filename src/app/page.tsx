import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWarapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <>
        <section>
          <div className="py-28">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
              <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold">
                We deliver results, <br />
                <span className="text-violet-700">reliability</span> <br />
                and rock solid dependability
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-zinc-700">
                At Fieldtech Systems, we take great pride in our steadfast
                dedication to delivering outstanding solutions and service to
                our clients. Grounded in our core values and driven by
                innovation, we continuously aim to surpass expectations and
                deliver transformative results that advance businesses.
              </p>
              <p className="font-semibold py-4">
                &quot;Welcome to a new era of unparalleled excellence.&quot;
              </p>
              <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                <Button
                  className={buttonVariants({
                    size: "lg",
                    className: "mt-4 rounded-none",
                  })}
                  asChild
                >
                  <Link href="" target="_blank" className="font-semibold">
                    Company Profile{" "}
                    <ArrowRightCircle className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    </MaxWidthWrapper>
  );
}
