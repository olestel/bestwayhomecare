"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import areaData from "./areaData";
import SectionHeader from "../Common/SectionHeader";
import AreaItem from "./AreaItem";

const ServiceAreas = () => {
  const [activeArea, setActiveArea] = useState(1);

  const handleAreaToggle = (id: number) => {
    activeArea === id ? setActiveArea(0) : setActiveArea(id);
  };

  return (
    <>
      {/* <!-- ===== ServiceAreas Start ===== --> */}
      <section id="service-areas" className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 pt-25">
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
            <SectionHeader
              headerInfo={{
                title: "SERVICE AREAS"
              }}
            />
          {/* <!-- Section Title End --> */}
          <div className="absolute -bottom-16 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5  mt-10">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-3/5 lg:w-1/2"
            >
               <div className="mb-2 flex items-center gap-5">
                <div className="w-fully">
                  <p>
                    Discover the areas we serve, ensuring personalized home care within your community.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
                {areaData.map((area, key) => (
                  <AreaItem
                    key={key}
                    areaData={{ ...area, activeArea, handleAreaToggle }}
                  />
                ))}
              </div>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-2/5 lg:w-1/2"
            >
               <Image
                src="/images/serviceAreas/serviceAreas.jpg"
                alt="About"
                className="dark:hidden"
                width={400}
                height={200}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== ServiceAreas End ===== --> */}
    </>
  );
};

export default ServiceAreas;
