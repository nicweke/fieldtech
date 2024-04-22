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

const About = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  const values = [
    {
      title: "Excellence",
      desc: "Having a clear understanding of what is important, we remain dedicated to carrying out our top priorities with unwavering excellence. We pay close attention to the finer points and take satisfaction in delivering our utmost effort.",
    },
    {
      title: "Next.js",
      desc: "Next.js is a React framework that gives you building blocks to create web apps.",
    },
    {
      title: "Tailwind CSS",
      desc: "Tailwind CSS is basically a utility-first CSS framework for rapidly building UIs.",
    },
    {
      title: "Node.js",
      desc: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment.",
    },
    {
      title: "Vercel",
      desc: "Vercel is a cloud platform that enables developers to host web apps.",
    },
    {
      title: "Figma",
      desc: "Figma is a web-based graphics editing and user interface design app.",
    },
  ];
  return (
    // <MaxWidthWrapper>
    //   <section>
    //     <div className="text-center pt-10">
    //       <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
    //         About Us
    //       </h1>
    //       <p className="text-center py-3 items-center text-lg">
    //         Fieldtech is an engineering firm dedicated to addressing energy
    //         challenges for enterprises. <br /> Our goal is to optimize business
    //         systems, fostering circular efficiency and profitability.
    //       </p>
    //     </div>
    //   </section>

    //   <section className="py-12 overflow-hidden">
    //     <div className="items-center gap-12 text-gray-600 md:flex">
    //       <div className="flex-none space-y-5 max-w-2xl">
    //         <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
    //           Our Identity
    //         </h1>
    //         <p>
    //           Established in 1990, Fieldtech Systems Limited has emerged as a
    //           leader in providing airfield, commercial kitchen, laundry, cold
    //           storage, and ICT solutions. As a Kenyan-based company
    //           headquartered in Nairobi, our operations extend across the entire
    //           Kenyan region, with ongoing exploration into new territories and
    //           business ventures. Committed to serving the Pan-African market, we
    //           specialize in delivering enduring solutions tailored to the unique
    //           challenges of the African landscape.
    //         </p>
    //       </div>
    //       <div className="flex-none mt-12 md:mt-0">
    //         <World data={sampleArcs} globeConfig={globeConfig} />;
    //       </div>
    //     </div>
    //   </section>
    //   <section>
    //     <div className="text-center pt-8">
    //       <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
    //         Our Values
    //       </h1>
    //     </div>
    //     <div className="mt-8">
    //       {/* <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
    //         {values.map((item, idx) => (
    //           <li key={idx} className="flex gap-x-4">
    //             <Card className="">
    //               <CardHeader>
    //                 <h1 className="font-semibold text-lg">{item.title}</h1>
    //               </CardHeader>
    //               <CardContent>{item.desc}</CardContent>
    //               <CardFooter></CardFooter>
    //             </Card>
    //           </li>
    //         ))}
    //       </ul> */}

    //       <div className="items-center gap-12 text-gray-600 md:flex">
    //         <div className="flex-none mt-12 md:mt-0">
    //           <Image
    //             src="/illustrations/excellence2.png"
    //             alt="about"
    //             height={200}
    //             width={200}
    //             className="px-5"
    //           />
    //         </div>
    //         <div className="flex-none space-y-5 max-w-2xl">
    //           <h1 className="text-3xl text-gray-800 font-extrabold sm:text-5xl">
    //             Excellence
    //           </h1>
    //           <p>
    //             Having a clear understanding of what is important, we remain
    //             dedicated to carrying out our top priorities with unwavering
    //             excellence. We pay close attention to the finer points and take
    //             satisfaction in delivering our utmost effort.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="items-center mt-10 gap-12 text-gray-600 md:flex">
    //         <div className="flex-none mt-12 md:mt-0">
    //           <Image
    //             src="/illustrations/happy.png"
    //             alt="about"
    //             height={250}
    //             width={250}
    //             className="px-5"
    //           />
    //         </div>
    //         <div className="flex-none space-y-5 max-w-2xl pt-7">
    //           <h1 className="text-2xl text-gray-800 font-extrabold">
    //             Customer Satisfaction
    //           </h1>
    //           <p>
    //             Having a clear understanding of what is important, we remain
    //             dedicated to carrying out our top priorities with unwavering
    //             excellence. We pay close attention to the finer points and take
    //             satisfaction in delivering our utmost effort.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </MaxWidthWrapper>

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
            <p className="mb-8 text-base/tight font-medium tracking-tight dark:text-blue-50 sm:mb-12 sm:text-lg/tight">
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
                href="/hmis"
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
                href="/hmis"
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
                href="/hmis"
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
