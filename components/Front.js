import React from "react";
import Image from "next/image";
import styles from "../styles/Front.module.css";
import tr from "../public/assets/img/tr.png";
export default function Front() {
  return (
    <div className={styles.front}>
      <div className={styles.profile_pic}>
        <Image src={tr} alt="" />
      </div>
      <div className={styles.profile_details}>
        <div>
          <h2>Moshiul Azam</h2>
        </div>
        <div>
          <h3>Software Engineer @ Google - Grad Student - AI/ML Researcher</h3>
        </div>
      </div>
      <div className={styles.profile_enter}>Enter</div>
    </div>
  );
}
