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
        {/* A imagem do cliente, que preencherá todo o fundo, vai aqui */}
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
        
        <motion.p className={styles.subtitle} variants={itemVariants}>
          Um livro-movimento para romper a programação da ausência e ativar sua <strong>Identidade de Rei</strong>.
        </motion.p>

        {/* O botão secundário e os bullets foram removidos */}
        <motion.div className={styles.ctaContainer} variants={itemVariants}>
          <button className="cta-button">Garantir Meu Exemplar Agora</button>
        </motion.div>

        <motion.div className={styles.trustBar} variants={itemVariants}>
          <p>Entrega Digital Imediata • Pagamento Seguro • Garantia 7 Dias</p>
        </motion.div>
      </motion.div>
    </section>
  );
}