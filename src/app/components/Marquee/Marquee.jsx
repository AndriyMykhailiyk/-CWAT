"use client";

import { motion } from "framer-motion";
import styles from "../../styles/Marquee.module.css";

const Marquee = () => {
  return (
    <div className={styles.marqueeContainer}>
      <motion.div
        className={styles.marqueeWrapper}
        animate={{ x: ["120%", "-100%"] }} // Безперервна анімація
        transition={{
          repeat: Infinity,
          duration: 10, // Час руху
          ease: "linear",
        }}
      >
        <div className={styles.marqueeText}>
          <span>
            Buy $CWAT Buy $CWAT Buy $CWAT Buy $CWAT Buy $CWAT Buy $CWAT Buy
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
