import React from 'react'
import styles from "./styles.module.css"
const ConferenceBanner = ({data}) => {
    return (
        <section className={`${styles.container} container-fluid`}>
            <div className={styles.bannerContent}>
                <div className={styles.content}>
                <h4 className={styles.title}>{data?.title}</h4>
                <p className={styles.description1}>{data?.description}</p>
                <a href='/register' ><button className={`btn fw-bold bg-black text-white ${styles.button}`}>{data?.buttonText}</button></a>
                </div>
            </div>
            <div className={styles.bannerImage}>
                <img src={data?.image} alt="" />
            </div>
        </section>
    )
}

export default ConferenceBanner

