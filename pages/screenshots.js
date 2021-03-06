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
                    blurDataURL="/min/monster.png"
                    alt="monster"
                />
                <Image
                    src="/bar.png"
                    className={styles.screenshots__image}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    placeholder="blur"
                    blurDataURL="/min/bar.png"
                    alt="bar"
                />
                <Image
                    src="/living-room.png"
                    className={styles.screenshots__image}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    placeholder="blur"
                    blurDataURL="/min/living-room.png"
                    alt="living room"
                />
                <Image
                    src="/tables.png"
                    className={styles.screenshots__image}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    placeholder="blur"
                    blurDataURL="/min/tables.png"
                    alt="tables"
                />
                <Image
                    src="/bedroom-lit.png"
                    className={styles.screenshots__image}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    placeholder="blur"
                    blurDataURL="/min/bedroom-lit.png"
                    alt="bedroom"
                />
            </div>
            <Footer />
        </motion.div>
    );
};

export default screenshots;
