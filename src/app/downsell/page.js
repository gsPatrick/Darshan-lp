import OfertaEspecial from '@/components/OfertaEspecial/OfertaEspecial';

// TEXTOS LAPIDADOS PARA A PÁGINA DE DOWNSELL
const ofertaDownsell = {
  tag: 'UMA ÚLTIMA OPORTUNIDADE',
  titulo: 'A Chave para Romper o Primeiro Ciclo',
  subtitulo: 'Eu entendo. Um programa completo talvez não seja para agora. Mas não posso te deixar ir sem a ferramenta essencial que inicia toda a transformação. Considere este o seu kit de partida para a jornada.',
  videoUrl: '#', // Link do vídeo de vendas do Downsell
  beneficios: [
    'Receba o guia prático "A Chave da Ressignificação" em áudio, gravado por mim.',
    'Aprenda o exercício de 10 minutos para quebrar padrões de autossabotagem.',
    'Descubra a primeira atitude de um governante para tomar decisões com clareza.',
  ],
  textoCtaPrincipal: 'SIM, EU QUERO A CHAVE PARA INICIAR MINHA JORNADA',
  textoCtaRecusar: 'Não, obrigado. Seguirei apenas com a compra original.',
};

export default function DownsellPage() {
  return <OfertaEspecial {...ofertaDownsell} />;
}