'use client';

import { motion } from 'framer-motion';
import styles from './UpsellDownsell.module.css';

// Ícone de verificação para a lista de benefícios
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.checkIcon}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
  </svg>
);

// Componente da Coroa Animada
const AnimatedCrown = () => {
  const crownVariants = { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 2.5, ease: 'easeInOut' } } };
  const particleVariants = (i) => ({ hidden: { opacity: 0, scale: 0 }, visible: { opacity: [0, 1, 0], scale: [0, 1.2, 0], transition: { duration: 1.5, delay: 1 + i * 0.1, repeat: Infinity, repeatDelay: 3 } } });

  return (
    <motion.svg className={styles.crownSvg} viewBox="0 0 200 200" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
      <motion.path d="M40 150 L50 70 L80 100 L100 50 L120 100 L150 70 L160 150 H40 Z" fill="none" stroke="var(--highlight-gold)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" variants={crownVariants} />
      <motion.path d="M40 150 L50 70 L80 100 L100 50 L120 100 L150 70 L160 150 H40 Z" fill="none" stroke="url(#gold-gradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" variants={crownVariants} />
      {[...Array(5)].map((_, i) => (<motion.circle key={i} cx={50 + i * 25} cy={70 - (i % 2) * 20} r="3" fill="var(--highlight-gold)" variants={particleVariants(i)} />))}
      {[...Array(4)].map((_, i) => (<motion.circle key={i} cx={150 - i * 25} cy={70 + (i % 2) * 20} r="3" fill="var(--highlight-gold)" variants={particleVariants(i + 5)} />))}
      <defs>
        <filter id="glow"><feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#f9cc7d" /><stop offset="100%" stopColor="#be9151" /></linearGradient>
      </defs>
    </motion.svg>
  );
};

export default function UpsellDownsell() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } };
  const itemVariants = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } } };
  const visualVariants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } } };

  return (
    <section id="oferta" className={styles.upsellSection}>
      <div className={styles.container}>
        {/* MUDANÇA: Caixa visual agora tem animação de hover */}
        <motion.div
          className={styles.visualContainer}
          variants={visualVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
        >
          <div className={styles.glow}></div>
          <div className={styles.productBox}>
            <AnimatedCrown />
            <span className={styles.boxText}>Masterclass Exclusiva</span>
          </div>
        </motion.div>

        <motion.div className={styles.contentContainer} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.span className={styles.tag} variants={itemVariants}>OPORTUNIDADE ÚNICA</motion.span>
          
          {/* MUDANÇA: Título com animação de hover para um brilho dourado */}
          <motion.h2
            className={styles.title}
            variants={itemVariants}
            whileHover={{ textShadow: '0 0 15px var(--highlight-gold)', transition: { duration: 0.3 } }}
          >
            Da Leitura à Liderança.
          </motion.h2>

          <motion.p className={styles.subtitle} variants={itemVariants}>Você garantiu o mapa. Agora, eu te convido a caminhar ao meu lado e acelerar sua transformação de forma prática e mentorada.</motion.p>
          
          <motion.ul className={styles.offerList} variants={itemVariants}>
            {/* MUDANÇA: Itens da lista agora são <motion.li> com animação de hover */}
            <motion.li whileHover={{ x: 10, transition: { type: 'spring', stiffness: 400 } }}><CheckIcon /><span>Aprofunde-se nos arquétipos da <strong>Dor, Transição e Paraíso.</strong></span></motion.li>
            <motion.li whileHover={{ x: 10, transition: { type: 'spring', stiffness: 400 } }}><CheckIcon /><span>Domine a técnica da <strong>"Respiração do Governante".</strong></span></motion.li>
            <motion.li whileHover={{ x: 10, transition: { type: 'spring', stiffness: 400 } }}><CheckIcon /><span>Construa seu <strong>Plano de Legado</strong> prático e acionável.</span></motion.li>
            <motion.li whileHover={{ x: 10, transition: { type: 'spring', stiffness: 400 } }}><CheckIcon /><span>Participe de uma sessão de <strong>P&R ao vivo</strong> com Darshan.</span></motion.li>
          </motion.ul>
          
          {/* MUDANÇA: Botão com animação de hover mais pronunciada */}
          <motion.button
            className={`${styles.ctaButton} cta-button`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5, transition: { type: 'spring', stiffness: 400 } }}
            whileTap={{ scale: 0.95 }}
          >
            SIM, QUERO ACELERAR MINHA COROAÇÃO
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}