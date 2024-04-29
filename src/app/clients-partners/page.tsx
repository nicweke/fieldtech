"use client";

import MaxWidthWrapper from "@/components/MaxWidthWarapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowRightCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { clients, partners } from "@/lib/constants";
import Autoplay from "embla-carousel-autoplay";

const Clients = () => {
  return (
    <MaxWidthWrapper>
      <main className="">
        <section className="space-y-8 px-8 py-12 text-center sm:pb-3 sm:pt-18">
          <h1 className="text-[2rem] font-bold leading-none tracking-tight sm:text-[2.875rem]">
            Leveraging Opportunities for Business Success
          </h1>
          <p className="mx-auto text-sm leading-snug text-[#474645] sm:w-[40.5rem] sm:text-lg">
            Our success hinges on our ability to deliver value to both our
            clients and partners, facilitating business transformation and
            efficiency gains. We work closely with our partners to foster their
            growth and enrich their product and service offerings. By leveraging
            our comprehensive portfolios and robust solutions, we address our
            clients&apos; needs and challenges across a wide spectrum.
          </p>
        </section>
        <section className="space-y-8 rounded-3xl  px-8 pt-8">
          <div className="mx-auto max-w-screen-2xl p-6 sm:px-18 sm:py-16">
            <h2 className="mx-auto px-8 mb-14 text-center text-[2rem] font-bold leading-none tracking-tight sm:w-[45.5rem] sm:text-[3.075rem]">
              Our Clients
            </h2>
            <div className="items-center sm:flex sm:space-x-8">
              <div className="mb-8 space-x-8 rounded-2xl  bg-[#E7F5E2] p-12 sm:w-[35.375rem]">
                {/* bg-[#E7F5E2] */}
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {clients.map((item, idx) => (
                      <CarouselItem key={idx} className="flex justify-center">
                        {" "}
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={250}
                          height={250}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              <div className="space-y-6 sm:w-[25.125rem]">
                <h3 className="text-left font-satoshi text-2xl font-bold leading-tight tracking-tight text-[#343433] sm:text-[2rem]">
                  We keep our clients happy with our experience
                </h3>
                <p className="text-lg text-left leading-snug text-[#474645]">
                  At Fieldtech, we are keen on customer experience. We
                  don&#x27;t just provide services, We use systems that empower
                  and enhance experience for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-sm:space-y-5 max-sm:py-8 sm:space-y-16  sm:mx-20">
          <div className="mx-auto max-w-screen-2xl p-6 sm:px-18 sm:py-16">
            <h2 className="mx-auto px-8 mb-14 text-center text-[2rem] font-bold leading-none tracking-tight sm:w-[45.5rem] sm:text-[3.075rem]">
              Our Partners
            </h2>
            <div className="items-center sm:flex sm:space-x-8">
              <div className="space-y-6 sm:w-[25.125rem]">
                <h3 className="text-right font-satoshi text-2xl font-bold leading-tight tracking-tight text-[#343433] sm:text-[2rem]">
                  Our commitment to our partners
                </h3>
                <p className="text-lg text-right leading-snug text-[#474645]">
                  At Fieldtech, we value our partnerships deeply, understanding
                  that they are integral to our mutual success. Our commitment
                  to our partners extends beyond mere collaboration; it&apos;s
                  about fostering trust, transparency, and shared growth
                  opportunities.
                </p>
              </div>
              <div className="mb-8 space-x-8 rounded-2xl  bg-blue-100 p-12 sm:w-[35.375rem]">
                {/* bg-[#E7F5E2] */}
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {partners.map((item, idx) => (
                      <CarouselItem key={idx} className="flex justify-center">
                        {" "}
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={250}
                          height={250}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MaxWidthWrapper>
  );
};

export default Clients;
