"use client";
import styles from "../../styles/JointoUs/join.module.css";
import Image from "next/image";
import img1 from "../../../../public/assets/svg/download.svg";
import img2 from "../../../../public/assets/svg/download1.svg";
import img3 from "../../../../public/assets/svg/download2.svg";

const JoinToUs = () => {
  return (
    <div className={styles.Backdround}>
      <div className={styles.wrapBloack}>
        <div className={styles.HeaderSection}>
          <h1 className={styles.HeaderTextJoin}>Join the $CWAT Cult</h1>
        </div>

        <div className={styles.SocBloack}>
          <div className={styles.topImages}>
            <Image
              className={styles.topImage}
              src={img2}
              alt="Фото 3"
              width={128}
              height={100}
            />
            <Image
              className={styles.topImage}
              src={img3}
              alt="Фото 3"
              width={128}
              height={100}
            />
            <Image
              className={styles.topImage}
              src={img1}
              alt="Фото 2"
              width={128}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinToUs;
