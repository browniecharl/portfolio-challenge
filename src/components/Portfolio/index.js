import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Weather Dashboard",
      description: "Weather Dashboard test text. Description will go here",
      image: "weather-dashboard.png",
    },
    {
      name: "Scheduler",
      description: "Scheduler test text. Description will go here",
      image: "scheduler-screenshot.png",
    },
    {
      name: "Just Music Reviews",
      description: "Just music reviews test text. Description will go here",
      image: "homepage.png",
    },
    {
      name: "Music Dashboard",
      description: "Music Dashboard test text. Description will go here",
      image: "lyrics-ss.png",
    },
  ];
  return (
    <section className="portfolioProjects has-text-centered">
      <div>
        <h1 className=" portfolioHead has-text-centered is-size-1 has-text-weight-bold">
          <i class="fa-solid fa-book-open fa-2xs"></i> My Portfolio
        </h1>
        <div className="portfolioCards">
          <ul className="mobile-row">
            <div>
              <li className="weatherdashboard">
                <Project projects={projects[0]}></Project>
              </li>
            </div>
            <div>
              <li className="scheduler">
                <Project projects={projects[1]}></Project>
              </li>
            </div>
            <div>
              <li className="justmusicreviews">
                <Project projects={projects[2]}></Project>
              </li>
            </div>
            <li className="musicdashboard">
              <Project projects={projects[3]}></Project>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
