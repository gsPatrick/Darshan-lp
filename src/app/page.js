import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import SobreCoach from '@/components/SobreCoach/SobreCoach';
import Produtos from '@/components/Produtos/Produtos';
import ProvaSocial from '@/components/ProvaSocial/ProvaSocial';
import UpsellDownsell from '@/components/UpsellDownsell/UpsellDownsell';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Produtos />
       <SobreCoach />
      <ProvaSocial />
      <UpsellDownsell />
      <Footer />
    </main>
  );
}