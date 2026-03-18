import React from "react";
import { motion } from "framer-motion";
import { skills, explore } from "../data/skills";

const TechStack = () => {
  return (
    <section
      id="skills"
      className="bg-[#0d0d0d] flex flex-col gap-10 min-h-fit w-full px-5 md:px-16 lg:px-35 py-30 selection:none"
    >
      {/* upper section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col gap-3"
      >
        <h1 className="text-lg font-outfit font-black uppercase text-orange-600">
          What I work with
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-syne font-black">
          Tech <span className="text-orange-600">Stack</span>
        </h1>
        <p className="text-xl text-gray-500 font-outfit">
          The tools I reach for when building production-grade React apps.
        </p>
      </motion.div>

      {/* divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full bg-gray-700 h-1 origin-left"
      />

      {/* tech stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 selection:none">
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
            }}
            key={index}
            className="flex flex-col  gap-4  bg-[#1D1D1C] rounded-lg p-5 "
          >
            <h1 className="text-sm text-orange-500 flex gap-2 font-outfit font-bold tracking-widest uppercase ">
              {skill.category}
              <span className="text-orange-500 font-black text-sm">·</span>
            </h1>
            <div className="text-sm font-outfit font-bold tracking-widest uppercase ">
              {skill.items.map((item, i) => (
                <p key={i} className="text-sm font-outfit text-gray-200">
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
        {explore.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="flex flex-col  gap-4  bg-[#1D1D1C] rounded-lg p-5 "
          >
            <h1 className="text-sm text-yellow-500 flex gap-2 font-outfit font-bold tracking-widest uppercase ">
              {skill.category}
              <span className="text-orange-500 font-black text-sm">·</span>
            </h1>
            <div className="text-sm font-outfit font-bold tracking-widest uppercase text-gray-500/80 ">
              {skill.items.map((item, i) => (
                <p key={i} className="text-sm font-outfit text-gray-400/50">
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
