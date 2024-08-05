"use client";
import React from "react";
import servicesData from "./servicesData";
import SingleService from "./SingleService";
import SectionHeader from "../Common/SectionHeader";

const Services = () => {
  return (
    <>
      {/* <!-- ===== Services Start ===== --> */}
      <section id="services-provided" className="pt-20 pb-10 lg:pt-25 xl:pt-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "SERVICES PROVIDED",
              subtitle: "How can we help you today?",
              description: `We specialize in providing Personal Care, Homemaking, and Companionship to meet all your needs.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Services item Start --> */}

            {servicesData.map((service, key) => (
              <SingleService service={service} key={key} />
            ))}
            {/* <!-- Services item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Services End ===== --> */}
    </>
  );
};

export default Services;
