import Head from 'next/head';
import { Footer } from '../components/Footer';
import NavBar from '../components/NavBar';
import { Profile } from '../components/Profile';
import { SlideShow } from '../components/SlideShow';
import { Welcome } from '../components/Welcome';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mindset</title>
      </Head>  
          <NavBar />
          <SlideShow/>
          <Profile/>
          <Welcome />
          <Footer />
      <section>
        <div>

        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
