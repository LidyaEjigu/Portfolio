import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./style.css";
const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm LIDYA
          <br />
          Full-Stack developer
        </h1>
        
      
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home_contact-me">
          <button className="button" onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
      </div>
    </section>
  );
};
export default Home;
