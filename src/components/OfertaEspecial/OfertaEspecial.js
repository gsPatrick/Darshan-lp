// /components/OfertaEspecial/OfertaEspecial.js

'use client';

import { useState, useRef } from 'react'; // >>> ADICIONADO: useState e useRef
import { motion } from 'framer-motion';
import styles from './OfertaEspecial.module.css';

// Ícones (sem alterações)
const CheckIcon = () => ( <svg width="24" height="24" viewBox="0 0 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.checkIcon}><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/></svg> );
const SecurityIcon = () => ( <svg width="24" height="24" viewBox="0 0 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.guaranteeIcon}><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 12.29L16.59 7.7L18 9.11L12 15.11L6 9.11L7.41 7.7L12 12.29Z" fill="currentColor"/></svg> );

export default function OfertaEspecial({
  urgencyText, tag, titulo, subtitulo, videoUrl, beneficios, valorOriginal, valorOferta, textoEconomia, textoCtaPrincipal, textoCtaSub, textoCtaRecusar,
}) {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } };

  // >>> ADICIONADO: Lógica para controlar o vídeo <<<
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Inicia o vídeo com som, pois foi acionado por um clique
      setIsVideoPlaying(true);
    }
  };

  return (
    <>
      <motion.div className={styles.urgencyBar} initial={{ y: '-100%' }} animate={{ y: '0%' }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}>
        {urgencyText}
      </motion.div>
      <main className={styles.pageWrapper}>
        <motion.div className={styles.container} variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className={styles.tag} variants={itemVariants}>{tag}</motion.div>
          <motion.h1 className={styles.titulo} variants={itemVariants}>{titulo}</motion.h1>
          <motion.p className={styles.subtitulo} variants={itemVariants}>{subtitulo}</motion.p>
          
          <motion.div className={styles.videoWrapper} variants={itemVariants}>
            {/* >>> LÓGICA DO VÍDEO COMPLETAMENTE REFEITA <<< */}
            {videoUrl.includes('.mp4') && (
              <>
                {/* Overlay que aparece ANTES do vídeo tocar */}
                {!isVideoPlaying && (
                  <div className={styles.videoOverlay} onClick={handlePlayVideo}>
                    <div className={styles.playIconWrapper}>
                      <div className={styles.playIcon}></div>
                    </div>
                    <span>Clique para assistir e ativar o som</span>
                  </div>
                )}
                
                {/* Player de vídeo sem controles */}
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className={styles.videoPlayer}
                  playsInline
                  // Removemos autoPlay, muted, loop e controls
                />
              </>
            )}
            {/* O iframe continua funcionando para links externos, se necessário */}
            {!videoUrl.includes('.mp4') && (
              <iframe src={videoUrl} frameBorder="0" allow="autoplay; fullscreen" title="Oferta Especial"></iframe>
            )}
          </motion.div>
          
          {/* O resto do componente continua igual */}
          <motion.div className={styles.beneficiosWrapper} variants={itemVariants}><h2 className={styles.beneficiosTitle}>O que você vai destravar imediatamente:</h2><ul className={styles.beneficiosList}>{beneficios.map((item, index) => (<li key={index}><CheckIcon/><span dangerouslySetInnerHTML={{ __html: item }} /></li>))}</ul></motion.div>
          <motion.div className={styles.offerBox} variants={itemVariants}><span className={styles.offerNormalPrice}>De <del>{valorOriginal}</del> por apenas:</span><span className={styles.offerSpecialPrice}>{valorOferta}</span><span className={styles.offerSave}>Você economiza {textoEconomia} hoje!</span></motion.div>
          <motion.div className={styles.ctaContainer} variants={itemVariants}><motion.a href="#" className={`${styles.ctaPrincipal} cta-button`} whileHover={{ scale: 1.05, y: -5, transition: { type: 'spring', stiffness: 400 } }} whileTap={{ scale: 0.95 }}>{textoCtaPrincipal}<span className={styles.ctaSubtext}>{textoCtaSub}</span></motion.a></motion.div>
          <motion.div className={styles.trustWrapper} variants={itemVariants}><div className={styles.guaranteeSeal}><SecurityIcon /><span>Garantia Incondicional de 7 Dias</span></div><div className={styles.paymentMethods}><span>Pagamento Seguro:</span><img src="/icons/visa.svg" alt="Visa" /><img src="/icons/mastercard.svg" alt="Mastercard" /><img src="/icons/pix.svg" alt="Pix" /></div></motion.div>
          <motion.a href="#" className={styles.ctaRecusar} variants={itemVariants}>{textoCtaRecusar}</motion.a>
        </motion.div>
      </main>
    </>
  );
}