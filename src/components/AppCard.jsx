import { motion } from 'framer-motion';
import { ShoppingCart, Flame, Zap } from 'lucide-react';

function Badge({ type }) {
  if (type === 'HOT') {
    return (
      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(249,115,22,0.5)]">
        <Flame size={10} />
        HOT
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(0,212,255,0.5)]">
      <Zap size={10} />
      NEW
    </span>
  );
}

export default function AppCard({ app, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,255,0.1),0_20px_60px_rgba(0,0,0,0.5)] cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={app.thumbnail}
          alt={app.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/90 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <Badge type={app.badge} />
        </div>

        {/* Category */}
        <div className="absolute top-3 right-3">
          <span className="glass text-[10px] text-slate-300 px-2 py-0.5 rounded-full border border-white/10">
            {app.category}
          </span>
        </div>

        {/* Glow line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-white text-base mb-2 leading-snug group-hover:text-cyan-300 transition-colors duration-300">
          {app.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {app.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 block">Giá dịch vụ</span>
            <span className="section-title text-xl font-bold gradient-text">{app.price}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-neon flex items-center gap-2 px-4 py-2.5 text-sm rounded-xl"
          >
            <ShoppingCart size={14} />
            Mua Ngay
          </motion.button>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[64px] border-l-transparent border-t-[64px] border-t-cyan-400/10" />
      </div>
    </motion.div>
  );
}
