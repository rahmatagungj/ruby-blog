import React, { Component } from "react";

class ProjectListSmall extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row mb-2">
        <div className="project__list project__slims">
          <a
            href={this.props.href}
            target="_blank"
            rel="noopener noreferrer"
            alt={this.props.title}
          >
            <h1>{this.props.title}</h1>
          </a>
          <span>{this.props.description}</span>
        </div>
      </div>
    );
  }
}

export default ProjectListSmall;
