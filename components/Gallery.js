import React from 'react'
import Image from 'next/image'
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
    return (
        <section id="gallery" className={styles.gallery__container}>
            <Image src="/monster.png" className={styles.gallery__image} layout="responsive" width="100%" height="20vh" />
        </section>
    )
}
export default Gallery
