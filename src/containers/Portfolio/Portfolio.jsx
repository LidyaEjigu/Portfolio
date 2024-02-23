import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeader.jsx";


const Portfolio = () => {
  return (
    <section id="Project" className="Project">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Portfolio;
