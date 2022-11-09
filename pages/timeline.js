import React from "react";
import styles from "../styles/Timeline.module.css";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { BsStackOverflow } from "react-icons/bs";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function timeline() {
  return (
    <div className={styles.timeline_wrapper}>
      <div className={styles.text}>
        <h2>Timeline</h2>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(253, 253, 253)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(251, 251, 251)" }}
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
          icon={<FcGoogle />}
        >
          <h3 className="vertical-timeline-element-title">2019 - Present</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Google, Mountain View, CA
          </h4>
          <p>
            I currently work as a Software Engineer at Google headquarters in
            Mountain View, California.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(253, 253, 253)", color: "#000" }}
          iconStyle={{ background: "rgb(5,114,230)", color: "#000" }}
          icon={<IoLogoFacebook />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(253, 253, 253)", color: "#000" }}
          iconStyle={{ background: "rgb(10,102,194)", color: "#000" }}
          icon={<GrLinkedin />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(253, 253, 253)", color: "#000" }}
          iconStyle={{ background: "rgb(242,116,13)", color: "#fff" }}
          icon={<BsStackOverflow />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
