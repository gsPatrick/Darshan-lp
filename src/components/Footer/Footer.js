// /components/Footer/Footer.js
'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';

// Ícones para redes sociais e para o crédito de dev
const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const YouTubeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);
const HeartIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
);

export default function Footer() {
  return (
    <motion.footer
      id="contato"
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Sua Jornada Começa Agora.</h2>
          <p className={styles.ctaSubtitle}>Clique no botão abaixo para garantir seu acesso e iniciar a transformação.</p>
          <a href="#produtos" className={`${styles.ctaButton} cta-button`}>
            GARANTIR MEU EXEMPLAR
          </a>
        </div>
        
        <hr className={styles.divider} />

        <div className={styles.mainContent}>
            <div className={styles.brandColumn}>
                <h3 className={styles.logo}>DARSHAN</h3>
                <p className={styles.tagline}>Assuma o trono da sua história.</p>
            </div>
            <div className={styles.linksColumn}>
                <h4>Navegação</h4>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#produtos">O Livro</a></li>
                    <li><a href="#sobre">O Autor</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                </ul>
            </div>
            <div className={styles.socialColumn}>
                <h4>Siga o Movimento</h4>
                <div className={styles.socialIcons}>
                    <a href="#" aria-label="Instagram"><InstagramIcon /></a>
                    <a href="#" aria-label="YouTube"><YouTubeIcon /></a>
                </div>
            </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.legalContainer}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Darshan Monteiro. Todos os direitos reservados.
          </p>
          {/* SEU CRÉDITO DE DESENVOLVEDOR */}
          <p className={styles.developerCredit}>
            Desenvolvido com <HeartIcon /> por 
            <a href="https://codebypatrick.dev/" target="_blank" rel="noopener noreferrer">
              Patrick.Developer
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}