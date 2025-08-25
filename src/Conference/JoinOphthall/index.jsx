import React from 'react'
import styles from './styles.module.css'

const JoinOphthall = ({ data }) => {
    return (
        <section className={`${styles.container} container-fluid`}>
            <div className={`${styles.contentContainer} container`}>
                <h2 className={styles.title}>{data?.title}</h2>           
                <div className={`d-flex flex-column align-items-center justify-content-center gap-4 mt-4`}>
                    <div className={`text-end ${styles.content}`}>
                        <p className={styles.description1}>
                          {data?.description}
                        </p>
                    </div>
                    <div className={`${styles.buttonGroup} d-flex gap-3`}>
                        <a><button className={`btn fw-bold bg-black text-white ${styles.button}`}>{data?.buttonText1}</button></a>
                        <a href='/login'><button className={`btn fw-bold bg-black text-white ${styles.button}`}>{data?.buttonText2}</button></a>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default JoinOphthall
