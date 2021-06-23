import React from 'react'
import Link from 'next/link';

import styles from '../styles/Navigation.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.h1}>PROG</h1>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link href="/about">
                        <a>
                            About
                        </a>
                    </Link>
                </li>
                <li className={styles.li}>Bonus</li>
            </ul>
        </nav>
    )
}

export default Navbar
