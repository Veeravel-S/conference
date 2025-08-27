
import Title from "@/Title";
import styles from "./styles.module.css";
// import { motion } from "framer-motion";


const Speakers = ({ data }) => {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 80, damping: 20 },
//   },
// };

  return (
    <section className={styles.speakersec}>
      <div className="container">
        <Title title={"Speakers"} />

        <div  className={styles.speakerList} >
          {/* <motion.div whileInView="show"
          viewport={{ amount: 0.2, once: false }}  initial="hidden"      variants={container} className="row">
            {data?.map((data, i) => (
              <motion.div variants={itemVariants} className="col-lg-4" style={{height:"230px"}}>
                <div className={`d-flex align-items-center gap-3 ${styles.speakerCard}`}>

                  <div className={styles.speakerimg}>
                    <img src={data?.img} className={`${styles.image} img-fluid`} />
                  </div>

                  <div className={styles.speakerDetail}>
                    <h4>{data?.name}</h4>
                    <h6>{data?.designation}</h6>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
               <div className="row">
            {data?.map((data, i) => (
              <div className="col-lg-4" style={{height:"230px"}}>
                <div className={`d-flex align-items-center gap-3 ${styles.speakerCard}`}>

                  <div className={styles.speakerimg}>
                    <img src={data?.img} className={`${styles.image} img-fluid`} />
                  </div>

                  <div className={styles.speakerDetail}>
                    <h4>{data?.name}</h4>
                    <h6>{data?.designation}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;