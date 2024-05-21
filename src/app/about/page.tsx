import MaxWidthWrapper from "@/components/MaxWidthWarapper";
import { World } from "@/components/ui/globe";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

const About = () => {
  return (
    <main>
      <div className="relative">
        <section className="bg-gray-100 font-bold">
          <div className="mx-auto max-w-screen-2xl py-6 sm:py-16">
            <div className="px-6 sm:px-18">
              <h1 className="mb-8 text-2xl/none tracking-tight text-violet-800 dark:text-white sm:text-[2.875rem]/none">
                About Us
              </h1>
              <p className="mb-12 leading-tight tracking-tight dark:text-blue-50 sm:text-[2rem]">
                {" "}
                We are an engineering firm dedicated to addressing energy
                challenges for enterprises. Our goal is to optimize business
                systems, fostering circular efficiency and profitability.
              </p>
            </div>
            <div className="items-center px-6 max-sm:space-y-6 sm:flex sm:space-x-6 sm:overflow-x-auto sm:px-18 sm:pb-8">
              <div className="flex-shrink-0 sm:w-[21.875rem]">
                <div className="aspect-h-[363] aspect-w-[350] overflow-hidden rounded-2xl">
                  <Image
                    alt="Practitioner using a haemogram"
                    src="/one.jpg"
                    quality={75}
                    width={700}
                    height={700}
                  />
                </div>
              </div>
              <div className="flex-shrink-0 sm:w-[21.875rem]">
                <div className="aspect-h-[363] aspect-w-[350] overflow-hidden rounded-2xl">
                  <Image
                    alt="Practitioner using a haemogram"
                    src="/five.jpg"
                    quality={75}
                    width={700}
                    height={700}
                  />
                </div>
              </div>
              <div className="flex-shrink-0 sm:w-[21.875rem]">
                <div className="aspect-h-[363] aspect-w-[350] overflow-hidden rounded-2xl">
                  <Image
                    alt="Practitioner using a haemogram"
                    src="/three.jpg"
                    quality={75}
                    width={700}
                    height={700}
                  />
                </div>
              </div>
              <div className="flex-shrink-0 sm:w-[21.875rem]">
                <div className="aspect-h-[363] aspect-w-[350] overflow-hidden rounded-2xl">
                  <Image
                    alt="Practitioner using a haemogram"
                    src="/four.jpg"
                    quality={75}
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="overflow-hidden dark:border-b dark:border-solid dark:border-white">
          <div className="mx-auto max-w-screen-2xl px-6 py-8 sm:px-18 sm:py-16">
            <h2 className="mb-4 text-2xl/none font-bold tracking-tight text-violet-800 sm:mb-5 sm:text-[2.875rem]/none">
              Our Identity
            </h2>
            <p className="mb-8 text-base/tight font-medium tracking-tight dark:text-blue-50 sm:mb-12 sm:text-xl/tight">
              Established in 1990, Fieldtech Systems Limited has emerged as a
              leader in providing airfield, commercial kitchen, laundry, cold
              storage, and ICT solutions. As a Kenyan-based company
              headquartered in Nairobi, our operations extend across the entire
              Kenyan region, with ongoing exploration into new territories and
              business ventures. Committed to serving the Pan-African market, we
              specialize in delivering enduring solutions tailored to the unique
              challenges of the African landscape.
            </p>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-2xl space-y-7 p-6 sm:space-y-12 sm:px-18 sm:py-8">
            <div className="font-satoshi font-bold">
              <h2 className="mb-6 text-2xl leading-none tracking-tight text-violet-800 sm:text-[2.875rem]">
                Our Core Values
              </h2>
            </div>
            <div className="max-sm:space-y-7 sm:flex sm:space-x-6">
              <Link
                className="group block space-y-4 rounded-lg bg-white p-4 font-satoshi  shadow-ilara-lg hover:bg-violet-800 hover:text-white sm:space-y-6 sm:rounded-2xl sm:p-8"
                href="#"
              >
                <p className="text-xl font-bold leading-none tracking-tight sm:text-4xl">
                  Excellence
                </p>
                <p className="text-base font-medium">
                  Our skilled and dedicated team ensures meticulous attention to
                  detail in every project, striving for continuous improvement
                  and innovation to meet evolving customer needs. We prioritize
                  customer satisfaction by customizing solutions and fostering
                  long-term partnerships based on trust and reliability.
                </p>
              </Link>
              <Link
                className="group block space-y-4 rounded-lg bg-white p-4 font-satoshi  shadow-ilara-lg hover:bg-violet-800 hover:text-white sm:space-y-6 sm:rounded-2xl sm:p-8"
                href="#"
              >
                <p className="text-xl font-bold leading-none tracking-tight sm:text-4xl">
                  Customer Satisfaction
                </p>
                <p className="text-base font-medium">
                  Customer satisfaction is at the heart of our operations,
                  driving our commitment to personalized service, quality,
                  responsiveness, and continuous improvement. We prioritize
                  building strong relationships with our clients by
                  understanding their unique needs and delivering tailored
                  solutions
                </p>
              </Link>
              <Link
                className="group block space-y-4 rounded-lg bg-white p-4 font-satoshi  shadow-ilara-lg hover:bg-violet-800 hover:text-white sm:space-y-6 sm:rounded-2xl sm:p-8"
                href="#"
              >
                <p className="text-xl font-bold leading-none tracking-tight sm:text-4xl">
                  Reliability
                </p>
                <p className="text-base font-medium">
                  Our reputation for reliability stems from our dedication to
                  quality, evidenced by our rigorous adherence to industry
                  standards and best practices. We prioritize building trust
                  with our customers through transparent communication, timely
                  delivery, and proactive problem-solving.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
