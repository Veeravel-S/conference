"use client";
import React from 'react'
import styles from "./styles.module.css"
import { motion } from "framer-motion";


const WhatYouLearn = ({ data }) => {

    return (
        <section className={`${styles.container} container`}>
            <h4 className={styles.title}>{data?.title}</h4>
            <div className={styles.contentContainer}>
                {
                    data?.contents?.map((item, index) => (
                        <div key={index} className={styles.content}>
                            <div className={styles.contentCount} >
                                {item.id}
                            </div>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default WhatYouLearn

