import React from 'react'
import styles from "./styles.module.css"
import {motion} from "framer-motion"
const ConferenceHightlights = ({ data }) => {
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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};
    return (
        <section className={`${styles.container} container-fluid`}>
            <h4 className={styles.title}>{data?.title}</h4>
            <motion.div initial="hidden" whileInView="show" variants={container} viewport={{ amount: 0.2, once: false }}  className={styles.aboutCards}>
                {data?.conferenceHighlightsList?.map((item, index) => (
                    <motion.div variants={itemVariants} className={styles.cardContent}>
                        <img src={item.img} className={styles.cardImage} alt="" />
                        <div className={styles.overlay}></div>
                        <p className={styles.description}>{item?.title}</p>
                    </motion.div>
                ))
                }
            </motion.div>
        </section>
    )
}

export default ConferenceHightlights