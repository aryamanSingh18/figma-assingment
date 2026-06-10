import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function TomorrowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className="text-[clamp(2rem,5vw,3.8rem)] font-black leading-tight text-black"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span
              className="italic"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              Tomorrow
            </span>{" "}
            should
            <br />
            be better than today
          </h2>

          <p
            className="mt-5 text-black/60 text-base leading-relaxed max-w-md"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>

          <button
            className="mt-7 text-sm font-semibold text-black border-b-2 border-black pb-0.5 hover:opacity-60 transition-opacity"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Read more ————
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Decorative pink shape */}
          <div
            className="absolute -top-4 right-6 w-20 h-20 rotate-12 opacity-80 pointer-events-none"
            style={{ backgroundColor: "#FF2D78" }}
          />

          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=600&fit=crop"
              alt="Business meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small squiggle */}
          <svg
            className="absolute -bottom-4 -left-4 opacity-40 pointer-events-none"
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
          >
            <path
              d="M0 20 Q 20 0, 40 20 Q 60 40, 80 20"
              stroke="#FF2D78"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
