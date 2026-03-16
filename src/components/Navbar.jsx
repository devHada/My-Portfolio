import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={` flex   justify-between items-center text-white px-15 py-5 
        ${scrolled ? "bg-black/10 backdrop-blur-sm border-b border-white/10" : "bg-black/30"}
        fixed h-20  w-full z-100 `}
    >
      {/* LEft */}
      <div className="flex  items-center ">
        <motion.h1
          initial={{ x: "-50vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl font-bold font-syne"
        >
          DEV<span className="text-orange-500">.</span>
        </motion.h1>
      </div>
      {/* Center */}
      <div className="hidden lg:flex  items-center gap-5">
        <ul className="flex items-center gap-13 ">
          <li>
            <motion.a
              animate={{ opacity: 0.4 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              href="#home"
              className="cursor-pointer   "
            >
              Home
            </motion.a>
          </li>
          <li>
            <motion.a
              animate={{ opacity: 0.4 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              href="#about"
              className="cursor-pointer   "
            >
              About
            </motion.a>
          </li>
          <li>
            <motion.a
              animate={{ opacity: 0.4 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              href="#projects"
              className="cursor-pointer   "
            >
              Projects
            </motion.a>
          </li>
          <li>
            <motion.a
              animate={{ opacity: 0.4 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              href="#contact"
              className="cursor-pointer"
            >
              Contact
            </motion.a>
          </li>
        </ul>
      </div>
      {/* Right */}
      <div>
        <motion.button
          onClick={handleClick}
          whileHover={{ y: -4, scale: 1.05 }}
          className="bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer hover:shadow-[-6px_6px_10px_rgba(249,115,22,0.6)] transition-all duration-300 ease-in-out active:scale-75"
        >
          HIRE ME
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
