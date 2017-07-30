import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const ProjectTile = React.createClass({
  render() {
    const { image, link, header, description, technologies } = this.props;
    return (
      <div className="project-container">
        <div className="project-text">
          <div className="project-header">{header}</div>
          <div className="project-description">{description}</div>
          <div className="project-technologies">{technologies}</div>
        </div>
        <a
          className="project-tile"
          href={link}
          target="_blank"
        >
          <img
            className="project-image"
            src={image}
          >
          </img>
        </a>
      </div>

    );
  },
});

export default ProjectTile;
