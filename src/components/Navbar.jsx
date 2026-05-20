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
      {/* ── Main nav bar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'background 0.5s, box-shadow 0.5s',
          ...(scrolled ? {
            background: 'rgba(2,4,8,0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
          } : {
            background: 'transparent',
          }),
        }}
      >
        {/* navbar-inner: layout controlled 100% by CSS */}
        <div className="navbar-inner">

          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="navbar-logo">
            <div style={{
              width: 32, height: 32, borderRadius: 8, flexShrink: 0,
              background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0,212,255,0.4)',
            }}>
              <Sparkles size={16} color="#fff" />
            </div>
            <span className="section-title gradient-text" style={{ fontSize: '1rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
              AI Creative
            </span>
          </button>

          {/* Desktop nav links — hidden on mobile via CSS */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: 8,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  background: active === link.href ? 'rgba(0,212,255,0.1)' : 'transparent',
                  color: active === link.href ? '#00d4ff' : '#94a3b8',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { if (active !== link.href) e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { if (active !== link.href) e.currentTarget.style.color = '#94a3b8'; }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="navbar-right">
            {/* CTA button — hidden on mobile via CSS */}
            <button
              onClick={() => scrollTo('#booking')}
              className="navbar-cta btn-neon"
              style={{ alignItems: 'center', gap: 8, padding: '0.5rem 1rem', fontSize: '0.875rem', borderRadius: 12, whiteSpace: 'nowrap' }}
            >
              <Sparkles size={13} />
              Đặt Hàng
            </button>

            {/* Hamburger — hidden on desktop via CSS */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="navbar-hamburger glass"
              style={{
                width: 36, height: 36, borderRadius: 12,
                alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                cursor: 'pointer', flexShrink: 0,
              }}
            >
              {mobileOpen ? <X size={18} color="#fff" /> : <Menu size={18} color="#fff" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer — max-height CSS transition, no Framer ── */}
      <div className={`navbar-drawer glass${mobileOpen ? ' navbar-drawer--open' : ''}`}>
        <div style={{ padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                width: '100%', textAlign: 'left',
                padding: '0.75rem 1rem', borderRadius: 12,
                fontSize: '0.875rem', fontWeight: 500,
                background: active === link.href ? 'rgba(0,212,255,0.1)' : 'transparent',
                color: active === link.href ? '#00d4ff' : '#cbd5e1',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#booking')}
            className="btn-neon"
            style={{
              marginTop: 4, width: '100%', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              gap: 8, padding: '0.75rem', fontSize: '0.875rem',
              borderRadius: 12,
            }}
          >
            <Sparkles size={14} />
            Đặt Hàng Ngay
          </button>
        </div>
      </div>
    </>
  );
}
