import React from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#151515] flex flex-col gap-10 min-h-screen w-full px-35 py-20 selection:none"
    >
      {/* upper section */}
      <div className="flex flex-col gap-3">
        <h1 className="text-lg font-syne font-black uppercase text-orange-600">
          Portfolio
        </h1>
        <h1 className="text-7xl font-syne font-black">
          Things I've <span className="text-orange-600">built</span>
        </h1>
        <p className="text-xl text-gray-500 font-outfit">
          Real projects — for clients, for teams, and for myself.
        </p>
      </div>

      {/* divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full bg-gray-700 h-px origin-left"
      />

      {/* Swiper */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        modules={[FreeMode, Navigation]}
        className="w-full pb-10"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="h-auto">
            <motion.div
              initial="rest"
              variants={{
                rest: { opacity: 0, y: 50 },
                hover: { opacity: 1, y: -5 },
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              whileHover="hover"
              className="bg-[#1c1c1c] p-6 rounded-xl flex flex-col gap-4 min-h-95 h-full hover:z-100 hover:shadow-2xl hover:shadow-black/30"
            >
              {/* hover line */}
              <motion.div
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-px bg-orange-500 origin-left"
              />

              {/* top row — icon + category badge */}
              <div className="flex justify-between items-center">
                <span className="text-3xl">{project.icon}</span>
                <span
                  className={`text-xs font-bold font-outfit px-3 py-1 rounded-full ${
                    project.category === "client"
                      ? "bg-yellow-500 text-black"
                      : project.category === "team"
                        ? "bg-green-500 text-black"
                        : "bg-red-500 text-white"
                  }`}
                >
                  {project.category.toUpperCase()}
                </span>
              </div>

              {/* title */}
              <h2 className="text-xl font-bold font-syne">{project.title}</h2>

              {/* description */}
              <p className="text-sm text-gray-500 font-outfit flex-1">
                {project.desc}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs border border-white/10 px-2 py-1 rounded-md font-outfit text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* links */}
              <div className="flex gap-4 text-sm font-outfit text-gray-400 pt-2 border-t border-white/10">
                <a
                  href={project.live}
                  target="_blank"
                  className="hover:text-orange-500 transition-colors"
                >
                  ↗ Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="hover:text-orange-500 transition-colors"
                >
                  ⌥ GitHub
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
