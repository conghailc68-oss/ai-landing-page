import { motion } from 'framer-motion';
import { Sparkles, Play, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToApps = () => {
    document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Ambient orbs */}
      <div className="orb w-[600px] h-[600px] bg-blue-500/10 top-[-200px] left-[-200px]" />
      <div className="orb w-[500px] h-[500px] bg-purple-500/10 bottom-[-100px] right-[-100px]" />
      <div className="orb w-[300px] h-[300px] bg-cyan-400/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop&auto=format')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020408]/60 via-transparent to-[#020408]" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{ animation: 'scanline 8s linear infinite' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass border-neon rounded-full px-5 py-2 mb-8"
        >
          <Sparkles size={14} className="text-cyan-400" />
          <span className="text-xs font-medium text-cyan-300 tracking-widest uppercase">
            Nền tảng AI sáng tạo nội dung #1 Việt Nam
          </span>
          <Sparkles size={14} className="text-purple-400" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-title text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          <span className="gradient-text">AI Content</span>
          <br />
          <span className="text-white">Creation</span>
          <br />
          <span className="gradient-text neon-text">Ecosystem</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Tạo{' '}
          <span className="text-cyan-400 font-semibold">video cinematic</span>,{' '}
          <span className="text-purple-400 font-semibold">prompt chuyên nghiệp</span>,{' '}
          <span className="text-pink-400 font-semibold">nội dung SEO</span> và{' '}
          <span className="text-cyan-400 font-semibold">hình ảnh AI</span> — tất cả trong một hệ sinh thái.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToApps}
            className="btn-neon flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl"
          >
            <Play size={18} />
            Khám Phá Ứng Dụng
          </button>
          <button
            onClick={scrollToBooking}
            className="glass border-neon flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl text-white hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
          >
            <Sparkles size={18} className="text-cyan-400" />
            Đặt Hàng Ngay
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { value: '10K+', label: 'Khách hàng' },
            { value: '50K+', label: 'Nội dung đã tạo' },
            { value: '6', label: 'Ứng dụng AI' },
            { value: '99%', label: 'Hài lòng' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="section-title text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1 tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToApps}
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">Cuộn xuống</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
