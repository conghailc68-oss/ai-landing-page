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

  /* Scrolled style — only visual, no layout */
  const navStyle = scrolled ? {
    background: 'rgba(2,4,8,0.85)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
  } : { background: 'transparent' };

  return (
    <>
      {/* ── Nav bar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="navbar-root"
        style={navStyle}
      >
        {/* .navbar-inner handles all flex layout via CSS */}
        <div className="navbar-inner">

          {/* Logo — .navbar-logo handles display:flex via CSS */}
          <button className="navbar-logo" onClick={() => scrollTo('#hero')}>
            <span className="navbar-logo__icon">
              <Sparkles size={16} color="#fff" />
            </span>
            <span className="navbar-logo__text section-title gradient-text">
              AI Creative
            </span>
          </button>

          {/* Desktop links — .navbar-links: display:flex on desktop, display:none on mobile */}
          <nav className="navbar-links">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className={`navbar-link${active === link.href ? ' navbar-link--active' : ''}`}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right group */}
          <div className="navbar-right">
            {/* .navbar-cta: display:flex on desktop, display:none on mobile */}
            <button className="navbar-cta btn-neon" onClick={() => scrollTo('#booking')}>
              <Sparkles size={13} />
              Đặt Hàng
            </button>

            {/* .navbar-hamburger: display:flex on mobile, display:none on desktop */}
            <button
              className="navbar-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} color="#fff" /> : <Menu size={18} color="#fff" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer — toggled by .navbar-drawer--open ── */}
      <div className={`navbar-drawer${mobileOpen ? ' navbar-drawer--open' : ''}`}>
        <div className="navbar-drawer__inner">
          {navLinks.map((link) => (
            <button
              key={link.href}
              className={`navbar-drawer__link${active === link.href ? ' navbar-drawer__link--active' : ''}`}
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}
          <button className="navbar-drawer__cta btn-neon" onClick={() => scrollTo('#booking')}>
            <Sparkles size={14} />
            Đặt Hàng Ngay
          </button>
        </div>
      </div>
    </>
  );
}
