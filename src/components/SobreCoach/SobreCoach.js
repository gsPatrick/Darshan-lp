// /components/SobreCoach/SobreCoach.js

'use client';

import { motion } from 'framer-motion';
import styles from './SobreCoach.module.css';
import Image from 'next/image';

const CrownIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
  </svg>
);

export default function SobreCoach() {
  const textContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="sobre" className={styles.sobreSection}>
      {/* Container do Texto (Lado Esquerdo) */}
      <motion.div 
        className={styles.textContainer}
        variants={textContentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          O Mentor por Trás da Coroa
        </motion.h2>
        <motion.p className={styles.bio} variants={itemVariants}>
          Darshan Monteiro é autor e fundador do movimento Filhos do Rei (FDR). Sua missão: ajudar uma geração a <strong>romper a programação da ausência</strong> e reconstruir identidade, presença e legado.
        </motion.p>
        <motion.div className={styles.badge} variants={itemVariants}>
          <CrownIcon />
          <span>Fundador do Movimento FDR</span>
        </motion.div>
      </motion.div>

      {/* Container da Imagem (Lado Direito) */}
      <div className={styles.imageContainer}>
        <div className={styles.imageOverlay} />
        <Image
          src="/sobre.png"
          alt="Coach Darshan Monteiro"
          fill // Usa 'fill' para cobrir o container
          style={{ objectFit: 'cover', objectPosition: 'center top' }} // Garante que a imagem cubra o espaço
          className={styles.coachImage}
          sizes="50vw"
        />
      </div>
    </section>
  );
}