'use client';

import { motion } from 'framer-motion';
import styles from './OQueVoceRecebe.module.css';

// Ícones minimalistas e modernos
const EbookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const AudioIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12" y2="8.01"></line>
  </svg>
);

// Dados dos entregáveis
const deliverables = [
  {
    icon: <EbookIcon />,
    tag: "LIVRO DIGITAL",
    title: "O Manuscrito da Coroa",
    description: "O mapa completo para romper a programação da ausência, ativar sua identidade e assumir o trono da sua história. Acesso imediato em PDF e EPUB."
  },
  {
    icon: <AudioIcon />,
    tag: "RITO DE ATIVAÇÃO",
    title: "Áudio 'Do Silêncio à Coroa'",
    description: "Uma jornada sonora guiada de 7 minutos. A ferramenta diária para ancorar sua nova identidade de poder e despertar o líder interior."
  }
];

export default function OQueVoceRecebe() {
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
    <section className={styles.sectionWrapper}>
      <div className={styles.backgroundEffect}></div>
      
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className={styles.titleSection} variants={itemVariants}>
          <h2 className={styles.title}>O Arsenal da Sua Transformação</h2>
          <p className={styles.subtitle}>
            Acesso imediato a duas ferramentas precisas, desenhadas para gerar resultados.
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {deliverables.map((item, index) => (
            <motion.div className={styles.itemCard} key={index} variants={itemVariants}>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.textWrapper}>
                  <span className={styles.itemTag}>{item.tag}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              </div>
              <div className={styles.cardBorder}></div>
              <div className={styles.cardGlow}></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}