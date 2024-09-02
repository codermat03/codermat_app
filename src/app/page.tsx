import Image from "next/image";
import ContactForm from "./components/contact-form/contact-form";

export default function Home() {
  return (
    <>
      <h1 className="text-7xl font-bold text-black mt-20 text-center">
        Welcome to CoderMat world
      </h1>

      <main className="mt-[500px]">
        <section className="text-black">
          <ContactForm></ContactForm>
        </section>
      </main>
    </>
  );
}
