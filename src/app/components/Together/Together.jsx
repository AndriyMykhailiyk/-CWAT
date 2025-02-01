"use client";
import { motion } from "framer-motion";
import styles from "../../styles/Frog/Frog.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Together = () => {
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
          <div className={styles.WrappPhoto}>
            <motion.div
              className={styles.WrappPhoto}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 200 }}
              transition={{ duration: 0.75 }}
            >
              <Image
                className={styles.Frog2}
                src="/assets/img/frog/vJF2ins4sWaVg870wFGUH30qBR4.avif"
                alt="Фото 1"
                width={660}
                height={380}
              />
            </motion.div>
          </div>
          <div className={styles.TextBlock}>
            <motion.div
              className={styles.TextBlock}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={styles.HeadTextaboyt}>Always together</h2>
              <p className={styles.Textaboyt}>
                FWOG, however, was obsessed with the wild depths of MemeCoin
                Jungle. "Forget the beach, bro! The jungle's where you find
                those 1000x gems hiding in the mud!" he ribbited, eyes sparkling
                like freshly minted meme tokens. Despite their different vibes,
                they always met by the crypto river, swapping stories of sunny
                Solana rallies and wild meme coin adventures. In the end, they
                realized the real moonshot wasn't in the market-it was in their
                friendship, worth more than all the coins combined.
              </p>
            </motion.div>
          </div>
        </div>
        <div className={styles.SecondSection}></div>
      </div>
    </div>
  );
};

export default Together;
