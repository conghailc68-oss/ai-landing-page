import { motion } from 'framer-motion';
import { Images, Play, Eye } from 'lucide-react';
import { useState } from 'react';

const galleryItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800&h=500&fit=crop&auto=format',
    title: 'AI Cinematic Portrait',
    tag: 'AI Image',
  },
  {
    type: 'video',
    src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop&auto=format',
    title: 'AI Video Production',
    tag: 'AI Video',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800&h=500&fit=crop&q=80',
    title: 'Before / After AI Edit',
    tag: 'Before/After',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop&auto=format',
    title: 'AI Thumbnail Design',
    tag: 'Thumbnail',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop&auto=format',
    title: 'AI Prompt Showcase',
    tag: 'Prompt',
  },
  {
    type: 'video',
    src: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=800&h=500&fit=crop&auto=format',
    title: 'Cinematic AI Reel',
    tag: 'AI Video',
  },
];

export default function Gallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="gallery" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="orb w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-cyan-500/6 top-0 left-0" />
      <div className="orb w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-purple-500/6 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass border-neon rounded-full px-4 py-1.5 mb-5">
            <Images size={13} className="text-cyan-400" />
            <span className="text-[10px] sm:text-xs text-cyan-300 tracking-widest uppercase font-medium">
              Showcase
            </span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">
            Tác Phẩm{' '}
            <span className="gradient-text">AI Nổi Bật</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Những sản phẩm thực tế được tạo ra bởi hệ sinh thái AI của chúng tôi
          </p>
        </motion.div>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.35) }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-cyan-400/30 transition-all duration-500"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/90 via-[#020408]/20 to-transparent" />

                {/* Hover overlay */}
                <motion.div
                  animate={{ opacity: hovered === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-cyan-950/60 to-purple-950/40 flex items-center justify-center"
                >
                  <div className="glass rounded-full p-3 sm:p-4 border border-cyan-400/30">
                    {item.type === 'video'
                      ? <Play size={20} className="text-cyan-400" />
                      : <Eye size={20} className="text-cyan-400" />}
                  </div>
                </motion.div>

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    item.type === 'video'
                      ? 'bg-purple-500/80 text-white border border-purple-400/30'
                      : 'bg-cyan-500/80 text-white border border-cyan-400/30'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="text-white font-semibold text-xs sm:text-sm">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
