// /components/Header/Header.js
'use client';

import { motion } from 'framer-motion';
import styles from './Header.module.css';

const navLinks = [
  { title: 'Início', href: '#inicio' },
  { title: 'O Livro', href: '#produtos' },
  { title: 'O Autor', href: '#sobre' },
  { title: 'Depoimentos', href: '#depoimentos' },
];

export default function Header() {
  const headerVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
    },
  };

  return (
    <motion.header
      className={styles.header}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo}>DARSHAN</a>
        
        <nav className={styles.navDesktop}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href} className={styles.navLink}>
                  <span>{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a 
          href="#produtos"
          className={styles.ctaButton}
        >
          Garantir Acesso
        </a>
      </div>
    </motion.header>
  );
}