import React from "react";
import IMG1 from "../../assets/anilog.png";
import IMG2 from "../../assets/SyncFit_ICON.png";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Anilog",
    github: "https://github.com",
    demo: "none",
  },
  {
    id: 1,
    image: IMG2,
    title: "Anilog",
    github: "https://github.com",
    demo: "none",
  },
  {
    id: 1,
    image: IMG1,
    title: "Anilog",
    github: "https://github.com",
    demo: "none",
  },
  {
    id: 1,
    image: IMG2,
    title: "Anilog",
    github: "https://github.com",
    demo: "none",
  },
  {
    id: 1,
    image: IMG1,
    title: "Anilog",
    github: "https://github.com",
    demo: "none",
  },
  {
    id: 1,
    image: IMG2,
    title: "Anilog",
    github: "https://github.com",
    demo: "none",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
