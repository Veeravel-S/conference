import React from 'react'
import styles from "./styles.module.css"


const AboutOphthall = ({data}) => {
    return (
        <section className={`${styles.container} container`}>
            <div className={styles.aboutContent}>
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
            </div>
        </section>
    )
}

export default AboutOphthall

