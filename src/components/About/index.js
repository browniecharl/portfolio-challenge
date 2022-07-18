import React from "react";

function About() {
  return (
    <section>
      <h1 className="aboutMeHead has-text-centered is-size-1 has-text-weight-bold">
        About Me
      </h1>
      <div className="has-text-centered">
        <img
          className="profilePic"
          src={require("../../../src/assets/IMG_316.png")}
          alt="profilePhoto"
          width="45%"
          height="45%"
        />
      </div>
      <div className="columns is-mobile" id="wrapper">
        <div className="column is-2"></div>
        <div className="column has-text-black has-text-centered">
          <p className="aboutText" id="wrapperContent">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="column is-2"></div>
      </div>
    </section>
  );
}

export default About;
