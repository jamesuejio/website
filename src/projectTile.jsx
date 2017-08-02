import React from 'react';
import './App.css';

const ProjectTile = React.createClass({
  render() {
    const { image, link, header, description, technologies } = this.props;
    return (
      <div className="project-container">
        <a
          className="project-tile"
          href={link}
          target="_blank"
        >
          <div className="project-text">
            <div className="project-header">{header}</div>
            <div className="project-description">{description}</div>
            <div className="project-technologies">{technologies}</div>
          </div>
          <img
            className="project-image"
            src={image}
            alt=''
          >
          </img>
        </a>
      </div>

    );
  },
});

export default ProjectTile;
