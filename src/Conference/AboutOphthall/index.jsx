
import React from 'react'
import styles from "./styles.module.css"
import { motion } from "framer-motion";

const AboutOphthall = ({ data }) => {
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
        <section className={`${styles.container} container-fluid`}>
            {/* <div className={styles.aboutContent}>
                <h4 className={styles.title}>{data?.title}</h4>
                <p className={styles.content}>{data?.description}</p>
            </div>
            <div className={styles.aboutCards}>
                {data?.cardList?.map((item,index)=>(
  <div className={styles.cardContent}>
                    <img src={item?.image} className={styles.cardImage} alt="" />
                    <p className={styles.cardTag}>{item?.tagContent}</p>
                    <p className={styles.description}>{item?.description}</p>
                </div>
                ))
        }
            </div> */}
            <div className={styles.aboutContent}>
                <h4 className={styles.title}>{data?.title}</h4>
                <div className={styles.contentContainer}>
                    <p className={styles.content}>{data?.description1}</p>
                    <p className={styles.content}>{data?.description2}</p>
                    <p className={styles.content}>{data?.description3}</p>
                </div>
            </div>
            <motion.div initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2, once: false }} className={styles.aboutCards} variants={container}>
                {data?.cardList?.map((item, index) => (
                    <motion.div className={styles.cardContent} variants={itemVariants}>
                        <img src={item.image} className={styles.cardImage} alt="" />
                        <div className={styles.overlay}></div>
                        {/* <p className={styles.cardTag}>{item?.tagContent}</p> */}
                        <p className={styles.description}>{item?.description}</p>
                    </motion.div>
                ))
                }
            </motion.div>
        </section>
    )
}

export default AboutOphthall

