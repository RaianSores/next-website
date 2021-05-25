import styles from '../styles/components/Welcome.module.css';

export function Welcome() {
    return (
        <div className={styles.welcomeContainer}>
            <strong>Welcome!</strong>
            <p>Vamos construir algo incrível junstos juntos.</p>
        </div>
    );

}