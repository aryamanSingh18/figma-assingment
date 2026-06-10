import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function HelpSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20 px-6 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative">
            {/* Red triangles decoration */}
            <div
              className="absolute -top-6 -left-6 w-0 h-0 pointer-events-none"
              style={{
                borderLeft: "36px solid transparent",
                borderRight: "36px solid transparent",
                borderBottom: "62px solid #FF3B3B",
              }}
            />
            <div
              className="absolute -bottom-4 right-10 w-0 h-0 pointer-events-none opacity-70"
              style={{
                borderLeft: "24px solid transparent",
                borderRight: "24px solid transparent",
                borderBottom: "42px solid #FF3B3B",
              }}
            />

            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?w=700&h=520&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Avatar badge */}
            <div className="absolute -right-4 bottom-10 flex items-center gap-1.5 bg-white rounded-full shadow-lg px-3 py-1.5 border border-black/10">
              <span className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                APT
              </span>
              <span className="text-xs font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                FX
              </span>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <h2
            className="text-[clamp(1.8rem,4vw,3.2rem)] font-black leading-tight text-black"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            See how we can
            <br />
            help you{" "}
            <span
              className="italic"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              progress
            </span>
          </h2>

          <p
            className="mt-5 text-black/60 text-base leading-relaxed max-w-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            systems and social research.
          </p>

          <button
            className="mt-7 text-sm font-semibold text-black border-b-2 border-black pb-0.5 hover:opacity-60 transition-opacity"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Read more ————
          </button>
        </motion.div>
      </div>
    </section>
  );
}
