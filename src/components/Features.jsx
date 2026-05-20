import { motion } from 'framer-motion';
import { Zap, Star, Brain, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Xử Lý Nhanh',
    description: 'Kết quả trong vài giây nhờ hạ tầng AI tốc độ cao, không chờ đợi.',
    color: 'from-yellow-400 to-orange-500',
    glow: 'rgba(251,191,36,0.3)',
  },
  {
    icon: Star,
    title: 'Chất Lượng Cinematic',
    description: 'Đầu ra sắc nét, chuyên nghiệp – chuẩn điện ảnh, phù hợp mọi nền tảng.',
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(0,212,255,0.3)',
  },
  {
    icon: Brain,
    title: 'AI Tiên Tiến',
    description: 'Tích hợp các mô hình AI mới nhất – GPT-4, Midjourney, Stable Diffusion.',
    color: 'from-purple-400 to-pink-500',
    glow: 'rgba(168,85,247,0.3)',
  },
  {
    icon: Smartphone,
    title: 'Tối Ưu Mobile',
    description: 'Hoạt động mượt mà trên mọi thiết bị – điện thoại, máy tính bảng, PC.',
    color: 'from-green-400 to-emerald-500',
    glow: 'rgba(52,211,153,0.3)',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      <div className="orb w-[500px] h-[500px] bg-blue-500/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass border-neon rounded-full px-4 py-1.5 mb-6">
            <Star size={14} className="text-purple-400" />
            <span className="text-xs text-purple-300 tracking-widest uppercase font-medium">
              Tại Sao Chọn Chúng Tôi
            </span>
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-black text-white mb-4">
            Vượt Trội Hơn{' '}
            <span className="gradient-text">Mọi Giới Hạn</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Công nghệ AI tiên tiến kết hợp với thiết kế tối giản – mang lại trải nghiệm sáng tạo đỉnh cao
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all duration-500 text-center"
                style={{
                  '--glow': feature.glow,
                }}
              >
                {/* Icon */}
                <div className="relative inline-flex mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5`}
                  >
                    <div className="w-full h-full rounded-2xl bg-[#020408] flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                  />
                </div>

                <h3 className="font-bold text-white text-lg mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`mt-5 h-[1px] bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
