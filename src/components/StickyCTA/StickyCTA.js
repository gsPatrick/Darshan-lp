// /components/StickyCTA/StickyCTA.js
'use client';

import styles from './StickyCTA.module.css';
import { motion } from 'framer-motion';

export default function StickyCTA() {
  return (
    <motion.div 
      className={styles.stickyWrapper}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
    >
      <div className={styles.contentContainer}>
        <div className={styles.coverWrapper}>
          {/* USANDO <img> PADRÃO PARA MÁXIMA COMPATIBILIDADE */}
          <img
            src="/capa-livro.png" // Caminho para a imagem da capa
            alt="Capa do Livro Filho sem Pai"
            className={styles.bookCover}
          />
        </div>
        <div className={styles.textWrapper}>
          <span className={styles.ctaTitle}>Filho sem Pai</span>
          <span className={styles.ctaSubtitle}>Acesso Imediato</span>
        </div>
        <a href="#produtos" className={styles.ctaButton}>
          Garantir Agora
        </a>
      </div>
    </motion.div>
  );
}