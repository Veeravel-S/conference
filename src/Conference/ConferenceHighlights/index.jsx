import React from 'react'
import styles from "./styles.module.css"


const ConferenceHightlights = ({ data }) => {
    return (
        <section className={`${styles.container} container-fluid`}>
            <h4 className={styles.title}>{data?.title}</h4>
            <div className={styles.containerCards}>
                {data?.conferenceHighlightsList?.map((item,index) => (
                    <div key={index} className={styles.card}>
                        <img src={item?.icon} alt="" />
                        <h5 className={styles.cardTitle}>{item?.title}</h5>
                        <p className={styles.cardContent}>{item?.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ConferenceHightlights

