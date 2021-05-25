import styles from '../styles/components/Services.module.css';

export function Services() {
    return (
        <div className={styles.servicesContainer}>
            <section>
                <div className={styles.service}>
                    <strong>Serviços</strong>
                        <div>
                            <p>Websites</p>
                        </div>
                        <div>
                            <p>E-commerce</p>
                        </div>
                        <div>
                            <p>Infraestrutura</p>
                        </div>
                        <div>
                            <p>Configuração de rede</p>
                        </div>
                </div>
            </section>
        </div>
    );
}