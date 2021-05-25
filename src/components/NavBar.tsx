import React from 'react';
import styles from '../styles/components/NavBar.module.css';
import Link from 'next/link'
const NavBar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.menu}>
                <img 
                    src="/favicon.ico" 
                    alt="Raian"
                />
                <div className={styles.menuLink}>
                    <header>
                        <nav>
                        <Link href="/">
                            <a>Home</a>
                        </Link>{' '}
                        |
                        <Link href="/about">
                            <a>About</a>
                        </Link>{' '}
                        |
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>{' '}
                        |
                        <Link href="/contact">
                            <a>Services</a>
                        </Link>
                        </nav>
                    </header>
                </div>            
            </div>
        </div>
    )
}

export default NavBar
