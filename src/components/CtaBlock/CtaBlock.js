'use client';

import { motion } from 'framer-motion';
import styles from './CtaBlock.module.css';

// Ícones minimalistas para as garantias
const BoltIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
  </svg>
);
const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);
const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const features = [
  { icon: <BoltIcon />, title: "Transformação Imediata", text: "Acesso instantâneo ao material que inicia sua mudança no momento da compra." },
  { icon: <StarIcon />, title: "Conteúdo Exclusivo", text: "Uma metodologia única e comprovada que você não encontrará em nenhum outro lugar." },
  { icon: <ShieldIcon />, title: "Garantia de 7 Dias", text: "Sua decisão é 100% livre de risco. Sua satisfação é a nossa prioridade." },
];

export default function CtaBlock() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.backgroundEffect}></div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className={styles.ctaCard} variants={itemVariants}>
          <div className={styles.cardContent}>
            
            <h2 className={styles.title}>Sua Coroação Começa Agora</h2>
            <p className={styles.description}>
              Chega de esperar. O trono da sua história está vago e apenas você pode ocupá-lo.
              Clique no botão abaixo para garantir seu acesso imediato e iniciar a jornada.
            </p>

            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <div className={styles.featureText}>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.a 
              href="#produtos" 
              className={styles.ctaButton}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className={styles.buttonShine}></div>
              <span>GARANTIR MEU ACESSO AGORA</span>
            </motion.a>
            
          </div>
          <div className={styles.cardBorder}></div>
          <div className={styles.cardGlow}></div>
        </motion.div>
      </motion.div>
    </section>
  );
}