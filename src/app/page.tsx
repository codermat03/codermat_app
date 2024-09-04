import Image from "next/image";
import ContactForm from "./components/contact-form/contact-form";
import HeroSection from "./components/hero-section/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>

      <main className="mt-[500px]">
        <section className="text-black">
          <ContactForm></ContactForm>
        </section>
      </main>
    </>
  );
}
