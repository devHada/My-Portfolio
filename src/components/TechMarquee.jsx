import Marquee from "react-fast-marquee";

const skills = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
  "Firebase",
  "Groq API",
  "Lenis",
  "Swiper.js",
  "React Hook Form",
];
const highlighted = ["React", "Framer Motion", "Groq API"];
const TechMarquee = () => {
  return (
    <Marquee
      speed={50}
      gradient={false}
      className="py-6 border-y border-white/10"
    >
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-4 mx-8">
          <span
            className={`text-sm font-outfit font-bold tracking-widest uppercase ${highlighted.includes(skill) ? "text-orange-500" : "text-white/50"}`}
          >
            {skill}
          </span>
          <span className="text-orange-500">·</span>
        </div>
      ))}
    </Marquee>
  );
};

export default TechMarquee;
