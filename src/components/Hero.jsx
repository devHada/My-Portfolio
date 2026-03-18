import React from "react";
import { Dot } from "lucide-react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen  flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* orange glow — right side */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full"
          style={{
            background:
              "radial-gradient(ellipse at right center, rgba(180,60,0,0.3) 0%, transparent 70%)",
          }}
        />
        {/* blue glow — left side */}
        <div
          className="absolute left-0 bottom-0 w-1/2 h-full"
          style={{
            background:
              "radial-gradient(ellipse at left bottom, rgba(0,60,180,0.2) 0%, transparent 70%)",
          }}
        />
      </div>
      {/* left text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex    md:pt-24  w-full md:w-1/2 flex-col px-6 md:px-12 gap-16"
      >
        <div className="border-orange-500 whitespace-nowrap  flex rounded-3xl w-fit pr-6 border-2">
          <motion.div
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 1, scale: 0.7 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Dot className="pl-1" size={32} color="#f56e00" strokeWidth={6} />
          </motion.div>

          <h1 className="text-sm  tracking-widest  leading-8 font-outfit uppercase text-orange-500 font-bold">
            Available for freelance Work
          </h1>
        </div>

        <div className="flex flex-col w-full -mt-7 gap-8 ">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-extrabold font-syne -mb-4">
              React
            </h1>
            <h1
              className="text-[3rem] sm:text-[4rem] md:text-9xl xl:9xl font-bold font-syne"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent",
              }}
            >
              Developer
            </h1>
          </div>
          <div className="w-10 h-5 bg-orange-500 mt-5 " />
        </div>
        <div className="flex flex-col gap-10 ">
          <p className="text-base md:text-xl xl:text-2xl text-gray-500">
            I build fast, modern web experiences — from client websites to
            AI-powered platforms. Based in Jaipur, India.
          </p>
          <div className="flex flex-wrap gap-4 z-50 ">
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-orange-600   text-sm px-6 py-4 rounded-lg font-extrabold font-outfit flex gap-2 cursor-pointer hover:shadow-lg hover:shadow-orange-600/50 transition-shadow ease-in-out duration-100 "
            >
              View My Work
              <MoveRight size={15} strokeWidth={2} className="mt-1" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-transparent border border-gray-800 hover:border-white  ease-in-out  text-sm px-6 py-4 rounded-lg font-extrabold font-outfit cursor-pointer "
            >
              Get In Touch
            </motion.a>
          </div>
        </div>
      </motion.div>
      {/* right image */}

      <motion.img
        initial={{ x: 100, opacity: 0.1 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: "easeInOut",
        }}
        src="/gojo.jpg"
        alt=""
        className="hidden sm:hidden lg:block md:hidden absolute h-[90%] right-0 bottom-0  mix-blend-screen pointer-events-none"
      />
    </section>
  );
};

export default Hero;
