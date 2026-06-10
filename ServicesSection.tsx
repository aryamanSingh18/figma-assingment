import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    category: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    id: 2,
    category: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    id: 3,
    category: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-white py-20 px-6 relative overflow-hidden">
      {/* Decorative wavy line */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none"
        width="120"
        height="300"
        viewBox="0 0 120 300"
        fill="none"
      >
        <path
          d="M60 0 Q 100 50, 60 100 Q 20 150, 60 200 Q 100 250, 60 300"
          stroke="#FF3B3B"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight text-black mb-12"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What we{" "}
          <span
            className="italic"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            can
          </span>
          <br />
          <span
            className="italic"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            offer
          </span>{" "}
          you!
        </motion.h2>

        {/* Service list */}
        <div className="divide-y divide-black/10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="group grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-4 items-center py-6 cursor-pointer hover:bg-black/[0.02] transition-colors rounded-lg px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
            >
              {/* Category */}
              <p
                className="text-sm text-black/50 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {service.category}
              </p>

              {/* Title */}
              <h3
                className="text-[clamp(1.3rem,3vw,2rem)] font-black text-black leading-tight group-hover:text-black/70 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {service.title}
              </h3>

              {/* Arrow */}
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
