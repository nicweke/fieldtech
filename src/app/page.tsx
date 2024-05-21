import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <div className="mx-auto max-w-screen-2xl items-center p-4 max-sm:space-y-8 sm:flex sm:space-x-[5.75rem] sm:px-18 sm:py-16">
          <div className="overflow-hidden max-sm:text-center sm:w-[41.1875rem]">
            <h2 className="mb-8 text-2xl/tight font-bold tracking-tight dark:text-white sm:mb-6 sm:text-[2.0rem]/none">
              <span className="text-violet-700">At Fieldtech Systems,</span>
              <br />
              We deliver results, reliability and rock solid dependability
            </h2>

            <h2 className="mt-2 text-xl/tight tracking-tight">
              We take great pride in our steadfast dedication to delivering
              outstanding solutions and service to our clients. Grounded in our
              core values and driven by innovation, we continuously aim to
              surpass expectations and deliver transformative results that
              advance businesses.
            </h2>
            <div className=" flex gap-x-3 font-medium text-sm">
              <Button
                className={buttonVariants({
                  size: "lg",
                  className: "mt-10 ",
                })}
                asChild
              >
                <Link
                  href="https://drive.google.com/file/d/1N5LZiFaFh-GtrhofsPjpfuwW53VRlt9Y/view?usp=sharing"
                  target="_blank"
                  className="font-semibold"
                >
                  Company Profile <ArrowRightCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden sm:w-[34.0625rem]">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-[2.25rem]">
              <Image
                alt="hero-image"
                src="/lady-smile.jpg"
                quality={75}
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-violet-700 font-bold">
        <div className="mx-auto max-w-screen-2xl p-6 sm:px-18 sm:py-16">
          <h2 className="mb-8 text-2xl/none tracking-tight text-white sm:mb-16 sm:text-[3.875rem]/none">
            Interested in learning more?
          </h2>
          <div className=" max-sm:space-y-6 sm:space-x-6 sm:flex">
            <div className="group flex-1">
              <Link
                href="/business"
                className="block space-y-2 rounded-lg bg-violet-100 p-4  group-hover:bg-violet-800 group-hover:text-white dark:bg-violet-500 dark:text-white sm:rounded-2xl sm:px-8 sm:py-6"
              >
                <p className="text-xl/none tracking-tight sm:text-[1.625rem]/none">
                  Explore our range of services
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm/tight tracking-tight">Learn More</p>
                  <div className="grid h-6.5 w-6.5 place-items-center rounded-full bg-black text-white group-hover:bg-white group-hover:text-violet-800">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="group flex-1">
              <Link
                href="/clients-partners"
                className="block space-y-2 rounded-lg bg-violet-100 p-4  group-hover:bg-violet-800 group-hover:text-white dark:bg-violet-500 dark:text-white sm:rounded-2xl sm:px-8 sm:py-6"
              >
                <p className="text-xl/none tracking-tight sm:text-[1.625rem]/none">
                  Meet our clients and partners
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm/tight tracking-tight">Learn More</p>
                  <div className="grid h-6.5 w-6.5 place-items-center rounded-full bg-black text-white group-hover:bg-white group-hover:text-violet-800">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="group flex-1">
              <Link
                href="/about"
                className="block space-y-2 rounded-lg bg-violet-100 p-4  group-hover:bg-violet-800 group-hover:text-white dark:bg-violet-500 dark:text-white sm:rounded-2xl sm:px-8 sm:py-6"
              >
                <p className="text-xl/none tracking-tight sm:text-[1.625rem]/none">
                  Learn about our company
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm/tight tracking-tight">Learn More</p>
                  <div className="grid h-6.5 w-6.5 place-items-center rounded-full bg-black text-white group-hover:bg-white group-hover:text-violet-800">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
