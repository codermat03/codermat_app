import React from "react";
import ContactForm from "../components/contact-form/contact-form";

const ContactUs = () => {
  return (
    <div className="bg-black pt-40 text-white bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] ">
      <h1 className="text-center font-bold text-4xl">Contact Us</h1>

      <ContactForm></ContactForm>
      <img
        className="w-full pt-14"
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt=""
      />
    </div>
  );
};

export default ContactUs;
