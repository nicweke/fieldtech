import MaxWidthWrapper from "@/components/MaxWidthWarapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="flex flex-col items-center justify-center mb-12 mt-28 sm:mt-20 text-center">
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
        <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold">
          We deliver results, <br />
          <span className="text-violet-700">reliability</span> <br />
          and rock solid dependability
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 ">
          At Fieldtech Systems, we take great pride in our steadfast dedication
          to delivering outstanding solutions and service to our clients.
          Grounded in our core values and driven by innovation, we continuously
          aim to surpass expectations and deliver transformative results that
          advance businesses.
        </p>
        <p className="font-semibold my-4">
          &quot;Welcome to a new era of unparalleled excellence.&quot;
        </p>

        <Button
          className={buttonVariants({
            size: "lg",
            className: "mt-4 rounded-none",
          })}
          asChild
        >
          <Link href="" target="_blank" className="font-semibold">
            Company Profile <ArrowRightCircle className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </MaxWidthWrapper>
    </>
  );
}
