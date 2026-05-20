import { motion } from 'framer-motion';
import { Grid3X3 } from 'lucide-react';
import AppCard from './AppCard';
import apps from '../data/apps.json';

export default function AppsSection() {
  return (
    <section id="apps" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="orb w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-purple-500/8 top-0 right-0" />
      <div className="orb w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-cyan-500/6 bottom-0 left-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass border-neon rounded-full px-4 py-1.5 mb-5">
            <Grid3X3 size={13} className="text-cyan-400" />
            <span className="text-[10px] sm:text-xs text-cyan-300 tracking-widest uppercase font-medium">
              Ứng Dụng AI
            </span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">
            Bộ Công Cụ{' '}
            <span className="gradient-text">AI Sáng Tạo</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            6 ứng dụng AI mạnh mẽ, được thiết kế để tối ưu hóa quy trình sáng tạo nội dung của bạn
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
