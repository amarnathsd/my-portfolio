// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="background intro">
      <div className="container intro_container">
        <div className="row intro_boxes">
          <div className="col-lg-6 col-md-12 intro_box1">
            <h1 className="name">Hi, I'm Amarnath Devshatwar</h1>
            <p className="bio">
              A passionate Web Developer 🚀 with experience in building web applications
              using JavaScript / React.js and other modern frameworks.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 intro_box2">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_vnikrcia.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              className="box2_svg_img1"
            ></lottie-player>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
