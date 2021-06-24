import React from 'react'
import Image from 'next/image';
import styles from '../styles/Hero.module.css'

const Hero = ({ title }) => {
    return (
        <section id="hero" className={styles.hero__container}>
            <h1 className={styles.hero__title}>{title}</h1>
        </section>
    )
}

export default Hero
