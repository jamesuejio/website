import React from "react";
import "./LeftBody.css";

const ProjectTile = ({ image, link, header, description, technologies }) => {
  return (
    <div className="project-container">
      <a
        className="project-tile"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project-text">
          <div className="project-header">{header}</div>
          <div className="project-description">{description}</div>
          <div className="project-technologies">{technologies}</div>
        </div>
        <img className="project-image" src={image} alt=""></img>
      </a>
    </div>
  );
};

export default ProjectTile;
