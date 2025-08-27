
import React from 'react'
import styles from "./styles.module.css"
import { motion } from "framer-motion";


const WhatYouLearn = ({ data }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 100 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70 } },
    };
    return (
        <section className={`${styles.container} container`}>
            <h4 className={styles.title}>{data?.title}</h4>
            <motion.div className={styles.contentContainer} variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2, once: false }} >
                {
                    data?.contents?.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className={styles.content}>
                            <div className={styles.contentCount} >
                                {item.id}
                            </div>
                            <p className={styles.description}>{item.description}</p>
                        </motion.div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default WhatYouLearn

