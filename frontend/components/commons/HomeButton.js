import React, { Component } from "react";

class HomeButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.href} className="button__standard accent__2">
        {this.props.name}
      </a>
    );
  }
}

export default HomeButton;
