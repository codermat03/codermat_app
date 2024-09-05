import Image from "next/image";
import ContactForm from "./components/contact-form/contact-form";
import HeroSection from "./components/hero-section/hero-section";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42]">
        <HeroSection></HeroSection>
      </section>
      <section className="bg-gradient-to-bl from-[#190b34] via-[#280d42] to-[#280d42]">
        <div className="h-screen">
          <h1 className="text-4xl font-bold text-white text-center">
            Services seciton
          </h1>
        </div>
        <img
          className="w-full"
          src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
          alt=""
        />
      </section>

      <section className="bg-[#21112E]">
        <div className="h-screen">
          <h1 className="text-4xl font-bold text-white text-center">
            Technology
          </h1>
        </div>
      </section>

      <main className="">
        <section className="text-black">
          <ContactForm></ContactForm>
        </section>
      </main>
    </>
  );
}
