import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const ContactForm = () => {
  return (
    <section className="text-white md:py-20 py-10">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 content-center gap-8">
        {/* Contact Info Section */}
        <div>
          <h3 className="md:text-left text-center text-2xl font-semibold mb-4">Contact Info</h3>
          <p className="mb-6 text-[#898989]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <div className="flex items-center mb-4">
            <AiOutlineMail className="text-xl mr-2" />
            <a href="mailto:support@website.com" className="text-white">
              codermatteam@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <AiOutlinePhone className="text-xl mr-2" />

            <a href="tel:+14805550103" className="text-white">
              +8801910882903{" "}
            </a>
          </div>
          <div className="md:w-[400px]">
            <img src="https://i.postimg.cc/BnhzgkBQ/ccccc.png" alt="" />
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Send us a message</h3>
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Your name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email address</label>
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  className="w-full p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Phone number</label>
                <input
                  type="text"
                  placeholder="20 111 2345 6789"
                  className="w-full p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="w-full p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                placeholder="Type here"
                className="w-full h-[150px] resize-none p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="md:ms-auto mt-auto border-2 flex items-center gap-2 border-[#7272723c]  bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
