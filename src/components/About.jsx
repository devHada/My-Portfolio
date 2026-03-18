import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0d0d0d] flex flex-wrap md:flex-nowrap gap-20 min-h-fit w-full px-5 md:px-16 lg:px-35 py-30 selection:none"
    >
      {/* left-side */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col items-start gap-5 w-full md:w-1/2"
      >
        <h1 className="text-lg font-outfit font-black uppercase text-orange-600">
          About Me
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-syne font-black whitespace-nowrap">
            React Dev.
          </h1>
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-syne font-black text-orange-600 whitespace-nowrap">
            Final Year
          </h1>
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-syne font-black">
            BCA.
          </h1>
        </div>
        <p className="text-md font-medium text-gray-400 font-outfit">
          I'm <span className="text-white font-extrabold">Dev Hada</span> — a
          final-year BCA student at
          <span className="text-white font-extrabold">
            {" "}
            SS Jain Subodh P.G. College, Jaipur
          </span>
          , and a frontend developer who builds things that actually ship. My
          first client project is live, and I led a 6-member team through some
          hackathons. I don't just learn — I build.
        </p>
        <p className="text-md font-medium text-gray-400 font-outfit">
          I work with
          <span className="text-white font-extrabold">
            {" "}
            React, Vite, and Tailwind
          </span>{" "}
          to create fast, clean web experiences — from school websites to
          AI-powered study platforms. I care about code that performs, designs
          that feel right, and products that real people actually use.
        </p>
        <motion.a
          href="/Dev_Resume.pdf"
          download
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="bg-transparent border border-gray-800 mt-3 hover:border-white ease-in-out flex gap-2 text-sm px-6 py-4 rounded-lg font-extrabold font-outfit cursor-pointer"
        >
          <Download size={20} /> Download Resume
        </motion.a>
      </motion.div>

      {/* right-side */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 self-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
          }}
          className="flex flex-col justify-center gap-2 bg-[#1D1D1C] px-6 rounded-lg p-5 min-h-36"
        >
          <h1 className="text-orange-600 font-bold font-syne text-5xl">1+</h1>
          <h1 className="text-gray-500 font-outfit font-medium">
            Client Projects
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
          }}
          className="flex flex-col justify-center gap-2 bg-[#1D1D1C] px-6 rounded-lg p-5 min-h-36"
        >
          <h1 className="text-orange-600 font-bold font-syne text-5xl">6</h1>
          <h1 className="text-gray-500 font-outfit font-medium">
            Team Members Led
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
          }}
          className="flex flex-col justify-center gap-2 bg-[#1D1D1C] px-6 rounded-lg p-5 min-h-36"
        >
          <h1 className="text-orange-600 font-bold font-syne text-5xl">10+</h1>
          <h1 className="text-gray-500 font-outfit font-medium">
            React Components Built
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
          }}
          className="flex flex-col justify-center gap-2 bg-[#1D1D1C] px-6 rounded-lg p-5 min-h-36"
        >
          <h1 className="text-orange-600 font-bold font-syne text-5xl">∞</h1>
          <h1 className="text-gray-500 font-outfit font-medium">
            Anime Watched
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
