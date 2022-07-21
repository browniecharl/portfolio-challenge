import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
  const currentProject = useState(props)[0].projects;
  const name = currentProject.name;
  const description = currentProject.description;
  const image = currentProject.image;
  const depLink = currentProject.depLink;
  const gitLink = currentProject.gitLink;

  return (
    <Card className="project-card" style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={require(`../../assets/images/${image}`)}
        className="card-image"
      />
      <div>
        <Card.Body>
          <Card.Title className="card-title is-size-3 pb-3">{name}</Card.Title>
          <Card.Text className="card-text">{description}</Card.Text>
          <Card.Link
            href={depLink}
            target="_blank"
            className="card-link has-text-white"
          >
            {name} App
          </Card.Link>
          <br></br>
          <Card.Link
            href={gitLink}
            target="_blank"
            className="card-link has-text-white"
          >
            {name} GitHub
          </Card.Link>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Project;
