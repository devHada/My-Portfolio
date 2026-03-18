import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 w-full px-5 md:px-16 lg:px-25 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="text-gray-500 font-outfit text-sm">
        © 2025 <span className="text-orange-500 font-bold">Dev</span> — Designed
        & Built by me.
      </p>
      <a
        href="https://maps.google.com/?q=Jaipur,Rajasthan,India"
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 font-syne font-medium text-sm hover:text-orange-600 transition-colors duration-300"
      >
        Jaipur, India
      </a>
    </footer>
  );
};

export default Footer;
