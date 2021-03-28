import React, { Component } from "react";

class HeaderProject extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          class="row mb-2 myhead toolbar sticky__top"
          data-turbolinks-permanent
        >
          <div class="col-sm-3">
            <a href="/" class="back__button">
              BERANDA
            </a>
          </div>
          <div class="col-sm-9 text-muted small righted">
            <a
              href="https://github.com/rahmatagungj"
              rel="noopener noreferer"
              target="_blank"
              class="accent__2"
            >
              GITHUB
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderProject;
