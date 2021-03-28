import React, { Component } from "react";

class Home extends Component {
  state = {
    name: "Rahmat Agung Julians",
    about: "Technology Enthusiast | Philosophy | Logic",
  };

  render() {
    return (
      <React.Fragment>
        <div id="home"></div>
        <div className="center__screen">
          <div className="homes__content fade__in">
            <center>
              <div className="row mb-2" data-turbolinks-permanent>
                <div className="col-sm-12">
                  <img src="/assets/images/my.webp" alt={this.state.name} />
                  <h1>{this.state.name}</h1>
                  <span>{this.state.about}</span>
                  <br />
                  <div className="homes__button">
                    <a href="/blog" className="button__standard accent__2">
                      Blog
                    </a>
                    <a href="/projek" className="button__standard accent__2">
                      Projek
                    </a>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
