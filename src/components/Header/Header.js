// /components/Header/Header.js

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

// Para não repetir os links, vamos declará-los em um array
const navLinks = [
  { title: 'Início', href: '#inicio' },
  { title: 'Sobre', href: '#sobre' },
  { title: 'Produtos', href: '#produtos' },
  { title: 'Depoimentos', href: '#depoimentos' },
  { title: 'Contato', href: '#contato' },
];

export default function Header() {
  // >>> ADICIONADO: Estado para controlar o menu mobile <<<
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };
  
  // >>> ADICIONADO: Variantes de animação para o menu mobile <<<
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: '0%', transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.1 } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.4, ease: 'easeIn' } },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.header
        className={styles.header}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.logo}>DARSHAN</div>
        
        {/* Navegação para Desktop */}
        <nav className={styles.navDesktop}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href} className={styles.navLink}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão CTA para Desktop */}
        <motion.button
          className={`${styles.ctaButton} cta-button`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Começar Agora
        </motion.button>

        {/* >>> ADICIONADO: Ícone do Menu Hambúrguer para Mobile <<< */}
        <button 
          className={`${styles.mobileMenuIcon} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </motion.header>

      {/* >>> ADICIONADO: Menu Overlay para Mobile com animação <<< */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileNav}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav>
              <ul className={styles.mobileNavList}>
                {navLinks.map((link) => (
                  <motion.li key={link.title} variants={mobileLinkVariants}>
                    <a 
                      href={link.href} 
                      className={styles.mobileNavLink}
                      onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}