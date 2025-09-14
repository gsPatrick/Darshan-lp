// /components/FAQ/FAQ.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

// Ícone Chevron para um visual mais moderno
const ChevronIcon = ({ isOpen }) => (
    <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
    >
        <polyline points="9 18 15 12 9 6"></polyline>
    </motion.svg>
);

const faqData = [
  {
    question: 'O livro é digital ou físico?',
    answer: 'Nesta página priorizamos o digital na Hotmart (eBook + rito). Se preferir, há a versão física na Amazon (capa comum).',
  },
  {
    question: 'Como recebo o acesso digital?',
    answer: 'Você recebe o acesso por e-mail imediatamente após a confirmação da compra, com um link para nossa área de membros onde pode ler online ou baixar os arquivos.',
  },
  {
    question: 'O audiobook está incluso?',
    answer: 'Não. A versão digital inclui o eBook (PDF/EPUB) e o áudio do Rito Guiado de 7 minutos. A versão física da Amazon possui um QR Code para o áudio do rito.',
  },
  {
    question: 'Qual é a garantia?',
    answer: 'Oferecemos 7 dias de garantia incondicional na versão digital. Se por qualquer motivo você não sentir que a transformação começou, devolvemos seu investimento integralmente.',
  },
  {
    question: 'Posso comprar para presentear?',
    answer: 'Sim. Para a versão digital, basta usar o e-mail da pessoa presenteada no ato da compra. Para a versão física, compre pela Amazon e envie para o endereço desejado.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const answerVariants = {
    collapsed: { opacity: 0, height: 0, marginTop: 0 },
    open: {
      opacity: 1,
      height: 'auto',
      marginTop: '1.5rem',
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.backgroundEffect}></div>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.titleSection} variants={itemVariants}>
          <h2 className={styles.title}>Perguntas Frequentes</h2>
          <p className={styles.subtitle}>Respostas claras para suas últimas dúvidas antes de começar.</p>
        </motion.div>

        <div className={styles.accordionContainer}>
          {faqData.map((item, index) => (
            <motion.div 
                key={index} 
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                variants={itemVariants}
                onClick={() => toggleFAQ(index)}
            >
              <div className={styles.questionHeader}>
                <span className={styles.questionText}>{item.question}</span>
                <div className={styles.iconWrapper}>
                    <ChevronIcon isOpen={activeIndex === index} />
                </div>
              </div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    className={styles.answerWrapper}
                    variants={answerVariants}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    // Impede que o clique na resposta feche o accordion
                    onClick={(e) => e.stopPropagation()} 
                  >
                    <p className={styles.answerText}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className={styles.cardBorder}></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}