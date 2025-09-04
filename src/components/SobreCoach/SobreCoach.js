'use client';

import { motion } from 'framer-motion';
import styles from './SobreCoach.module.css';
import Image from 'next/image'; // Usaremos o componente Image do Next.js para otimização

export default function SobreCoach() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  return (
    <motion.section 
      id="sobre" 
      className={styles.sobreSection}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Substitua pela imagem real do Coach Darshan */}
    <Image
  src="/darshan.png"
  alt="Coach Darshan Monteiro"
  width={400}
  height={500}
  className={styles.coachImage}
/>
        </motion.div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>O Mentor por Trás da Coroa</h2>
          <p className={styles.bio}>
            Darshan Monteiro é autor e fundador do movimento Filhos do Rei (FDR). Sua missão: ajudar uma geração a romper a programação da ausência e reconstruir identidade, presença e legado.
          </p>
          <div className={styles.badge}>
            Fundador do Movimento FDR
          </div>
        </div>
      </div>
    </motion.section>
  );
}