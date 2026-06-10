import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-black tracking-tight text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
          Elementum
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Contact", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-black/70 hover:text-black transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search size={18} className="text-black/70" />
          </button>
          <button className="px-5 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-black/80 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/10 px-6 py-4 flex flex-col gap-4">
          {["Services", "Contact", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-base font-medium text-black/70 hover:text-black transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium w-full">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
