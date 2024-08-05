"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => (
  <>
    <section className="overflow-hidden pb-10 pt-35 md:pt-40 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              Personalized & Caring Support
            </h4>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Delivering Professional Best Way In-Home Care
            </h1>
            <p>
              Share your story with us, receive a free In-Home Assesment and we will create a personalized plan to provide the care you need.
            </p>

            <div className="mt-10">
              <Link
                href="/#contact-us"
                className="w-40 flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
