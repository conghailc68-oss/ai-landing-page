import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Ứng dụng', href: '#apps' },
  { label: 'Tính năng', href: '#features' },
  { label: 'Showcase', href: '#gallery' },
  { label: 'Đặt hàng', href: '#booking' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] transition-shadow duration-300">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="section-title text-sm sm:text-base font-bold gradient-text whitespace-nowrap">
              AI Creative
            </span>
          </button>

          {/* Desktop links — only visible md+ */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  active === link.href
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">
            {/* CTA — hidden on mobile, visible sm+ but only when md+ hides hamburger */}
            <button
              onClick={() => scrollTo('#booking')}
              className="btn-neon hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl whitespace-nowrap"
            >
              <Sparkles size={13} />
              Đặt Hàng
            </button>

            {/* Hamburger — only on < md */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="md:hidden glass w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 shrink-0"
            >
              {mobileOpen
                ? <X size={18} className="text-white" />
                : <Menu size={18} className="text-white" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-16 left-0 right-0 z-40 overflow-hidden glass border-b border-white/8 md:hidden"
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === link.href
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-1 pb-1">
            <button
              onClick={() => scrollTo('#booking')}
              className="btn-neon w-full flex items-center justify-center gap-2 py-3 text-sm rounded-xl"
            >
              <Sparkles size={14} />
              Đặt Hàng Ngay
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
