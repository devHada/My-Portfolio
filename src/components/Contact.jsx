import React from "react";
import { motion } from "motion/react";

import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: name,
          email: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSent(false), 4000);
      })
      .catch((error) => {
        alert("Something went wrong. Please try again.");
        console.error(error);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#151515] flex  gap-5 flex-col md:flex-row min-h-fit w-full px-5 md:px-16 lg:px-35 py-30 selection:none"
    >
      {/* left side */}
      <div className="flex flex-col items-start gap-10 w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-lg font-outfit font-black uppercase text-orange-600">
            Lets Talk
          </h1>
          <h1 className="text-4xl md:text-4xl lg:text-5xl whitespace-nowrap font-syne font-black">
            Get In <span className="text-orange-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-500 font-outfit ">
            Available for freelance work, collaborations, and interesting
            builds. Feel free to reach out — I reply fast.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col w-full gap-5"
        >
          <motion.a
            whileHover={{ y: -4 }}
            transition={{ duration: 0.1 }}
            className="flex items-center text-md gap-3 bg-transparent border-gray-600/50 border-2 font-outfit px-4 text-gray-400 hover:border-orange-500 hover:text-white p-3 w-full rounded-md transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-orange-500/40 "
            href="mailto:hadadev996@gmail.com"
          >
            <Mail size={20} className="text-orange-500 self-center " />{" "}
            hadadev996@gmail.com
          </motion.a>
          <motion.a
            whileHover={{ y: -4 }}
            transition={{ duration: 0.1 }}
            className="flex items-center text-md gap-3 bg-transparent border-gray-600/50 border-2 font-outfit px-4 text-gray-400 hover:border-orange-500 hover:text-white p-3 w-full rounded-md transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-orange-500/40 "
            href="https://github.com/devHada"
          >
            <Github size={20} className="text-orange-500 self-center " />
            https://github.com/devHada
          </motion.a>
          <motion.a
            whileHover={{ y: -4 }}
            transition={{ duration: 0.1 }}
            className="flex items-center  text-md gap-3 bg-transparent border-gray-600/50 border-2 font-outfit px-4 text-gray-400 hover:border-orange-500 hover:text-white p-3 w-full rounded-md transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-orange-500/40 "
            href="https://www.linkedin.com/in/devHada/"
          >
            <Linkedin size={20} className="text-orange-500 self-center " />
            https://www.linkedin.com/in/devHada/
          </motion.a>
        </motion.div>
      </div>
      {/* right side */}

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col gap-5 md:p-10 p-5  w-full md:w-1/2"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          className="bg-[#1d1d1c]/90 w-full h-15 capitalize px-6 rounded-lg border border-gray-600/50 focus:border-orange-500 focus:outline-none  placeholder:text-gray-500 transition-all duration-300 ease-in-out "
          placeholder="Your Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          className="bg-[#1d1d1c]/90 w-full h-15  px-6 rounded-lg border border-gray-600/50 focus:border-orange-500 focus:outline-none  placeholder:text-gray-500 transition-all duration-300 ease-in-out "
          placeholder="Your Email"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={message}
          className="bg-[#1d1d1c]/90 pt-2 w-full h-30  px-6 rounded-lg border border-gray-600/50 focus:border-orange-500 focus:outline-none resize-none overflow-y-auto placeholder:text-gray-500 transition-all duration-300 ease-in-out "
          placeholder="What's on your mind?"
        />
        <motion.button
          type="submit"
          onClick={sendEmail}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="bg-orange-600  w-full  text-sm px-6 py-4 rounded-lg font-extrabold font-outfit  flex gap-1 cursor-pointer hover:shadow-lg hover:shadow-orange-600/50 transition-shadow ease-in-out duration-100 "
        >
          Send Message
          <MoveRight size={15} strokeWidth={2} className="mt-1" />
        </motion.button>
      </motion.form>

      {sent && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-12 bg-orange-600 text-white font-outfit font-bold px-6 py-4 rounded-lg shadow-lg shadow-orange-600/40 z-50"
        >
          ✅ Message sent successfully!
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
