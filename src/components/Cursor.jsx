import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.6 });
  const ringX = useSpring(x, { stiffness: 300, damping: 60 });
  const ringY = useSpring(y, { stiffness: 300, damping: 60 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  useEffect(() => {
    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);

    const interactives = document.querySelectorAll(
      "a, button , .swiper-button-next , .swiper-button-prev , .open",
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      interactives.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);
  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* dot */}
      <motion.div
        animate={{
          scale: hovered ? 2.5 : 1,
          backgroundColor: hovered ? "#ffcc00" : "#ff4d00",
        }}
        transition={{ duration: 0.2 }}
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-999"
      />
      {/* ring */}
      <motion.div
        animate={{
          scale: hovered ? 2 : 1,
        }}
        transition={{ duration: 0.2 }}
        style={{ x: ringX, y: ringY }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-orange-500 pointer-events-none z-999 -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default Cursor;
