import React from "react";
import { motion } from "motion/react";
import { certs } from "../data/cert";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="bg-[#151515] flex flex-col gap-10 h-fit w-full px-5 md:px-16 lg:px-35 py-30"
    >
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col gap-3"
      >
        <h1 className="text-lg font-outfit font-black uppercase text-orange-600">
          Credentials
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-syne font-black">
          Certificates
        </h1>
        <p className="text-xl text-gray-500 font-outfit">
          Courses and certifications I've completed.
        </p>
      </motion.div>

      {/* divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full bg-gray-700 h-1 origin-left"
      />

      {/* cert grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative group open rounded-xl overflow-hidden cursor-pointer"
            onClick={() => window.open(cert.pdf, "_blank")}
          >
            {/* cert image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full  h-auto opacity-70 object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-105"
            />

            {/* hover overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
              <span className="text-2xl">📄</span>
              <span className="text-white font-bold font-outfit text-base">
                See Certificate
              </span>
              <span className="text-gray-300 font-outfit text-xs">
                {cert.issuer}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
