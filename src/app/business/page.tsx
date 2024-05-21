import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Business",
};

const Business = () => {
  return (
    <main>
      <section className="mx-auto max-w-screen-2xl mt-10 p-6 sm:p-18 sm:pt-[2.625rem]">
        <div className="items-center justify-between sm:flex sm:space-x-[6.8125rem]">
          <div className="relative">
            <div className="overflow-hidden rounded-[2.25rem] sm:w-[35.75rem]">
              <div className="aspect-h-[497] aspect-w-[572]">
                <Image
                  src="/business-cover2.jpg"
                  alt="business-cover"
                  height={1000}
                  width={800}
                />
              </div>
            </div>
          </div>
          <div className=" max-sm:mb-12">
            <h1 className="text-[2rem]/none font-bold tracking-tight max-sm:text-center sm:text-[4rem]/none">
              Providing {""}
              <span className="text-violet-800">excellent service</span> to
              businesses
            </h1>
            <p className="text-xl font-medium leading-tight tracking-tight sm:text-lg">
              {" "}
              With a commitment to excellence, we promise to deliver top-notch
              services characterized by exceptional quality and expertise. Our
              dedicated team of engineers and professionals leverage
              cutting-edge technologies and sustainable practices to design and
              implement tailored energy solutions to meet the unique needs and
              challenges of our clients
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-6 py-8 sm:px-18 sm:py-16">
          <h2 className="text-2xl mb-6 font-bold tracking-tight max-sm:text-center sm:text-[3rem]/none">
            Our Services
          </h2>
          <div className="sm:flex  items-center gap-28 mb-16">
            <div className="flex-1 space-y-6 sm:space-y-12">
              <div className="space-y-6 font-bold">
                <h2 className="text-2xl leading-none tracking-tight text-violet-500 sm:text-[2.875rem]">
                  Commercial Kitchen Solutions
                </h2>
              </div>
              <p className="text-sm font-medium leading-snug tracking-tight sm:text-lg">
                We provide comprehensive equipment repair and support solutions,
                both onsite and offsite, including factory-authorized warranty
                service. Our skilled service technicians possess the expertise
                to maintain and repair all your commercial kitchen equipment
                effectively.
              </p>
            </div>
            <div className="max-sm:mt-6 sm:w-[33.1875rem]">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-[2.25rem]">
                <Image
                  src="/business/kitchen.jpg"
                  alt="commercial kitchens"
                  height={700}
                  width={700}
                />
              </div>
            </div>
          </div>
          <div className="sm:flex  items-center gap-28 mt-16">
            <div className="max-sm:mt-6 sm:w-[33.1875rem]">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-[2.25rem]">
                <Image
                  src="/business/cold.jpg"
                  alt="cold storage"
                  height={700}
                  width={700}
                />
              </div>
            </div>
            <div className="flex-1 space-y-6 sm:space-y-12">
              <div className="space-y-6 font-bold">
                <h2 className="text-2xl leading-none tracking-tight sm:text-[2.875rem]">
                  Cold Storage Solutions
                </h2>
              </div>
              <p className="text-sm font-medium leading-snug tracking-tight sm:text-lg">
                We bring extensive hands-on experience in constructing and
                installing multi-temperature cold storage facilities, catering
                to the needs of major food distributors, pharmaceutical
                companies, and service providers in Kenya.
              </p>
            </div>
          </div>
          <div className="sm:flex  items-center gap-28 mb-16 mt-16">
            <div className="flex-1 space-y-6 sm:space-y-12">
              <div className="space-y-6 font-bold">
                <h2 className="text-2xl leading-none tracking-tight text-violet-500 sm:text-[2.875rem]">
                  Industrial Laundry Solutions
                </h2>
              </div>
              <p className="text-sm font-medium leading-snug tracking-tight sm:text-lg">
                We specialize in the supply, support, and lifecycle maintenance
                of commercial and residential laundry equipment. Our dedicated
                team of technicians and engineers handles installations and
                provides after-sales support, ensuring ongoing laundry solutions
                for consumers as we expand and invest together.
              </p>
            </div>
            <div className="max-sm:mt-6 sm:w-[33.1875rem]">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-[2.25rem]">
                <Image
                  src="/business/wash.jpg"
                  alt="indsutrial laundry solutions"
                  height={700}
                  width={700}
                />
              </div>
            </div>
          </div>
          <div className="sm:flex  items-center gap-28 mt-16">
            <div className="max-sm:mt-6 sm:w-[33.1875rem]">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-[2.25rem]">
                <Image
                  src="/business/electrical.jpg"
                  alt="cold storage"
                  height={1000}
                  width={700}
                />
              </div>
            </div>
            <div className="flex-1 space-y-6 sm:space-y-12">
              <div className="space-y-6 font-bold">
                <h2 className="text-2xl leading-none tracking-tight sm:text-[2.875rem]">
                  Electric Power Systems
                </h2>
              </div>
              <p className="text-sm font-medium leading-snug tracking-tight sm:text-lg">
                We specialize in repairing all types of electrical and
                industrial electronic equipment. Additionally, we design and
                implement power control and conditioning systems, which include
                uninterruptible power supply (UPS) systems, power factor
                correction products, and frequency converters.
              </p>
            </div>
          </div>
          <div className="sm:flex  items-center gap-28 mb-16 mt-16">
            <div className="flex-1 space-y-6 sm:space-y-12">
              <div className="space-y-6 font-bold">
                <h2 className="text-2xl leading-none tracking-tight text-violet-500 sm:text-[2.875rem]">
                  Airport Airfield Solutions
                </h2>
              </div>
              <p className="text-sm font-medium leading-snug tracking-tight sm:text-lg">
                We offer specialized solutions in Airfield Lighting and Display
                Systems, focusing on the design, supply, and installation of
                airfield products for civil and military airports. Our primary
                goal is to enhance airfield operational efficiency and safety.
              </p>
            </div>
            <div className="max-sm:mt-6 sm:w-[33.1875rem]">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-[2.25rem]">
                <Image
                  src="/business/airport.jpg"
                  alt="airfield solutions"
                  height={700}
                  width={700}
                />
              </div>
            </div>
          </div>
          <div className="sm:flex  items-center gap-28 mt-20">
            <div className="max-sm:mt-6 sm:w-[33.1875rem]">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-[2.25rem]">
                <Image
                  src="/business/ict.jpg"
                  alt="cold storage"
                  height={700}
                  width={700}
                />
              </div>
            </div>
            <div className="flex-1 space-y-6 sm:space-y-12">
              <div className="space-y-6 font-bold">
                <h2 className="text-2xl leading-none tracking-tight sm:text-[2.875rem]">
                  ICT Solutions
                </h2>
              </div>
              <p className="text-sm font-medium leading-snug tracking-tight sm:text-lg">
                We specialize in deploying advanced surveillance systems for
                enhanced security and monitoring, IP PABX solutions to optimize
                communication networks within organizations, designing and
                implementing robust structured cabling infrastructure to support
                seamless data and voice communications and system integration
                services to ensure compatibility and efficiency across diverse
                technology platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Business;
