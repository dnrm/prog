import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import styles from '../styles/NotFound.module.css';

import { motion } from 'framer-motion'

const NotFound = () => {
    return (
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: 0.8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: 0.4
                }
            }
        }} className="404">
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <main className={styles.container}>
                <h1 className={styles.title}>Not Found</h1>
            </main>
            <Footer />
        </motion.div>
    )
}

export default NotFound
