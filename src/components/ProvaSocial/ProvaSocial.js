'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ProvaSocial.module.css';

// Dados dos depoimentos (facilita a manutenção)
const testimonials = [
  {
    name: 'João S.',
    quote: 'Eu lia sobre ausência, mas ainda era refém dela. Este livro virou a chave da minha identidade. Minha voz voltou.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop', // Placeholder
  },
  {
    name: 'Marina A.',
    quote: 'Parei de repetir padrões e comecei a construir. A coroa virou prática diária, não só uma ideia.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop', // Placeholder
  },
  {
    name: 'Rafael D.',
    quote: 'Pertencimento real. É isso que eu sinto agora. Finalmente encontrei meu lugar e minha força.',
    image: 'https://images.unsplash.com/photo-1627541718143-1adc1b582e62?q=80&w=1887&auto=format&fit=crop', // Placeholder
  },
];

export default function ProvaSocial() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="depoimentos" className={styles.socialProofSection}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          Histórias de Quem Rompeu o Ciclo.
        </motion.h2>
        <motion.div className={styles.trustBadge} variants={itemVariants}>
          <span className={styles.star}>★</span> Mais de 500 Vidas Transformadas <span className={styles.star}>★</span>
        </motion.div>

        <motion.div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className={styles.testimonialCard}
              variants={itemVariants}
            >
              <div className={styles.cardHeader}>
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  width={60}
                  height={60}
                  className={styles.avatar}
                />
                <span className={styles.name}>{testimonial.name}</span>
              </div>
              <p className={styles.quote}>“{testimonial.quote}”</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}