import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Screenshots.module.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

const screenshots = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {
                    scale: 0.8,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.4,
                    },
                },
            }}
            className="page"
        >
            <Head>
                <title>Screenshots | PROG</title>
            </Head>
            <Navbar />
            <Hero title="Screenshots" />
            <div className={styles.screenshots}>
                <Image
                    src="/monster.png"
                    className={styles.screenshots__image}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    placeholder="blur"
                    blurDataURL="/monster.png"
                />
                <Image
                    src="/bar.png"
                    className={styles.screenshots__image}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    placeholder="blur"
                    blurDataURL="/bar.png"
                />
                <Image
                    src="/living-room.png"
                    className={styles.screenshots__image}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    placeholder="blur"
                    blurDataURL="/living-room.png"
                />
                <Image
                    src="/tables.png"
                    className={styles.screenshots__image}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    placeholder="blur"
                    blurDataURL="/tables.png"
                />
                <Image
                    src="/bedroom-lit.png"
                    className={styles.screenshots__image}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    placeholder="blur"
                    blurDataURL="/bedroom-lit.png"
                />
            </div>
            <Footer />
        </motion.div>
    );
};

export default screenshots;
