import Head from 'next/head';
import NavBar from '../components/NavBar';

import styles from '../styles/pages/Home.module.css';
import { AboutExperiences } from '../components/AboutExperiences';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mindset</title>
      </Head>  
          <NavBar /> 
          <AboutExperiences />                
    </div>
  );
}
