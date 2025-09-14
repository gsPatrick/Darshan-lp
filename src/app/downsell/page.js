// /downsell/page.js

import OfertaEspecial from '@/components/OfertaEspecial/OfertaEspecial';

const ofertaDownsell = {
  urgencyText: 'UMA ÚLTIMA OPORTUNIDADE ANTES DE VOCÊ IR',
  tag: 'OK, EU ENTENDO...',
  titulo: 'A Chave para Romper o Primeiro Ciclo',
  subtitulo: 'Um programa completo talvez não seja para agora. Mas não posso te deixar ir sem a ferramenta essencial que inicia toda a transformação. Assista ao vídeo e pegue seu kit de partida para a jornada.',
  videoUrl: '/downsell.mp4',
  beneficios: [
    'Receba o guia prático <strong>"A Chave da Ressignificação"</strong> em áudio.',
    'Aprenda o exercício de 10 min para quebrar padrões de <strong>autossabotagem</strong>.',
    'Descubra a <strong>primeira atitude de um governante</strong> para tomar decisões.',
    'Acesso a um <strong>canal exclusivo</strong> para insights diários.',
  ],
  valorOriginal: '$47',
  valorOferta: 'Apenas 1x de $27',
  // --- CORREÇÃO: Removido o cifrão ---
  textoEconomia: '20',
  // --- FIM DA CORREÇÃO ---
  textoCtaPrincipal: 'SIM, QUERO A CHAVE DA MINHA JORNADA', // Texto encurtado
  textoCtaSub: 'Adicionar ao pedido com 1 clique.',
  textoCtaRecusar: 'Não, obrigado. Prefiro seguir sozinho com a compra original.',
};

export default function DownsellPage() {
  return <OfertaEspecial {...ofertaDownsell} />;
}