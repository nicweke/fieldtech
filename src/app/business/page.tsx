import Image from "next/image";

const Business = () => {
  return (
    <main>
      <section className="mx-auto max-w-screen-2xl p-6 sm:p-18 sm:pt-[2.625rem]">
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
              businesses.
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Business;
