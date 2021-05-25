import Head from 'next/head';
import { Footer } from '../components/Footer';
import NavBar from '../components/NavBar';

import styles from '../styles/pages/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mindset</title>
      </Head>  
          <NavBar />  
            <h1>Olá</h1>
          <Footer />
    </div>
  );
}
