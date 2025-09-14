'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={styles.background}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.overlay}></div>
      </div>
      
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.title} variants={itemVariants}>
          Filho sem Pai: Do Silêncio à Coroa
        </motion.h1>
        
        {/* --- INÍCIO DA MUDANÇA (SUBTÍTULO) --- */}
        <motion.p className={styles.subtitle} variants={itemVariants}>
          Um livro-movimento para romper a programação da ausência, ativar sua identidade e assumir o trono da sua história.
        </motion.p>
        {/* --- FIM DA MUDANÇA --- */}

        <motion.div className={styles.ctaContainer} variants={itemVariants}>
          {/* --- INÍCIO DA MUDANÇA (TEXTO DO BOTÃO) --- */}
          <button className="cta-button">GARANTIR MEU EXEMPLAR</button>
          {/* --- FIM DA MUDANÇA --- */}
        </motion.div>

        <motion.div className={styles.trustBar} variants={itemVariants}>
          <p>Entrega Digital Imediata • Pagamento Seguro • Garantia 7 Dias</p>
        </motion.div>
      </motion.div>
    </section>
  );
}