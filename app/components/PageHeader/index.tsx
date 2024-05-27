import React from "react";
import styles from "./index.module.css";
import image from "../../images/Ellipse 1.png";
import Image from "next/image";

const Pageheader = () => {
  return (
    <div className={styles.headerBox}>
      <div className={styles.header}>Add patient</div>
      <div className={styles.userInfo}>
        <div className={styles.userImage}>
          <Image src={image} alt="user"></Image>
        </div>
        <span>Pabodha Pathirana</span>
      </div>
    </div>
  );
};

export default Pageheader;
