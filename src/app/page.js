import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import OQueVoceRecebe from '@/components/OQueVoceRecebe/OQueVoceRecebe';
import SobreCoach from '@/components/SobreCoach/SobreCoach';
import Produtos from '@/components/Produtos/Produtos';
import ProvaSocial from '@/components/ProvaSocial/ProvaSocial';
import CtaBlock from '@/components/CtaBlock/CtaBlock';
import UpsellDownsell from '@/components/UpsellDownsell/UpsellDownsell';
import FAQ from '@/components/FAQ/FAQ'; // <-- 1. IMPORTAR O NOVO COMPONENTE
import Footer from '@/components/Footer/Footer';
import StickyCTA from '@/components/StickyCTA/StickyCTA';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <OQueVoceRecebe />
      <Produtos />
         <UpsellDownsell />
       <SobreCoach />
      <ProvaSocial />
      <CtaBlock />
   
      <FAQ /> {/* <-- 2. ADICIONAR O COMPONENTE AQUI */}
      <Footer />
      <StickyCTA />
    </main>
  );
}