import OfertaEspecial from '@/components/OfertaEspecial/OfertaEspecial';

// TEXTOS LAPIDADOS PARA A PÁGINA DE UPSELL
const ofertaUpsell = {
  tag: 'ESPERE... SEU PRIMEIRO PASSO DE REI',
  titulo: 'Da Leitura à Liderança',
  subtitulo: 'Você acaba de garantir o mapa da sua jornada. Agora, eu te convido a caminhar ao meu lado e acelerar sua transformação de forma prática e mentorada. Esta é uma oportunidade única, oferecida apenas aqui e agora.',
  videoUrl: '#', // Coloque o link do seu vídeo de vendas aqui
  beneficios: [
    'Domine na prática os arquétipos da Dor, Transição e Paraíso.',
    'Receba ferramentas exclusivas de governo emocional, como a "Respiração do Governante".',
    'Construa seu Plano de Legado e tenha clareza sobre seus próximos 10 anos.',
    'Tenha suas dúvidas respondidas diretamente por mim em uma sessão ao vivo.',
  ],
  textoCtaPrincipal: 'SIM, EU QUERO SER MENTORADO E ACELERAR MINHA COROAÇÃO',
  textoCtaRecusar: 'Não, Darshan. Agradeço a oportunidade, mas seguirei apenas com o livro por enquanto.',
};

export default function UpsellPage() {
  return <OfertaEspecial {...ofertaUpsell} />;
}