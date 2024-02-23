import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeader.jsx";
import { Animate } from "react-simple-animate";
import "./style.css";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
const personalDetails = [
  {
    label: "Name",
    value: "Lidya Ejigu",
  },
  {
    label: "Address",
    value: "ADDISABABA",
  },
  {
    label: "Email",
    value: "liduejigu@gmail.com",
  },
  {
    label: "Contact Me",
    value: "+251962614739",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about-content">
        <div className="about-content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Fullstack Developer</h3>
            <div className="paragraph">
              <p> jehdjkhdqjkhdsjdhkqjhskj gjjjjjjjjjjj jjjjjjjjjjjj</p>
              <p>jdjjhfjhfjdejwshe jwhhhhhhhh hhhhhhhhhh hhhhhhhhhhhhhh</p>
              <p>jdjjhfjhfjdejwshej whhhhhhhhhhhh hhhhhhh hhhhhhhhhhhhh</p>
              <p>jdjjhfjhfjdejwshej whhhhhhhh hhhhhhhhhh hhhhhhhhhhhhhh</p>
              <p>jdjjhfjhfjdejwshej whhhhhhhh hhhhhh hhhhhhhhhhhhhhhhhh</p>
            </div>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalinformationheadertext">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about-content_serviceWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about-content_serviceWrapper_innercontent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
