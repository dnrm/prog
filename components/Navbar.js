import React from 'react'
import Link from 'next/link';

import styles from '../styles/Navigation.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.h1}>
                <Link href="/">
                    <a>
                        PROG
                    </a>
                </Link>
            </h1>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link href="/screenshots">
                        <a>
                            Screenshots
                        </a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/bonus">
                        <a>
                            Bonus
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
