import React, { Component } from "react";
class HomeButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.href}>
        <button className="button__standard border__accent__2">
          {this.props.name}
        </button>
      </a>
    );
  }
}

export default HomeButton;
