import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#C8F5D8" }}
    >
      {/* Decorative purple shape */}
      <div
        className="absolute bottom-8 right-8 w-16 h-24 rounded-t-full opacity-80 pointer-events-none"
        style={{ backgroundColor: "#7B61FF" }}
      />

      {/* Small circle */}
      <div
        className="absolute top-12 left-1/3 w-5 h-5 rounded-full border-2 border-black/30 pointer-events-none"
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight text-black"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Subscribe to
          <br />
          our newsletter
        </motion.h2>

        <motion.p
          className="mt-5 text-base text-black/60"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          To make your stay special and even more memorable
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {submitted ? (
            <p
              className="text-black font-semibold text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              🎉 You're subscribed!
            </p>
          ) : (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 max-w-xs px-5 py-3 rounded-full border border-black/20 bg-white text-black placeholder:text-black/40 text-sm outline-none focus:border-black transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-black/80 transition-colors whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Subscribe Now
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
