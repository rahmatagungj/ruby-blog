import React, { Component } from "react";
import HomeButton from "./commons/HomeButton";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="center__screen">
          <div className="homes__content fade__in">
            <center>
              <div className="row mb__2" data-turbolinks-permanent>
                <div className="col__sm__12">
                  <img
                    src="/assets/images/my.webp"
                    alt="Rahmat Agung Julians"
                  />
                  <h1>Rahmat Agung Julians</h1>
                  <span>Technology Enthusiast | Philosophy | Logic</span>
                  <br />
                  <div className="homes__button">
                    <HomeButton href="/blog" name="Blog" />
                    <HomeButton href="https://app.rahmatagungjulians.tech" name="Aplikasi" />
                    <HomeButton href="/projek" name="Projek" />
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
