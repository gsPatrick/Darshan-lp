'use client';

import { motion } from 'framer-motion';
import styles from './OfertaEspecial.module.css';

// Ícone de verificação que usaremos na lista de benefícios
const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.checkIcon}>
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
    </svg>
);

export default function OfertaEspecial({
  tag,
  titulo,
  subtitulo,
  videoUrl,
  beneficios,
  textoCtaPrincipal,
  textoCtaRecusar,
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Curva de easing cinematográfica
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <main className={styles.pageWrapper}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.tag} variants={itemVariants}>{tag}</motion.div>
        
        <motion.h1 className={styles.titulo} variants={itemVariants}>{titulo}</motion.h1>
        
        <motion.p className={styles.subtitulo} variants={itemVariants}>{subtitulo}</motion.p>

        <motion.div className={styles.videoContainer} variants={itemVariants}>
          <div className={styles.videoPlaceholder}>
            <div className={styles.playIconWrapper}>
                <div className={styles.playIcon}></div>
            </div>
            <span>Clique para assistir à sua oportunidade</span>
          </div>
        </motion.div>
        
        <motion.div className={styles.beneficiosWrapper} variants={itemVariants}>
          <h2 className={styles.beneficiosTitle}>O que você vai destravar imediatamente:</h2>
          <ul className={styles.beneficiosList}>
            {beneficios.map((item, index) => (
              <li key={index}>
                <CheckIcon/>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className={styles.ctaContainer} variants={itemVariants}>
          <motion.button 
            className={`${styles.ctaPrincipal} cta-button`}
            whileHover={{ scale: 1.05, y: -5, transition: { type: 'spring', stiffness: 400 } }}
            whileTap={{ scale: 0.95 }}
          >
            {textoCtaPrincipal}
          </motion.button>
          <a href="#" className={styles.ctaRecusar}>
            {textoCtaRecusar}
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}