'use client';

import { motion } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  return (
    <motion.header
      className={styles.header}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.logo}>DARSHAN</div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#inicio" className={styles.navLink}>Início</a></li>
          <li><a href="#sobre" className={styles.navLink}>Sobre</a></li>
          <li><a href="#produtos" className={styles.navLink}>Produtos</a></li>
          <li><a href="#depoimentos" className={styles.navLink}>Depoimentos</a></li>
          <li><a href="#contato" className={styles.navLink}>Contato</a></li>
        </ul>
      </nav>
      <motion.button
        className={`${styles.ctaButton} cta-button`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Começar Agora
      </motion.button>
    </motion.header>
  );
}