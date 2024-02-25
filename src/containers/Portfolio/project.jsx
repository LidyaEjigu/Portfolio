import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeader.jsx";
import ImageOne from "../../images/IMG1.avif";
import ImageTwo from "../../images/IMG2.jpg";
import ImageThree from "../../images/IMG3.webp";
import ImageFour from "../../images/IMG 4.jpeg";
import ImageFive from "../../images/IMG5.webp";
import "./style.css";

const portfolioData = [
  {
    id: 2,
    name: "Shoes Website",
    image: ImageOne,
    link: "https://github.com/LidyaEjigu/Shoes_Website",
  },
  {
    id: 3,
    name: "Furniture Website",
    image: ImageTwo,
    link: "https://github.com/LidyaEjigu/Furniture_Website",
  },
  {
    id: 2,
    name: "Portfolio",
    image: ImageThree,
    link: "https://github.com/LidyaEjigu/Portifolio",
  },
  {
    id: 2,
    name: "Crud APP",
    image: ImageFour,
    link: "https://github.com/LidyaEjigu/MERN-CRUD",
  },
  {
    id: 3,
    name: "Compliant App",
    image: ImageFive,
    link: "https://github.com/LidyaEjigu/Complaint-App",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "ALL",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  function handleClick(link) {
    if (link) {
      window.open(link, '_blank');
    }
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="Project" className="Project">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio_content">
        <ul className="Portfolio_content_filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="Portfolio_content_cards">
          {filteredItems.map((item, index) => (
            <div
              className="Portfolio_content_cards_item"
              key={`cardItems${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="Portfolio_content_cards_item_img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => handleClick(item.link)}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
