import { motion } from 'framer-motion';
import { Sparkles, Play, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToApps = () =>
    document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToBooking = () =>
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero-section relative overflow-hidden grid-pattern">

      {/* Ambient orbs */}
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(48,128,255,0.10)', top: -150, left: -150 }} />
      <div className="orb" style={{ width: 350, height: 350, background: 'rgba(168,85,247,0.10)', bottom: -80, right: -80 }} />

      {/* Background image */}
      <div className="hero-bg" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop&auto=format')",
      }} />
      <div className="hero-bg-overlay" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{ animation: 'scanline 8s linear infinite' }} />
      </div>

      {/* ── Content ── */}
      <div className="hero-content">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="hero-badge glass border-neon"
        >
          <Sparkles size={13} color="#00d4ff" />
          <span className="hero-badge__text">Nền tảng AI sáng tạo nội dung #1 Việt Nam</span>
          <Sparkles size={13} color="#a855f7" />
        </motion.div>

        {/* Title — ONLY hero-title class, no Tailwind size/margin classes */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title section-title"
        >
          <span className="gradient-text">AI Content</span>
          <br />
          <span style={{ color: '#fff' }}>Creation</span>
          <br />
          <span className="gradient-text neon-text">Ecosystem</span>
        </motion.h1>

        {/* Description — ONLY hero-desc class, no Tailwind size/margin classes */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-desc"
        >
          Tạo <span style={{ color: '#00d4ff', fontWeight: 600 }}>video cinematic</span>,{' '}
          <span style={{ color: '#a855f7', fontWeight: 600 }}>prompt chuyên nghiệp</span>,{' '}
          <span style={{ color: '#ec4899', fontWeight: 600 }}>nội dung SEO</span> và{' '}
          <span style={{ color: '#00d4ff', fontWeight: 600 }}>hình ảnh AI</span>{' '}
          — tất cả trong một hệ sinh thái.
        </motion.p>

        {/* CTA — ONLY hero-cta-group / hero-btn, no Tailwind layout classes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-cta-group"
        >
          <button className="hero-btn btn-neon" onClick={scrollToApps}>
            <Play size={17} />
            Khám Phá Ứng Dụng
          </button>
          <button className="hero-btn hero-btn--outline glass border-neon" onClick={scrollToBooking}>
            <Sparkles size={17} color="#00d4ff" />
            Đặt Hàng Ngay
          </button>
        </motion.div>

        {/* Stats — ONLY hero-stats, no Tailwind grid/gap classes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-stats"
        >
          {[
            { value: '10K+', label: 'Khách hàng' },
            { value: '50K+', label: 'Nội dung đã tạo' },
            { value: '6',    label: 'Ứng dụng AI' },
            { value: '99%',  label: 'Hài lòng' },
          ].map((stat, i) => (
            <div key={i} className="hero-stat glass">
              <div className="hero-stat__value section-title gradient-text">{stat.value}</div>
              <div className="hero-stat__label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="hero-scroll-indicator"
        onClick={scrollToApps}
      >
        <span className="hero-scroll-indicator__text">Cuộn xuống</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} color="#00d4ff" />
        </motion.div>
      </motion.div>
    </section>
  );
}
