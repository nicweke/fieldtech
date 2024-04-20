import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWarapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // <MaxWidthWrapper>
    //   <>
    //     <section>
    //       <div className="py-28">
    //         <div className="space-y-5 max-w-4xl mx-auto text-center">
    //           <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold">
    //             We deliver results, <br />
    //             <span className="text-violet-700">reliability</span> <br />
    //             and rock solid dependability
    //           </h1>
    //           <p className="mt-5 max-w-xl mx-auto text-zinc-700">
    //             At Fieldtech Systems, we take great pride in our steadfast
    //             dedication to delivering outstanding solutions and service to
    //             our clients. Grounded in our core values and driven by
    //             innovation, we continuously aim to surpass expectations and
    //             deliver transformative results that advance businesses.
    //           </p>
    //           <p className="font-semibold py-4">
    //             &quot;Welcome to a new era of unparalleled excellence.&quot;
    //           </p>
    //           <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
    //             <Button
    //               className={buttonVariants({
    //                 size: "lg",
    //                 className: "mt-4 rounded-none",
    //               })}
    //               asChild
    //             >
    //               <Link href="" target="_blank" className="font-semibold">
    //                 Company Profile{" "}
    //                 <ArrowRightCircle className="ml-2 h-5 w-5" />
    //               </Link>
    //             </Button>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </>
    // </MaxWidthWrapper>

    <main>
      <section className="overflow-hidden sm:h-[30rem] sm:space-y-28 sm:px-24 sm:pt-16">
        <div className="mx-auto max-sm:px-6 max-sm:py-9 sm:max-w-[48.1875rem]">
          <h2 className="text-center text-[2rem]/none font-bold tracking-tigh dark:text-blue-50 sm:text-[4rem]/none">
            We deliver results, <br />
            <span className="text-violet-700">reliability and{""}</span>
            <br />
            rock solid dependability
          </h2>
          <div className=" flex items-center justify-center gap-x-3 font-medium text-sm">
            <Button
              className={buttonVariants({
                size: "lg",
                className: "mt-10 ",
              })}
              asChild
            >
              <Link href="" target="_blank" className="font-semibold">
                Company Profile <ArrowRightCircle className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-blue-500">
        <div className="mx-auto max-w-screen-2xl items-center p-6 max-sm:space-y-8 sm:flex sm:space-x-[5.75rem] sm:px-18 sm:py-16">
          <div className="overflow-hidden max-sm:text-center sm:w-[41.1875rem]">
            <h2 className="mb-8 text-2xl/tight font-bold tracking-tight dark:text-white sm:mb-6 sm:text-[2.0rem]/none">
              <span className="text-violet-700">At Fieldtech Systems,</span>{" "}
              <br />
              We take great pride in our steadfast dedication to delivering
              outstanding solutions and service to our clients.
            </h2>
            <h2 className="mt-2 text-xl/tight tracking-tight">
              Grounded in our core values and driven by innovation, we
              continuously aim to surpass expectations and deliver
              transformative results that advance businesses.
            </h2>
          </div>
          <div className="overflow-hidden sm:w-[34.0625rem] sm:flex-shrink-0">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-[2.25rem] relative">
              <Image
                alt="Practitioner using a haemogram"
                src="/lady-smile.jpg"
                quality={75}
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
