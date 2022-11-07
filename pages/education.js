import React from "react";
import styles from "../styles/Education.module.css";
import Image from "next/image";
import dai from "../public/assets/img/dai.jpg";
export default function education() {
  return (
    <div className={styles.education_wrapper}>
      <div className={styles.education_start}>
        <div className={styles.education_header}>Education</div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image src={dai} />
          <div className={styles.card_text}>
            <p>MS in Computer Science</p>
            <h3>Janurary 2021 - Present</h3>
            <p>Relevant Coursework</p>
            <ul>
              <li>Distributed Database Systems</li>
              <li>Cloud Computing</li>
              <li>Foundation Of Algorithms</li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={dai} />
          <div className={styles.card_text}>
            <p>MS in Computer Science</p>
            <h3>Janurary 2021 - Present</h3>
            <p>Relevant Coursework</p>
            <ul>
              <li>Distributed Database Systems</li>
              <li>Cloud Computing</li>
              <li>Foundation Of Algorithms</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.certificate_start}>
        <div className={styles.certificate_header}>Certificate</div>
      </div>
      <div className={styles.cert_img}>
        <Image src={dai} />
        <Image src={dai} />
        <Image src={dai} />
        <Image src={dai} />
        <Image src={dai} />
        <Image src={dai} />
      </div>
    </div>
  );
}
