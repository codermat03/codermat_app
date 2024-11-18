/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What does custom web development involve?",
      answer:
        "Custom web development is the process of creating a unique website designed specifically for your business needs. Instead of using pre-made templates, we build everything from the ground up. This includes custom designs, special features, and functionality that fit your brand, target audience, and business goals. It allows your website to stand out from the competition and better serve your users' needs.",
    },
    {
      question: "How long does it take to build a custom website?",
      answer:
        "The time it takes to build a custom website depends on its complexity. For simple websites with basic functionality, it can take around 4-6 weeks. However, for more advanced websites with complex features, integrations, or custom design requirements, it can take anywhere from 3 to 6 months. We'll work closely with you to ensure that we meet your timeline expectations while delivering a high-quality product.",
    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "We use a variety of modern technologies depending on your project's specific needs. For front-end development (what users see and interact with), we often use React and Next.js, which provide fast and dynamic user experiences. For back-end development (where the data and logic work behind the scenes), we may use Node.js, Laravel, or other popular frameworks that are secure, scalable, and reliable. We choose the best tools to ensure your website performs well and is easy to maintain.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely! In today's world, most people browse the internet on their phones. We ensure that every website we build is fully responsive, which means it will look great and work well on all devices, including smartphones, tablets, and desktops. This ensures your users have the best possible experience no matter what device they’re using to visit your website.",
    },
    {
      question: "Do you offer website maintenance after launch?",
      answer:
        "Yes, we offer ongoing support and maintenance services after your website is launched. This includes making sure your website stays secure, updating software, fixing any issues that may arise, and making small improvements over time. Regular maintenance helps your website perform well and ensures it stays up-to-date with the latest web technologies and security standards.",
    },
  ];

  return (
    <div className="md:py-20 py-10 px-7 md:px-20">
      <div className="max-w-[1480px] mx-auto">
        <div className="mb-14 text-center">
          <h2 className="md:text-3xl text-2xl font-bold ">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-xl">Got Questions? We've Got Answers!</p>
        </div>
        <div className="md:flex items-center justify-between">
          <div>
            <Image
              src="https://i.postimg.cc/pX4LyG34/FAQ.png"
              alt=""
              width={800}
              height={400}
            />
          </div>

          <div className="w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b">
                <div
                  className="flex justify-between items-center p-4 rounded-lg cursor-pointer hover:bg-[#44475a] transition duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg text-white font-medium">
                    {faq.question}
                  </h3>
                  <span>
                    {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-[max-height] duration-700 ${openFAQ === index ? "max-h-screen" : "max-h-0"
                    }`}
                >
                  <div className="p-4 pt-1 mt-0 text-[#919191] rounded-lg text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
