import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Weather Dashboard",
      description:
        "Weather Dashboard test text. This is just a short description to test put the spacing!",
      image: "weatherdashboard.png",
      github: "https://github.com/browniecharl/weather-dashboard-challenge",
      deployed: "https://browniecharl.github.io/weather-dashboard-challenge/",
    },
    {
      name: "Scheduler",
      description:
        "Scheduler test text. This is just a short description to test put the spacing!",
      image: "dayScheduler.png",
      github: "https://github.com/browniecharl/scheduler-challenge",
      deployed: "https://browniecharl.github.io/scheduler-challenge/",
    },
    {
      name: "Just Music Reviews",
      description:
        "Just music reviews test text. This is just a short description to test put the spacing!",
      image: "musicReview.png",
      github: "https://github.com/Arankin7/JustMusicReviews",
      deployed: "https://blooming-headland-30084.herokuapp.com/",
    },
    {
      name: "Music Dashboard",
      description:
        "Music Dashboard test text. This is just a short description to test put the spacing!",
      image: "musicSearch.png",
      github: "https://github.com/Arankin7/project1_MusicDashboard",
      deployed: "https://arankin7.github.io/project1_MusicDashboard/",
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
