'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './OfertaEspecial.module.css';

// Ícones para a seção
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeJoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const SecurityIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const TimerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function OfertaEspecial({
  urgencyText = "⚡ OFERTA LIMITADA - Apenas 24 horas!",
  tag = "Exclusivo",
  titulo = "Desbloqueie Seu Potencial Máximo",
  subtitulo = "Acesso completo ao método que transformou a vida de mais de 10.000 pessoas",
  videoUrl = "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
  beneficios = [
    "<strong>Módulo Exclusivo:</strong> Estratégias avançadas não reveladas",
    "<strong>Suporte VIP:</strong> Acesso direto ao mentor por 60 dias",
    "<strong>Comunidade Privada:</strong> Networking com outros membros VIP",
    "<strong>Bônus Especiais:</strong> Templates e ferramentas exclusivas",
    "<strong>Certificado:</strong> Reconhecimento oficial do programa",
    "<strong>Garantia Estendida:</strong> 30 dias para testar sem riscos"
  ],
  valorOriginal = "R$ 997",
  valorOferta = "R$ 297",
  textoEconomia = "700",
  textoCtaPrincipal = "QUERO ACESSO AGORA",
  textoCtaSub = "Pagamento único • Acesso imediato",
  textoCtaRecusar = "Não, obrigado. Quero continuar pagando mais caro."
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [countdown, setCountdown] = useState(24 * 60 * 60); // 24 horas em segundos
  const videoRef = useRef(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <main className={styles.pageWrapper}>
      <div className={styles.backgroundEffect}></div>
      <div className={styles.backgroundOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>
      
      <motion.div 
        className={styles.offerCard}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.urgencyBar}>
          <TimerIcon />
          {urgencyText}
          <div className={styles.countdownBadge}>
            {formatTime(countdown)}
          </div>
        </div>

        <div className={styles.cardContent}>
          <div className={styles.header}>
            <span className={styles.tag}>
              <StarIcon />
              {tag}
            </span>
            <h1 className={styles.title}>{titulo}</h1>
            <p className={styles.subtitle}>{subtitulo}</p>
          </div>
          
          <div className={styles.videoWrapper}>
            {!isVideoPlaying && (
              <div className={styles.videoOverlay} onClick={handlePlayVideo}>
                <div className={styles.playIconWrapper}>
                  <div className={styles.playIcon}></div>
                </div>
                <span>Clique para assistir e ativar o som</span>
              </div>
            )}
            <video 
              ref={videoRef} 
              src={videoUrl} 
              className={styles.videoPlayer} 
              playsInline 
              controls={isVideoPlaying}
            />
          </div>
          
          <div className={styles.benefitsSection}>
            <h2 className={styles.sectionTitle}>O que você vai destravar imediatamente:</h2>
            <ul className={styles.benefitsList}>
              {beneficios.map((item, index) => (
                <motion.li 
                  key={index}
                  className={styles.benefitItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className={styles.benefitIcon}>
                    <CheckIcon />
                  </div>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className={styles.offerBox}>
            <div className={styles.priceInfo}>
              <span className={styles.priceLabel}>
                De <del>{valorOriginal}</del> por apenas
              </span>
              <span className={styles.priceFinal}>{valorOferta}</span>
            </div>
            <div className={styles.savingsBadge}>
              Economize R$ {textoEconomia}
            </div>
          </div>

          <div className={styles.ctaWrapper}>
            <motion.a 
              href="#" 
              className={styles.ctaButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {textoCtaPrincipal}
              <span className={styles.ctaButtonSubtext}>{textoCtaSub}</span>
            </motion.a>
          </div>
          
          <div className={styles.trustSeals}>
            <div className={styles.sealItem}>
              <SecurityIcon />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className={styles.sealItem}>
              <SecurityIcon />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className={styles.sealItem}>
              <SecurityIcon />
              <span>SSL Criptografado</span>
            </div>
          </div>

          <a href="#" className={styles.ctaRecusar}>{textoCtaRecusar}</a>
        </div>

        <div className={styles.cardBorder}></div>
        <div className={styles.cardGlow}></div>
      </motion.div>
    </main>
  );
}