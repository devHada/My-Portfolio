import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Cursor from "./Cursor";

const messages = [
  "bro what are you even looking for 💀",
  "this page ghosted you fr",
  "404 — even google can't find this",
  "you wandered off the map bestie",
  "nothing to see here, move along",
];

const NotFound = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    setMsg(messages[Math.floor(Math.random() * messages.length)]);

    // random glitch effect
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#111111] min-h-screen w-full flex flex-col items-center justify-center px-5 overflow-hidden relative">
      {/* background big 404 text */}
      <Cursor />
      <p className="absolute text-[20vw] font-syne font-black text-white/3 select-none pointer-events-none">
        404
      </p>

      {/* floating orange blobs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* main content */}
      <div className="flex flex-col items-center gap-6 text-center z-10">
        {/* glitchy 404 */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`text-[10rem] md:text-[16rem] font-syne font-black leading-none select-none ${
            glitch ? "text-orange-500 translate-x-1" : "text-white"
          } transition-all duration-75`}
        >
          4<span className={glitch ? "text-white" : "text-orange-500"}>0</span>4
        </motion.h1>

        {/* funny random message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 font-outfit text-lg md:text-xl"
        >
          {msg}
        </motion.p>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-600 font-outfit text-sm"
        >
          The page you're looking for doesn't exist — or never did.
        </motion.p>

        {/* back home button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="mt-4 px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-outfit font-bold rounded-xl transition-colors duration-200 text-base"
        >
          Take me home →
        </motion.button>
      </div>
    </div>
  );
};

export default NotFound;
