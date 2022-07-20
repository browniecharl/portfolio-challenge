import React from "react";

function Resume() {
  return (
    <section className="resumePage">
      <div className="columns is-mobile">
        <div className="column"></div>
        <div className="column is-two-thirds" id="wrapper">
          <h1 className="resumeHead has-text-centered is-size-1 has-text-weight-bold">
            <i class="fa-solid fa-file fa-2xs"></i> Resume
          </h1>
          <div className="pb-4" id="wrapperContent">
            <h2 className="has-text-centered has-text-white mb-2 is-size-3 is-underlined">
              Front-End Proficiencies
            </h2>
            <ul className="has-text-centered pb-4">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>JQUERY</li>
              <li>RESPONSIVE DESIGN</li>
              <li>REACT</li>
              <li>BOOTSTRAP</li>
            </ul>

            <div>
              <h2 className="has-text-centered has-text-white mb-2 is-size-3 is-underlined">
                Back-End Proficiencies
              </h2>
              <ul className="has-text-centered">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>Rest</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </section>
  );
}

export default Resume;
