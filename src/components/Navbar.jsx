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
        className={`navbar-root fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'
        }`}
      >
        <div className="navbar-inner max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="navbar-logo flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.4)]">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="section-title text-base font-bold gradient-text whitespace-nowrap">
              AI Creative
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="navbar-links flex items-center gap-1 flex-1 justify-center">
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

          {/* Right: CTA + hamburger */}
          <div className="navbar-right flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollTo('#booking')}
              className="navbar-cta btn-neon flex items-center gap-2 px-4 py-2 text-sm rounded-xl whitespace-nowrap"
            >
              <Sparkles size={13} />
              Đặt Hàng
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="navbar-hamburger glass w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 shrink-0"
            >
              {mobileOpen ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer — CSS-driven, no Framer height animation */}
      <div
        className={`navbar-drawer fixed top-16 left-0 right-0 z-40 glass border-b border-white/8 ${
          mobileOpen ? 'navbar-drawer--open' : ''
        }`}
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
      </div>
    </>
  );
}
