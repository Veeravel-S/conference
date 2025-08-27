import React from 'react'
import styles from "./styles.module.css"
import { motion } from 'framer-motion';


const OrganizingChairman = ({ data }) => {
    // const container = {
    //     hidden: { opacity: 0 },
    //     show: {
    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 0.3,
    //         },
    //     },
    // };

    // const itemVariants = {
    //     hidden: { opacity: 0, x: 100 },
    //     show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70 } },
    // };

    return (
        <section className={`${styles.container} container-fluid`}>
            <h4 className={styles.title}>{data?.title}</h4>
            <div className={styles.containerContent}>
                {/* <div className={styles.welcomeCards}>
                    <div className={styles.overlay}></div>
                    <img src="assets/Conference/organisingChairman.jpg" className={styles.cardImage} alt="" />
                    <img src="assets/Conference/quotationFilled.png" className={styles.quotationImage} alt="" />
                    <p>{data?.cardDescription1}</p>
                    <p>{data?.cardDescription2}</p>
                    <div className={styles.profile}>
                        <img src={data?.profile?.profileImage} alt="" />
                        <div>
                            <h5 className={styles.name}>{data?.profile?.profileName}</h5>
                            <p className={styles.destination}>{data?.profile?.destination}</p>
                        </div>
                    </div>
                </div> */}
                <div className={styles.welcomeCards}>
                    <div className={styles.cardImageContainer}>
                        <div className={styles.overlay}></div>
                        <img src="assets/Conference/organisingChairman.jpg" className={styles.cardImage} alt="" />
                    </div>
                    <div className={styles.cardContent}>
                        <img src="assets/Conference/quotationFilled.png" className={styles.quotationImage} alt="" />
                        <p>{data?.cardDescription1}</p>
                        <p>{data?.cardDescription2}</p>
                        <div className={styles.profile}>
                            {/* <img src={data?.profile?.profileImage} alt="" /> */}
                            <div>
                                <h5 className={styles.name}>{data?.profile?.profileName}</h5>
                                <p className={styles.destination}>{data?.profile?.destination}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.keynote}>
                    <h4>{data?.keyNotes.title}</h4>
                    {/* <motion.div variants={container} initial="hidden" whileInView="show"
                        viewport={{ amount: 0.2, once: false }}>
                        {data?.keyNotes?.keyNotesList?.map((item, index) => (
                            <motion.div key={index} variants={itemVariants} className={styles.content}>
                                <img src="assets/SkyRocket/success.png" className={styles.contentimg} alt="" />
                                <p>{item}</p>
                            </motion.div>
                        ))}
                    </motion.div> */}
                     <div>
                        {data?.keyNotes?.keyNotesList?.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <img src="assets/SkyRocket/success.png" className={styles.contentimg} alt="" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrganizingChairman

