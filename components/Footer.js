import React from 'react'
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1>PROG</h1>
            <h3>© 2021
                <Link href="/about-us">
                    <a className={styles.link}>
                        {' '}PROG Studios
                    </a>
                </Link>
            </h3>
            <p className={styles.footer__credits}>Website developed by Daniel Medina</p>
        </footer>
    )
}

export default Footer