import styles from '../styles/components/MediaSocial.module.css';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function MediaSocial() {
    return (
        <div className={styles.container}>
            <a href="https://www.instagram.com/raian072/" target="_blank">
                <i> <FaInstagram/> </i>
            </a>
            <a href="https://github.com/RaianSores" target="_blank">
                <i> <FaGithub/> </i>
            </a>
            <a href="https://www.linkedin.com/in/raian-soares-pinheiro-375427139/" target="_blank">
                <i> <FaLinkedin/> </i>
            </a>
        </div>
    );
}