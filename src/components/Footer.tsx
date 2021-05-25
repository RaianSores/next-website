import styles from '../styles/components/Footer.module.css';
import { MediaSocial } from './MediaSocial';

export function Footer() {
    return (
        <div className={styles.container}>
            <p>Mindset Technologies 2021 All Rights Reserved</p>
            <MediaSocial />
        </div>
    );
    
}