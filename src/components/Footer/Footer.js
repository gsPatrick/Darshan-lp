'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';

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
        {/* 1. CTA Secundário */}
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Sua Jornada Começa Agora.</h2>
          <p className={styles.ctaSubtitle}>
            A ausência não te define. Ela te prepara para a sua coroação.
          </p>
          <button className={`${styles.ctaButton} secondary-button`}>
            Junte-se ao Movimento
          </button>
        </div>

        {/* 2. Navegação Principal e Redes Sociais */}
        <div className={styles.mainContent}>
          <div className={styles.logo}>DARSHAN</div>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}>Instagram</a>
            <a href="#" className={styles.socialLink}>YouTube</a>
            <a href="#" className={styles.socialLink}>Facebook</a>
          </div>
        </div>

        {/* 3. Informações Legais */}
        <div className={styles.legal}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Darshan Monteiro. Todos os direitos reservados.
          </p>
          <div className={styles.legalLinks}>
            <a href="#">Política de Privacidade</a>
            <span>|</span>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}