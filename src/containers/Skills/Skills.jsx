import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeader.jsx";
import { skillData } from "./utils.js";
import { AnimateKeyframes } from "react-simple-animate";
import { Animate } from "react-simple-animate";
import { Line } from "rc-progress";
import "./style.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills_content-wrapper">
        {skillData.map((item, i) => (
          <div key={i} className="skills_content-wrapper_inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translatex(0px)",
              }}
            >
              <h3 className="skills_content-wrapper_inner-content_catagory-text">
                {item.label}
              </h3>
              <div className="skills_content-wrapper_inner-content_progressbar">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity:1", "opacity:0"]}
                    iterationCount="1"
                    key={j} // Add the key prop here
                  >
                    <div className="progressbar-wrapper">
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                        key={j} // Add the key prop here
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;