// /components/Produtos/Produtos.js

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Produtos.module.css';

const accordionData = [
  {
    title: 'Reconheça a Programação.',
    description: 'Entenda a ausência que molda suas escolhas e transforme dor em governo.',
  },
  {
    title: 'Ressignifique a História.',
    description: 'Assuma a disciplina de quem lidera a si mesmo para legar presença aos seus.',
  },
  {
    title: 'Construa seu Legado.',
    description: 'Quando a identidade muda, o mundo externo obedece. Pertença. Lidere. Reine.',
  },
];

export default function Produtos() {
  const [activeIndex, setActiveIndex] = useState(0);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };
  
  const accordionContentVariants = {
    collapsed: { opacity: 0, height: 0, marginTop: 0 },
    open: { 
      opacity: 1, 
      height: 'auto', 
      marginTop: '1rem',
      transition: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] } 
    }
  };

  return (
    <section id="produtos" className={styles.produtosSection}>
      <div className={styles.imageContainer}>
        <motion.div 
          className={styles.frame}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src="/capa-livro.png"
            alt="Capa do Livro Filho sem Pai: Do Silêncio à Coroa"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      <motion.div
        className={styles.contentContainer}
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          {/* >>> NOVO TAG DE DESTAQUE <<< */}
          <span className={styles.tag}>O Portal da Transformação</span>
          <h2 className={styles.mainTitle}>A Jornada da Ferida ao Governo</h2>
          <p className={styles.mainSubtitle}>
            Este não é um livro. É um portal de pertencimento e direção para ativar a identidade que o sistema tentou apagar.
          </p>
        </motion.div>
        
        <motion.div className={styles.divider} variants={itemVariants}></motion.div>
        
        <motion.div className={styles.accordionContainer} variants={itemVariants}>
          {accordionData.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <motion.div
                className={`${styles.accordionHeader} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className={styles.accordionTitle}>{item.title}</span>
                <motion.div 
                  className={styles.accordionIcon}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ^
                </motion.div>
              </motion.div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    variants={accordionContentVariants}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                  >
                    <p className={styles.accordionText}>{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* >>> GRUPO DE BOTÕES DE CTA (HOTMART E AMAZON) <<< */}
        <motion.div className={styles.ctaGroup} variants={itemVariants}>
          <motion.a 
            href="#hotmart" // <-- SUBSTITUA PELO SEU LINK REAL DA HOTMART
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Acesso (Hotmart)
          </motion.a>
          <motion.a 
            href="#amazon" // <-- SUBSTITUA PELO SEU LINK REAL DA AMAZON
            className="secondary-button cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Acesso (Amazon)
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}