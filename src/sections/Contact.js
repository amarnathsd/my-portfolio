import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const ContactSection = () => {
  return (
    <section className="main_contact" id="contact">
      <div className="container">
        <div className="row contact_heading">
          <div className="contact_heading_content col-md-6">
            <p className="cline2">Let's work together</p>
            <div className="contact_heading_content_img">
              <Player
                src="https://assets1.lottiefiles.com/packages/lf20_w6y7r1ap.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              />
            </div>
          </div>
          <div className="contact_heading_svg col-md-6">
            <Player
              src="https://assets7.lottiefiles.com/packages/lf20_w7x9i6ag.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            />
          </div>
        </div>
      </div>

      <div className="circular_box">
        <div className="contact">
          <a className="contact_icons cicon1" href="https://github.com/amarnathsd?tab=repositories" target="_blank" rel="noreferrer">
            <Player
              className="github"
              src="https://assets1.lottiefiles.com/packages/lf20_6HFXXE.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            />
          </a>
          <a className="contact_icons cicon2" href="https://www.linkedin.com/in/amarnath-devshatwar-6386991b6/" target="_blank" rel="noreferrer">
            <Player
              className="linkedin"
              src="https://assets9.lottiefiles.com/packages/lf20_0Cm1Y2.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            />
          </a>
          <a className="contact_icons cicon3" href="mailto:amarnathdevshatwar07@gmail.com" target="_blank" rel="noreferrer">
            <Player
              className="gmail"
              src="https://assets10.lottiefiles.com/packages/lf20_a0reautd.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            />
          </a>
          <a className="contact_icons cicon4" href="https://x.com/AmarnathSanjay1?t=W79zRi6Kx5_nzGlJaWYu7Q&s=08" target="_blank" rel="noreferrer">
            <Player
              className="twitter"
              src="https://assets1.lottiefiles.com/private_files/lf30_oxdthhr1.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
