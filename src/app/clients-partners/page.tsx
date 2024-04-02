import MaxWidthWrapper from "@/components/MaxWidthWarapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
//clients
import huawei from "../../../public/clients/huawei.svg";
import kaa from "../../../public/clients/kaa.png";
import knight from "../../../public/clients/knight.svg";
import gerties from "../../../public/clients/gerties.png";
import kcaa from "../../../public/clients/kcaa.png";
import UON from "../../../public/clients/UON.png";
import museum from "../../../public/clients/museum.png";
import tnh from "../../../public/clients/tnh.svg";
import mpshah from "../../../public/clients/mpshah.png";
import aku from "../../../public/clients/aku.png";
import acted from "../../../public/clients/acted.png";
import ksa from "../../../public/clients/ksa.png";

//partners
import danfoss from "../../../public/partners/danfoss.svg";
import kenwood from "../../../public/partners/kenwood.svg";
import rational from "../../../public/partners/rational.svg";
import von from "../../../public/partners/von.png";
import bitzer from "../../../public/partners/bitzer.svg";
import convotherm from "../../../public/partners/convotherm.svg";
import honeywell from "../../../public/partners/honeywell.svg";
import sackee from "../../../public/partners/sackee.png";
import xpeliar from "../../../public/partners/xpeliar.png";
import apc from "../../../public/partners/apc.svg";
import eaton from "../../../public/partners/eaton.svg";
import schneider from "../../../public/partners/schneider.svg";
import legrand from "../../../public/partners/legrand.svg";

const clients = [
  {
    src: huawei,
    alt: "huawei",
  },
  {
    src: kaa,
    alt: "kaa",
  },
  {
    src: knight,
    alt: "knight",
  },
  {
    src: gerties,
    alt: "gerties",
  },
  {
    src: kcaa,
    alt: "kcaa",
  },
  {
    src: aku,
    alt: "aga khan university",
  },
  {
    src: UON,
    alt: "uon",
  },
  {
    src: museum,
    alt: "museum",
  },
  {
    src: tnh,
    alt: "the nairobi hospital",
  },
  {
    src: mpshah,
    alt: "mpshah",
  },
  {
    src: acted,
    alt: "acted",
  },
  {
    src: ksa,
    alt: "ksa",
  },
];
const partners = [
  {
    src: von,
    alt: "von",
  },
  {
    src: danfoss,
    alt: "danfoss",
  },
  {
    src: kenwood,
    alt: "kenwood",
  },
  {
    src: rational,
    alt: "rational",
  },
  {
    src: bitzer,
    alt: "bitzer",
  },
  {
    src: convotherm,
    alt: "convotherm",
  },
  {
    src: honeywell,
    alt: "honeywell",
  },
  {
    src: sackee,
    alt: "sackee",
  },
  {
    src: xpeliar,
    alt: "xpeliar",
  },
  {
    src: apc,
    alt: "apc",
  },
  {
    src: eaton,
    alt: "eaton",
  },
  {
    src: schneider,
    alt: "schneider",
  },
  {
    src: legrand,
    alt: "legrand",
  },
];

const Clients = () => {
  return (
    <MaxWidthWrapper>
      <>
        <section className="py-10 mb-2">
          <div>
            <div className="items-center gap-x-12 lg:flex">
              <div className="flex-1 sm:hidden lg:block">
                <Image
                  src="/bulb.jpg"
                  height={800}
                  width={600}
                  className="rounded-lg md:max-w-lg"
                  alt="clients-page-cta"
                />
              </div>
              <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  The essence of our success: <br />
                  Our Clients and Partners
                </h2>
                <p className="mt-3 text-gray-600">
                  At the heart of our business triumphs and success story lies
                  the profound joy and fulfillment experienced by our valued
                  customers and partners. Their satisfaction fuels our growth
                  and drives our commitment to excellence.
                </p>
                <Button asChild>
                  <Link
                    href="/get-started"
                    className={buttonVariants({
                      size: "lg",
                      className:
                        "inline-block mt-4 font-medium text-sm text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800",
                    })}
                  >
                    Get started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className=" mt-28 mx-auto px-4 text-gray-600 md:px-8">
            <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Leveraging Opportunities for Business Success
              </h2>
              <p>
                Our success hinges on our ability to deliver value to both our
                clients and partners, facilitating business transformation and
                efficiency gains. We work closely with our partners to foster
                their growth and enrich their product and service offerings. By
                leveraging our comprehensive portfolios and robust solutions, we
                address our clients&apos; needs and challenges across a wide
                spectrum.
              </p>
            </div>
          </div>
          <div className=" mt-20 mx-auto px-4 text-gray-600 md:px-8">
            <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Our Clients
              </h2>
              <div className="pt-6">
                {/* <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16"> */}
                <ul className="grid grid-cols-4 gap-12 items-center justify-center md:gap-x-16">
                  {clients.map((item, idx) => (
                    <li key={idx}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        height={600}
                        width={600}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className=" mt-28 mx-auto px-4 text-gray-600 md:px-8 ">
            <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Our Partners
              </h2>
              <div className="pt-6">
                {/* <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16"> */}
                <ul className="grid grid-cols-4 gap-12 items-center justify-center md:gap-x-16">
                  {partners.map((item, idx) => (
                    <li key={idx}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={600}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    </MaxWidthWrapper>
  );
};

export default Clients;
