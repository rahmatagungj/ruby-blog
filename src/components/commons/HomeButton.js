import React, { Component } from "react";

class HomeButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        href={this.props.href}
        className="button__standard border__accent__2"
        data-turbolinks={this.props.datas}
      >
        {this.props.name}
      </a>
    );
  }
}

export default HomeButton;
