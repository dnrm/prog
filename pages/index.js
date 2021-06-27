import Head from 'next/head'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

import { motion } from 'framer-motion'

export default function Home() {
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
    }} className="app">
      <Head>
        <title>PROG | Official Website</title>
        <link rel="shortcut icon" href="//medina.dev/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <Hero title="PROG" />
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.subheading}>What is PROG?</h1>
          <p className={styles.body}>
            What do you think of an adventure with your friends? Not just any adventure, do you dare go to a haunted house? Turns out things don't go as good as you all planned, what should you do? Will you be able to survive? Come play PROG and find out!
          </p>
          <a href="#" className={styles.play}>Play!</a>
        </div>
        <Gallery />
      </main>
      <Footer />
    </motion.div>
  )
}
