import React from "react";
import HomeButton from "./commons/HomeButton";
import styled from "styled-components";

const Home = () => {
  return (
    <React.Fragment>
      <CenterMe>
        <div className="homes__content fade__in">
          <center>
            <div className="row mb__2" data-turbolinks-permanent>
              <div className="col__sm__12">
                <img src="/assets/images/my.webp" alt="Rahmat Agung Julians" />
                <H1>Rahmat Agung Julians</H1>
                <span>Technology Enthusiast | Philosophy | Logic</span>
                <br />
                <HomeButtons>
                  <HomeButton href="/blog" name="Blog" />
                  <HomeButton
                    href="https://app.rahmatagungjulians.tech"
                    name="Aplikasi"
                  />
                  <HomeButton href="/projek" name="Projek" />
                </HomeButtons>
              </div>
            </div>
          </center>
        </div>
      </CenterMe>
    </React.Fragment>
  );
};

const H1 = styled.h1`
  font-size: 1.9em;
  color: #fd4d4d;
`;

const CenterMe = styled.div`
  width: 100%;
  display: flex;
  height: 80vh;
  justify-content: center;
`;

const HomeButtons = styled.div`
  padding-top: 10px;
`;

export default Home;
