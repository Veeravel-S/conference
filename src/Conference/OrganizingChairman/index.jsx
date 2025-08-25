import React from 'react'
import styles from "./styles.module.css"


const OrganizingChairman = ({ data }) => {
    return (
        <section className={`${styles.container} container-fluid`}>
            <h4 className={styles.title}>{data?.title}</h4>
            <div className={styles.containerContent}>
                <div className={styles.welcomeCards}>
                    <p>{data?.cardDescription}</p>
                    <div className={styles.profile}>
                        <img src={data?.profile?.profileImage} alt="" />
                        <div>
                            <h5 className={styles.name}>{data?.profile?.profileName}</h5>
                            <p className={styles.destination}>{data?.profile?.destination}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.keynote}>
                    <h4>{data?.keyNotes.title}</h4>
                    <div>
                        {data?.keyNotes?.keyNotesList?.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <img src="/assets/Conference/success.png" className={styles.contentimg} alt="" />
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

