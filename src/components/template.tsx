import Image from "next/image";
import React from "react";

type Props = {};

const template = (props: Props) => {
  return (
    <div>
      {/* Brands Section */}
      <section className="flex justify-between items-center mb-32">
        {[
          "national-bank.svg",
          "mattered.svg",
          "coca-cola.svg",
          "adobe.svg",
          "subway.svg",
          "codecademy.svg",
        ].map((logo) => (
          <Image
            key={logo}
            src={`/logos/${logo}`}
            alt="Brand logo"
            width={100}
            height={40}
            className="opacity-70"
          />
        ))}
      </section>

      {/* Services Section */}
      <section className="text-center mb-32">
        <h2 className="text-3xl mb-2">
          Collaborate with brands and agencies
        </h2>
        <p className="text-gray-600 mb-16">
          to create impactful results.
        </p>

        <div className="grid grid-cols-4 gap-8">
          {[
            {
              title: "UX & UI",
              description:
                "Designing interfaces that are intuitive, efficient, and enjoyable to use",
            },
            {
              title: "Web & Mobile App",
              description:
                "Transforming ideas into exceptional web and mobile app experiences",
            },
            {
              title: "Design & Creative",
              description:
                "Crafting visually stunning designs that connect with your audience",
            },
            {
              title: "Development",
              description:
                "Bringing your vision to life with the latest technology and design trends",
            },
          ].map((service) => (
            <div key={service.title} className="text-left">
              <div className="w-12 h-12 mb-4 bg-gray-100 rounded-lg"></div>
              <h3 className="font-medium mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-32">
        <h2 className="text-4xl mb-8">
          Tell me about your next
          <br />
          project
        </h2>
        <div className="flex gap-4 justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-full">
            Email Me
          </button>
          <button className="border border-gray-200 px-6 py-3 rounded-full">
            WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
};

export default template;
