import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
                    <img src="https://github.com/RaianSores.png" alt="Raian Soares"/>
                    <span>
                    </span>
                <div>
                    <strong>Raian Soares</strong>
                    <p>
                        Web developer
                    </p>          
                </div>

        </div>
    );
}