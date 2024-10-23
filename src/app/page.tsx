import Image from "next/image";
import ContactForm from "./components/contact-form/contact-form";
import HeroSection from "./components/hero-section/hero-section";
import FAQ from "./components/FAQ/faq";
import OurWebDevelopmentProcess from "./components/OurWebDevelopmentProcess/OurWebDevelopmentProcess";
import TechnologyStack from "./components/shared/technologyStack/TechnologyStack";
import Services from "./services/services/services";
import ProjectDiscuss from "./components/shared/projectdiscuss/ProjectDiscuss";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Projetcs from "./components/OurLatestProjects/Projetcs";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] border-b ">
        <HeroSection />
      </section>

      <section className="bg-gradient-to-bl from-[#190b34] via-[#280d42] to-[#280d42]">
        <Services></Services>
      </section>

      <section className="bg-gradient-to-t from-[#321544] to-[#20112E] border-b">
        <ProjectDiscuss></ProjectDiscuss>
      </section>

      <section className="bg-gradient-to-t from-[#21122F] to-[#321544] border-b">
        <TechnologyStack></TechnologyStack>
      </section>

      <section className="bg-gradient-to-t from-[#181819] to-[#21122F]">
        <div>
          <OurWebDevelopmentProcess />
        </div>
      </section>
      <section className="text-white">
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section className="text-white">
        <Pricing></Pricing>
      </section>
      <section className="bg-gradient-to-t from-[#240f35]  to-[#181819] text-white">
        <div>
          <Testimonials></Testimonials>
        </div>
      </section>
      <section className="bg-gradient-to-t from-[#181819] to-[#240f35] text-white">
        <Projetcs></Projetcs>
      </section>

      <section className="bg-gradient-to-t from-[#21122F] to-[#181819] text-white">
        <FAQ />
      </section>

      <main className="">
        <section className="text-black bg-[#181819] ">
          <ContactForm />
        </section>
      </main>
    </>
  );
}
