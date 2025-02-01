"use client";
import { motion } from "framer-motion";
import styles from "../../styles/Frog/Frog.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Frog = () => {
  const [isInView, setIsInView] = useState(false);

  // Функція, яка буде викликана, коли секція стане видимою
  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsInView(true); // Встановлюємо, що елемент в полі зору
    } else {
      setIsInView(false); // Відновлюємо стан, якщо елемент вийшов з поля зору
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 50% елемента повинно бути видимим
    });

    const element = document.querySelector(`.${styles.FirstSection}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className={styles.Backdround}>
      <div className={styles.wrapBloack}>
        <div className={styles.FirstSection}>
          <motion.div
            className={styles.TextBlock}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.HeadTextaboyt}>CWAT and FWOG</h2>
            <p className={styles.Textaboyt}>
              CWAT the clever cat and FWOG the adventurous frog were childhood
              pals, but their crypto dreams couldn't be more different. CWAT was
              all about the sun-soaked beaches of Solana Shores, where
              lightning-fast transactions flowed like ocean waves. "Imagine
              chilling on Solana, basking in those fast gains under the sun!" he
              purred, picturing himself lounging on a beach with his wallet
              stacked.
            </p>
          </motion.div>
          <div className={styles.WrappPhoto}>
            <motion.div
              className={styles.WrappPhoto}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 200 }}
              transition={{ duration: 0.75 }}
            >
              <Image
                className={styles.Frog2}
                src="/assets/img/frog/keQoN33oxu3dMy2BOTRjRoNFT78.avif"
                alt="Фото 1"
                width={660}
                height={380}
              />
            </motion.div>
          </div>
        </div>
        <div className={styles.SecondSection}></div>
      </div>
    </div>
  );
};

export default Frog;
