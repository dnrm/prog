import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Form from '../components/Form';
import Footer from '../components/Footer';

import { motion } from 'framer-motion'

const bonus = () => {
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
        }} className="bonus">
            <Head>
                <title>Bonus | PROG</title>
            </Head>
            <Navbar />
            <Hero title="Bonus" />
            <Form />
            <Footer />
        </motion.div>
    )
}

export default bonus
