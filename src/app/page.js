import Image from "next/image";
import styles from "./page.module.css";
import baclfr from "../../public/assets/img/palm/EbEi5qpJPHHfCA1OYWAUeZw8Zk.avif";
import right from "../../public/assets/img/palm/drkvhE6AlVl4jpcUZC76xWyZo.avif";
import img1 from "../../public/assets/svg/download.svg";
import img2 from "../../public/assets/svg/download1.svg";
import img3 from "../../public/assets/svg/download2.svg";
import Marquee from "./components/Marquee/Marquee";
import Frog from "./components/Frog/Frog";
import Together from "./components/Together/Together";
import CatWithCoin from "./components/CatPage/CatPage";
import JoinToUs from "./components/Join/JoinToUs";
import Chill from "../../public/assets/img/cat/NrqBpiUJBY3LykJhj9Qr3JbMetA.avif";
import motion from "framer-motion";
export default function Home() {
  return (
    <>
      <div className={styles.background}>
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
        <Image
          className={styles.leftImage}
          src={baclfr}
          alt="Фото 1"
          width={650}
          height={680}
        />

        <Image
          className={styles.rightImage}
          src={right}
          alt="Фото справа"
          width={600}
          height={680}
        />
        <div className={styles.wrappCat}>
          <Image
            src={Chill}
            alt="Фото справа"
            width={800}
            height={420}
            className={styles.CatChill}
          />
        </div>
      </div>{" "}
      <Marquee />
      <div className={styles.centerText}>
        <h1>$CWAT</h1>
      </div>{" "}
      <Frog />
      <Together />
      <Marquee />
      <CatWithCoin />
      <Marquee />
      <JoinToUs />
    </>
  );
}
