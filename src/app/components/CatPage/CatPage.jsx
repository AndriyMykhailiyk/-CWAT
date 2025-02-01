"use client";

import React from "react";
import styles from "../../styles/CatWithCoin/Cat.module.css";
import Image from "next/image";
import Cat from "../../../../public/assets/img/cat/0nrEROxZ8fTR3SLX2JgHG2pzF4s (1).avif";
import { motion } from "framer-motion";

const CatWithCoin = () => {
  return (
    <>
      <div className={styles.BackdroundCat}>
        <div className={styles.ItemContainer}>
          <div className={styles.SimpleItem}>
            <div className={styles.WrapperSimpleItem}>
              <h3 className={styles.HeaderText}>1. Create Wallet</h3>
              <p className={styles.Visit}>
                Visit phantom.app and follow the simple steps to create a new
                account with the Phantom app or browser extension.
              </p>
            </div>
          </div>
          <div className={styles.SimpleItem}>
            <div className={styles.WrapperSimpleItem}>
              <h3 className={styles.HeaderText}>2. GET SOME SOL</h3>
              <p className={styles.Visit}>
                Tap the BUY button in the app to purchase Solana, or deposit
                $SOL to your Phantom wallet from the crypto exchange of your
                choice.
              </p>
            </div>
          </div>
          <div className={styles.SimpleItem}>
            <div className={styles.WrapperSimpleItem}>
              <h3 className={styles.HeaderText}>3. Swap To $CWAT</h3>
              <p className={styles.Visit}>
                Tap the SWAP icon in your Phantom wallet and paste the $CWAT
                token address. Swap your $SOL for $CWAT
              </p>
            </div>
          </div>
          <div className={styles.SimpleItem}>
            <div className={styles.WrapperSimpleItem}>
              <h3 className={styles.HeaderText}>4. TA DA!</h3>
              <p className={styles.Visit}>
                Congratulations, you're now a proud HOLDER of $CWAT coin!
                Welcome to the Cult.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.ImgContainer}>
          <Image
            className={styles.ImgCatCoin}
            alt="PhotoCat"
            src={Cat}
            width={460}
            height={430}
          />
        </div>
        <div className={styles.CatContainer}></div>
      </div>
    </>
  );
};

export default CatWithCoin;
