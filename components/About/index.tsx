"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const About = () => {
  return (
    <>
      <section id="about-us" className="overflow-hidden pt-30 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
            <SectionHeader
              headerInfo={{
                title: "ABOUT US",
              }}
            />
          {/* <!-- Section Title End --> */}
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden md:block md:w-1/2"
            >
              <Image
                src="/images/about/about.jpg"
                alt="About"
                className="dark:hidden pt-10"
                width={600}
                height={400}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Best Way Home Care
              </h2>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-fully">
                  <p>At Best Way Home Care, we are committed to providing compassionate, personalized care that makes you feel right at home. Our mission is to ensure everyone has access to outstanding in-home care that fosters well-being, respect, and self-assurance. "Your family - Our priority" is more than a slogan; it's our guiding principle.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-fully">
                  <p>Licensed by the Illinois Department of Public Health (IDPH), we uphold the highest standards of care. What sets us apart is our combination of professional expertise and a warm, neighborly approach. With a deep understanding of our clients' needs, we strive to create a welcoming and supportive environment through our dedicated and heartfelt services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
