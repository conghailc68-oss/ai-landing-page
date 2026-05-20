import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, ChevronRight, Sparkles } from 'lucide-react';

function FacebookIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Ứng dụng AI', href: '#apps' },
  { label: 'Tính năng', href: '#features' },
  { label: 'Showcase', href: '#gallery' },
  { label: 'Đặt hàng', href: '#booking' },
];

export default function Footer() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative pt-14 sm:pt-20 pb-8 px-4 sm:px-6 overflow-hidden border-t border-white/5">
      <div className="orb w-[350px] h-[180px] bg-purple-500/6 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/*
          Grid layout:
          mobile  → 1 col (stacked)
          sm      → 2 col
          lg      → 4 col
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shrink-0">
                <Sparkles size={16} className="text-white" />
              </div>
              <span className="section-title text-lg font-bold gradient-text">AI Creative</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              Hệ sinh thái AI sáng tạo nội dung hàng đầu Việt Nam – video, ảnh, prompt và SEO trong một nền tảng.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="glass w-10 h-10 rounded-xl flex items-center justify-center border border-white/8 hover:border-blue-400/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group"
              >
                <FacebookIcon size={16} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                aria-label="Zalo"
                className="glass w-10 h-10 rounded-xl flex items-center justify-center border border-white/8 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300 group"
              >
                <MessageCircle size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-4 sm:mb-5 text-sm tracking-wider uppercase">
              Điều Hướng
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 group"
                  >
                    <ChevronRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-cyan-400 shrink-0"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-4 sm:mb-5 text-sm tracking-wider uppercase">
              Liên Hệ
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">68 Hàng Bông, Hoàn Kiếm, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-cyan-400 shrink-0" />
                <a href="tel:+84912345678" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                  0912 345 678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FacebookIcon size={15} className="text-blue-400 shrink-0" />
                <a href="#" className="text-slate-400 text-sm hover:text-blue-400 transition-colors break-all">
                  facebook.com/aicreative
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={15} className="text-cyan-400 shrink-0" />
                <a href="#" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                  Zalo: 0912 345 678
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Business hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-white mb-4 sm:mb-5 text-sm tracking-wider uppercase">
              Giờ Làm Việc
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock size={15} className="text-purple-400 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Thứ 2 – Thứ 6</p>
                  <p className="text-slate-400 text-xs">08:00 – 22:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={15} className="text-purple-400 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Thứ 7 – Chủ nhật</p>
                  <p className="text-slate-400 text-xs">09:00 – 20:00</p>
                </div>
              </div>
              <div className="glass rounded-xl p-3 border border-green-400/20 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  <span className="text-green-400 text-xs font-medium">Đang hoạt động</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 sm:mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-slate-500 text-xs">
            © 2026 AI Creative Tools. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-slate-600 text-xs">
            Designed by <span className="text-slate-400 font-medium">Hai Cong</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
