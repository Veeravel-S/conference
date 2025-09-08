import React from 'react'
import styles from "./styles.module.css"
const ConferenceHightlights = ({ data }) => {

    return (
        <section className={`${styles.container} container-fluid`}>
            <h4 className={styles.title}>{data?.title}</h4>
            <div className={styles.aboutCards}>
                {data?.conferenceHighlightsList?.map((item, index) => (
                    <div className={styles.cardContent}>
                        <img src={item.img} className={styles.cardImage} alt="" />
                        <div className={styles.overlay}></div>
                        <p className={styles.description}>{item?.title}</p>
                    </div>
                ))
                }
            </div>
        </section>
    )
}

export default ConferenceHightlights