'use client';

import { motion } from 'framer-motion';
import styles from './UpsellDownsell.module.css';

// Ícones minimalistas para as ofertas futuras
const MasterclassIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7.5 4.5 6l-2 3L4 11l-3 1 3 1-1.5 1.5 2 3L7 16.5l2.5 3.5h5l2.5-3.5 2.5-1.5-2-3L19.5 9.5l1.5-1.5-3-1-1.5-3z"></path>
    <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
  </svg>
);

const CoachingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c-2 0-4-1-4-4 0-2 2-4 4-4s4 2 4 4c0 3-2 4-4 4z"></path>
    <path d="M20 18c0-4.4-3.6-8-8-8s-8 3.6-8 8"></path>
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const futureOffers = [
  {
    icon: <MasterclassIcon />,
    tag: "PRÓXIMO NÍVEL",
    title: "Masterclass: O Mapa Acelerado",
    description: "Uma imersão de 2 horas para dominar os 7 bloqueios da identidade e receber protocolos práticos para quebrar cada um deles.",
    status: "Desbloqueado após a compra do livro"
  },
  {
    icon: <CoachingIcon />,
    tag: "IMERSÃO TOTAL",
    title: "Sessão de Coroação 1:1",
    description: "Uma sessão estratégica e individual comigo para fechar seu propósito em uma frase e traçar um plano de ação de 30 dias.",
    status: "Acesso exclusivo oferecido futuramente"
  }
];

export default function UpsellDownsell() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="oferta" className={styles.sectionWrapper}>
      <div className={styles.backgroundEffect}></div>
      
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className={styles.titleSection} variants={itemVariants}>
          <h2 className={styles.title}>O Próximo Capítulo da Sua Jornada</h2>
          <p className={styles.subtitle}>
            O livro é a chave. Estas são as portas que ele abre para quem deseja ir além.
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {futureOffers.map((item, index) => (
            <motion.div className={styles.itemCard} key={index} variants={itemVariants}>
              <div className={styles.cardContent}>
                <div className={`${styles.iconWrapper} ${index === 1 ? styles.iconWrapperPurple : ''}`}>{item.icon}</div>
                <div className={styles.textWrapper}>
                  <span className={`${styles.itemTag} ${index === 1 ? styles.itemTagPurple : ''}`}>{item.tag}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
                <div className={styles.statusIndicator}>
                  <LockIcon />
                  <span>{item.status}</span>
                </div>
              </div>
              <div className={styles.cardBorder}></div>
              <div className={`${styles.cardGlow} ${index === 1 ? styles.cardGlowPurple : ''}`}></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div className={styles.reassuranceText} variants={itemVariants}>
          <p>Concentre-se no primeiro passo. O livro é o seu portal.</p>
        </motion.div>

      </motion.div>
    </section>
  );
}