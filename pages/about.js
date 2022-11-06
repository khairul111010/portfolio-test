import Image from "next/image";
import React from "react";
import tr from "../public/assets/img/tr.png";
import arrow from "../public/assets/icons/right-arrow.png";
import styles from "../styles/About.module.css";
import { ImEarth } from "react-icons/im";
import { FcOldTimeCamera } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";
import { SiGoogletranslate } from "react-icons/si";
import { BsFileCodeFill } from "react-icons/bs";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { GrNotes } from "react-icons/gr";
import { FcImageFile } from "react-icons/fc";

export default function About() {
  return (
    <div className={styles.about_layout}>
      <div>
        <div className={styles.about_title}>About</div>
        <div className={styles.about_details}>
          <div className={styles.about_img}>
            <Image src={tr} alt="" />
          </div>
          <div className={styles.about_img_details}>
            <div className={styles.about_img_details_text}>
              Focused and enthusiastic developer with a keen interest in
              software development and artificial intelligence. By comprehensive
              exposure to the underlying concepts and applying them vividly to
              various projects, my love for these domains came into being. I am
              a passionate individual who thrives to build and apply algorithms
              to solve real-world industry problems.
            </div>
            <table className={styles.about_img_details_col}>
              <tbody>
                <tr>
                  <td>
                    <span>
                      <Image src={arrow} width={10} />
                    </span>
                    Birthday: 12 October 1996
                  </td>
                  <td>
                    <span>
                      <Image src={arrow} width={10} />
                    </span>
                    Phone: +1 480-401-8112
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>
                      <Image src={arrow} width={10} />
                    </span>
                    City: Tempe, AZ
                  </td>
                  <td>
                    <span>
                      <Image src={arrow} width={10} />
                    </span>
                    Email: rajaprerak@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.interest}>
        <div className={styles.about_title}>INTERESTS</div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <ImEarth />
            Software Development
          </div>
          <div className={styles.card}>
            <FcAcceptDatabase />
            Machine Learning
          </div>
          <div className={styles.card}>
            <FcOldTimeCamera />
            Computer Vision
          </div>
          <div className={styles.card}>
            <SiGoogletranslate />
            Natural Language Processing
          </div>
          <div className={styles.card}>
            <BsFileCodeFill />
            Software Engineering
          </div>
          <div className={styles.card}>
            <TbDeviceDesktopAnalytics />
            Visualization
          </div>
          <div className={styles.card}>
            <GrNotes />
            Algorithms
          </div>
          <div className={styles.card}>
            <FcImageFile />
            Image Processing
          </div>
        </div>
      </div>
    </div>
  );
}
