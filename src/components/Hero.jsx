import { motion } from 'framer-motion';
import { Sparkles, Play, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToApps = () =>
    document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToBooking = () =>
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern pt-16"
    >
      {/* Ambient orbs — clipped so they never cause horizontal scroll */}
      <div className="orb w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-blue-500/10 top-[-150px] left-[-150px]" />
      <div className="orb w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-purple-500/10 bottom-[-80px] right-[-80px]" />

      {/* Background image */}
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
      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto py-12">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass border-neon rounded-full px-4 py-2 mb-6 sm:mb-8 max-w-full"
        >
          <Sparkles size={13} className="text-cyan-400 shrink-0" />
          <span className="text-[10px] sm:text-xs font-medium text-cyan-300 tracking-widest uppercase leading-tight">
            Nền tảng AI sáng tạo nội dung #1 Việt Nam
          </span>
          <Sparkles size={13} className="text-purple-400 shrink-0" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-5 sm:mb-6 leading-tight"
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
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Tạo{' '}
          <span className="text-cyan-400 font-semibold">video cinematic</span>,{' '}
          <span className="text-purple-400 font-semibold">prompt chuyên nghiệp</span>,{' '}
          <span className="text-pink-400 font-semibold">nội dung SEO</span> và{' '}
          <span className="text-cyan-400 font-semibold">hình ảnh AI</span>{' '}
          — tất cả trong một hệ sinh thái.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16 md:mb-20"
        >
          <button
            onClick={scrollToApps}
            className="btn-neon inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-xl"
          >
            <Play size={17} />
            Khám Phá Ứng Dụng
          </button>
          <button
            onClick={scrollToBooking}
            className="glass border-neon inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-xl text-white hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
          >
            <Sparkles size={17} className="text-cyan-400" />
            Đặt Hàng Ngay
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-lg sm:max-w-none mx-auto"
        >
          {[
            { value: '10K+', label: 'Khách hàng' },
            { value: '50K+', label: 'Nội dung đã tạo' },
            { value: '6',    label: 'Ứng dụng AI' },
            { value: '99%',  label: 'Hài lòng' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass rounded-xl py-3 px-2 border border-white/5 text-center"
            >
              <div className="section-title text-xl sm:text-2xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-1 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={scrollToApps}
      >
        <span className="text-[10px] text-slate-500 tracking-widest uppercase">Cuộn xuống</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} className="text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
