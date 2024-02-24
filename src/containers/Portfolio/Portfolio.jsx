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
    name: " Furniture Website",
    image: ImageTwo,
    link: "",
  },
  {
    id: 2,
    name: "Portfolio",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Crud APP ",
    image: ImageFour,
    link: "",
  },
  {
    id: 3,
    name: "Compliant App",
    image: ImageFive,
    link: "",
  },
];
const filterData = [
  {
    filterId: 1,
    lable: "ALL",
  },
  {
    filterId: 2,
    lable: "Development",
  },
  {
    filterId: 3,
    lable: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilterdvalue] = useState(1);
  const [hoveredvalue, sethoveredvalue] = useState(null);

  function handleFilter(currentId) {
    setFilterdvalue(currentId);
  }
  function handleHover(index) {
    sethoveredvalue(index);
  }
  console.log("=================");
  console.log(hoveredvalue);
  console.log("=================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);
  console.log(filteredItems);

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
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.lable}
            </li>
          ))}
        </ul>
        <div className="Portfolio_content_cards">
          {filteredItems.map((item,index) => (
            <div
              className="Portfolio_content_cards_item"
              key={`cardItems${item.name.trim()}`}
              onMouseEnter={()=>handleHover(index)}
              onMouseLeave={()=>handleHover(null)}
            >
              <div className="Portfolio_content_cards_item_img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {
                  index === hoveredvalue &&(
                    <div>
                      <p>{item.name}</p>
                      <button>visit</button>
                    </div>
                  )
                }

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
