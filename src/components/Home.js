import React, { Component } from "react";
import HomeButton from "./commons/HomeButton";

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
              <div className="row mb__2" data-turbolinks-permanent>
                <div className="col__sm__12">
                  <img src="/assets/images/my.webp" alt={this.state.name} />
                  <h1>{this.state.name}</h1>
                  <span>{this.state.about}</span>
                  <br />
                  <div className="homes__button">
                    <HomeButton href="/blog" name="Blog" datas="true" />
                    <HomeButton href="/projek" name="Projek" datas="false" />
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
