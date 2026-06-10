import { motion } from "motion/react";

const avatars = [
  { id: 1, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face", badge: "FX", badgeColor: "#FF6B00" },
  { id: 2, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face", badge: "P2", badgeColor: "#FF2D78" },
  { id: 3, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face", badge: null, badgeColor: null },
  { id: 4, src: "https://images.unsplash.com/photo-1607503873903-c5e95f80d7b9?w=120&h=120&fit=crop&crop=face", badge: "B", badgeColor: "#7B61FF" },
  { id: 5, src: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=120&h=120&fit=crop&crop=face", badge: null, badgeColor: null },
  { id: 6, src: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?w=120&h=120&fit=crop&crop=face", badge: "S", badgeColor: "#00C853" },
  { id: 7, src: "https://images.unsplash.com/photo-1609436132311-e4b0c9370469?w=120&h=120&fit=crop&crop=face", badge: null, badgeColor: null },
  { id: 8, src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=120&h=120&fit=crop&crop=face", badge: "FX", badgeColor: "#FF6B00" },
];

const floatingPositions = [
  { top: "8%", left: "2%", size: 64 },
  { top: "2%", left: "18%", size: 56 },
  { top: "5%", right: "5%", size: 72 },
  { top: "28%", right: "2%", size: 60 },
  { top: "55%", left: "0%", size: 68 },
  { top: "50%", right: "8%", size: 56 },
  { top: "72%", left: "10%", size: 60 },
  { top: "68%", right: "18%", size: 64 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-8 overflow-hidden bg-white">
      {/* Decorative squiggly lines */}
      <svg
        className="absolute left-0 top-1/3 opacity-40 pointer-events-none"
        width="60"
        height="300"
        viewBox="0 0 60 300"
        fill="none"
      >
        <path
          d="M30 0 Q 50 40, 30 80 Q 10 120, 30 160 Q 50 200, 30 240 Q 10 280, 30 300"
          stroke="#FF2D78"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute right-4 top-1/4 opacity-30 pointer-events-none"
        width="50"
        height="200"
        viewBox="0 0 50 200"
        fill="none"
      >
        <path
          d="M25 0 Q 45 30, 25 60 Q 5 90, 25 120 Q 45 150, 25 180 Q 5 210, 25 200"
          stroke="#00C853"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Floating Avatars */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {avatars.map((avatar, i) => {
          const pos = floatingPositions[i];
          return (
            <motion.div
              key={avatar.id}
              className="absolute"
              style={{ ...pos }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative">
                <img
                  src={avatar.src}
                  alt="team member"
                  width={pos.size}
                  height={pos.size}
                  className="rounded-full object-cover border-2 border-white shadow-md"
                  style={{ width: pos.size, height: pos.size }}
                />
                {avatar.badge && (
                  <span
                    className="absolute -bottom-1 -right-1 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow"
                    style={{ backgroundColor: avatar.badgeColor!, fontFamily: "'Inter', sans-serif" }}
                  >
                    {avatar.badge}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Hero Text */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          className="text-[clamp(2.8rem,8vw,6.5rem)] font-black leading-[1.05] tracking-tight text-black"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          The{" "}
          <span
            className="italic px-2 rounded"
            style={{
              fontFamily: "'Playfair Display', serif",
              backgroundColor: "#F0FF57",
              fontStyle: "italic",
            }}
          >
            thinkers
          </span>{" "}
          and
          <br />
          doers were changing
          <br />
          the{" "}
          <span
            className="italic"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#00C853",
            }}
          >
            status
          </span>{" "}
          <span
            className="px-2 rounded"
            style={{ backgroundColor: "#F0FF57" }}
          >
            Quo
          </span>{" "}
          with
        </motion.h1>

        <motion.p
          className="mt-8 text-base text-black/60 max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We are a team of strategists, communicators, researchers. Together,
          we believe that progress only happens when you refuse to play things safe.
        </motion.p>

        <motion.button
          className="mt-8 px-8 py-3.5 bg-black text-white rounded-full text-base font-semibold hover:bg-black/80 transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Explore Our Works
        </motion.button>
      </div>

      {/* Mobile avatar row */}
      <div className="lg:hidden mt-10 flex justify-center gap-3 px-6 flex-wrap">
        {avatars.slice(0, 5).map((avatar) => (
          <img
            key={avatar.id}
            src={avatar.src}
            alt="team member"
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
          />
        ))}
      </div>
    </section>
  );
}
