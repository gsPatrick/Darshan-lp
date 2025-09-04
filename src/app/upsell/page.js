// /upsell/page.js

import OfertaEspecial from '@/components/OfertaEspecial/OfertaEspecial';

// TEXTOS PERSUASIVOS PARA A PÁGINA DE UPSELL
const ofertaUpsell = {
  urgencyText: 'ATENÇÃO: OFERTA ÚNICA DISPONÍVEL APENAS NESTA PÁGINA',
  tag: 'ESPERE... SUA JORNADA NÃO TERMINOU',
  titulo: 'Da Leitura à Liderança',
  subtitulo: 'Você garantiu o mapa. Assista ao vídeo abaixo e descubra como posso te guiar pessoalmente para acelerar sua coroação. Esta é uma oportunidade oferecida apenas aqui e agora.',
  videoUrl: '/upsell.mp4', // Aponta para o vídeo na pasta /public
  beneficios: [
    'Domine na prática os arquétipos da <strong>Dor, Transição e Paraíso</strong>.',
    'Receba ferramentas exclusivas de <strong>governo emocional</strong>.',
    'Construa seu <strong>Plano de Legado</strong> para os próximos 10 anos.',
    'Tenha suas dúvidas respondidas <strong>diretamente por mim</strong> em uma sessão ao vivo.',
  ],
  valorOriginal: 'R$497',
  valorOferta: 'Apenas 12x de R$29,90',
  textoEconomia: 'R$140',
  textoCtaPrincipal: 'SIM, QUERO ACELERAR MINHA COROAÇÃO AGORA',
  textoCtaSub: 'Acesso Imediato à Masterclass + Sessão Ao Vivo',
  textoCtaRecusar: 'Não, Darshan. Agradeço a oportunidade, mas seguirei apenas com o livro.',
};

export default function UpsellPage() {
  return <OfertaEspecial {...ofertaUpsell} />;
}