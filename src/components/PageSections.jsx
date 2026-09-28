import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ctaClass =
  'bg-white text-primary px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-opacity inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary';

export function PageHeader({ kicker, title, subtitle }) {
  return (
    <section className="pt-32 pb-16 bg-[#080b10] text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {kicker && (
            <p className="base44-eyebrow mb-4">
              {kicker}
            </p>
          )}
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider mb-5">{title}</h1>
          {subtitle && (
            <p className="font-inter text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function ImageHero({ kicker, title, subtitle, image, children }) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-[#080b10]">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {kicker && (
            <p className="base44-eyebrow mb-4">
              {kicker}
            </p>
          )}
          <h1 className="font-display text-5xl md:text-8xl text-white tracking-wider leading-none mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="font-inter text-white/70 text-xl leading-relaxed mb-10 max-w-2xl">{subtitle}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA({ title, body, to = '/contact-us', href, label = 'Get In Touch' }) {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">{title}</h2>
          {body && (
            <p className="font-inter text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">{body}</p>
          )}
          {href ? (
            <a href={href} target="_blank" rel="noreferrer" className={ctaClass}>
              {label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          ) : (
            <Link to={to} className={ctaClass}>
              {label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
