import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const testimonialAvatars = [
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face", pos: { top: "10%", left: "5%" }, size: 64 },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face", pos: { top: "5%", right: "8%" }, size: 72 },
  { src: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=120&h=120&fit=crop&crop=face", pos: { bottom: "15%", left: "3%" }, size: 56 },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face", pos: { bottom: "10%", right: "5%" }, size: 68 },
  { src: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?w=120&h=120&fit=crop&crop=face", pos: { top: "40%", left: "1%" }, size: 52 },
  { src: "https://images.unsplash.com/photo-1609436132311-e4b0c9370469?w=120&h=120&fit=crop&crop=face", pos: { top: "35%", right: "2%" }, size: 60 },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Decorative circle */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-black/20 pointer-events-none"
      />

      {/* Floating avatars */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {testimonialAvatars.map((avatar, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={avatar.pos}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <img
              src={avatar.src}
              alt="customer"
              className="rounded-full object-cover border-2 border-white shadow-md"
              style={{ width: avatar.size, height: avatar.size }}
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-black leading-tight text-black"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What our{" "}
          <span
            className="italic"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            customer
          </span>
          <br />
          says{" "}
          <span
            className="italic underline decoration-2 underline-offset-4"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            About Us
          </span>
        </motion.h2>

        {/* Testimonial card */}
        <motion.div
          className="mt-12 bg-white border border-black/10 rounded-2xl p-8 md:p-12 shadow-lg text-left relative"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Large quote marks */}
          <span
            className="absolute top-6 left-8 text-7xl text-black/10 leading-none select-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
            aria-hidden
          >
            "
          </span>
          <span
            className="absolute bottom-6 right-8 text-7xl text-black/10 leading-none select-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
            aria-hidden
          >
            "
          </span>

          <p
            className="text-base md:text-lg text-black/80 leading-relaxed relative z-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a{" "}
            <strong className="text-black">50% increase in traffic</strong> in
            days since its launch. They also had an impressive ability to use
            technologies that the company hasn't used, which have also proved to
            be easy to use and reliable.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=80&h=80&fit=crop&crop=face"
              alt="reviewer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-black text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                Marcus Johnson
              </p>
              <p className="text-black/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                CEO, Elementum Client
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
