import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeader.jsx";
import { Animate } from "react-simple-animate";
import "./style.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        ></Animate>
        <h3 className="contact_content_header-text">Let's Talk</h3>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <div className="contact_content_form">
            <div className="contact_content_form_controlwrapper">
              <div className="namewrapper">
                <input
                  required
                  name="name"
                  className="inputname"
                  type="text"
                ></input>
                <label htmlFor="name" className="namelabel">
                  {" "}
                  Name
                </label>
              </div>
              <div className="emailwrapper">
                <input
                  required
                  name="email"
                  className="inputemail"
                  type="text"
                ></input>
                <label htmlFor="email" className="emaillabel">
                  Email
                </label>
              </div>
              <div className="descriptionwrapper">
                <textarea
                  required
                  name="description"
                  className="inputdescription"
                  type="text"
                  rows={5}
                />
                <label htmlFor="description" className="descriptionlabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
