// /components/Obrigado/Obrigado.js
'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Obrigado.module.css';

// Ícones para os Passos
const EmailIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> );
const BookIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> );
const CommunityIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> );

const videoUrl = '/obrigado_video.mp4'; // Substituir pelo vídeo de boas-vindas real

export default function Obrigado() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.backgroundEffect}></div>
      <motion.div 
        className={styles.confirmationCard}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className={styles.title}>Compra Confirmada.</h1>
        <p className={styles.subtitle}>Sua jornada começa agora. Assista à minha mensagem de boas-vindas e siga os passos abaixo.</p>
        
        <div className={styles.videoWrapper}>
          {!isVideoPlaying && (
            <div className={styles.videoOverlay} onClick={handlePlayVideo}>
              <div className={styles.playIconWrapper}><div className={styles.playIcon}></div></div>
              <span>Ver Mensagem de Boas-Vindas</span>
            </div>
          )}
          <video ref={videoRef} src={videoUrl} className={styles.videoPlayer} playsInline controls={isVideoPlaying} />
        </div>

        <div className={styles.stepsContainer}>
            {/* PASSO 1 */}
            <div className={styles.stepBlock}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}><EmailIcon/></div>
                <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Verifique seu E-mail</h3>
                    <p className={styles.stepDescription}>Enviamos seu link de acesso pessoal para o e-mail que você usou na compra.</p>
                </div>
            </div>

            {/* PASSO 2 */}
            <div className={styles.stepBlock}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepIcon}><BookIcon/></div>
                <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Acesse seu Material</h3>
                    <p className={styles.stepDescription}>Entre na área de membros para baixar o eBook e o áudio do Rito de Ativação.</p>
                </div>
            </div>

            {/* PASSO 3 - CTA INTEGRADO */}
            <div className={`${styles.stepBlock} ${styles.ctaBlock}`}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepIcon}><CommunityIcon/></div>
                <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Entre para a Comunidade</h3>
                    <p className={styles.stepDescription}>Junte-se ao canal exclusivo para receber insights e se conectar com a tribo.</p>
                </div>
                <a href="#link-comunidade" className={styles.ctaButton}>
                    Entrar Agora
                </a>
            </div>
        </div>

        <div className={styles.cardBorder}></div>
        <div className={styles.cardGlow}></div>
      </motion.div>
    </main>
  );
}