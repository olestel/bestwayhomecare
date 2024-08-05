import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ServiceAreas from "@/components/ServiceAreas";


export const metadata: Metadata = {
  title: "Best Way Home Care",
  description: "Delivering Professional Best Way In-Home Care",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <ServiceAreas />
      <Contact />
    </main>
  );
}
