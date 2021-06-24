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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe iste voluptates fugiat molestias tempora ab eaque odio animi, vel quae consectetur assumenda voluptas et eius distinctio corrupti iure qui quia.
            Sequi esse, nam minima beatae ducimus, illo fugit assumenda delectus consectetur eaque ipsum reiciendis repudiandae, dicta accusamus eveniet illum iusto! Nisi praesentium distinctio nam ducimus recusandae. Ullam magni soluta porro.
            Architecto numquam quisquam totam sint animi, hic eligendi dolorem quam saepe, officiis beatae ea ipsa consequatur! Nemo libero laboriosam temporibus perferendis voluptatum fugiat corrupti eius. Tempora cum cumque nihil perferendis?
          </p>
        </div>
        <Gallery />
      </main>
      <Footer />
    </motion.div>
  )
}
