import React, { useEffect } from 'react';
import AOS from 'aos';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  useEffect(() => {
    AOS.init();
  
    const skills = [
      ".react", ".node", ".java", ".firebase", ".html", ".postman",
      ".javascript", ".css", ".vscode", ".github"
    ];
  
    skills.forEach((skillClass) => {
      gsap.to(skillClass, {
        scrollTrigger: {
          trigger: skillClass,
          start: "top 90%",
          end: "top 65%",
          scrub: true,
        },
        opacity: 1,
        scale: 1,
        ease: "none",
      });
    });
  
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box",
        start: "top center",      // Starts pinning when the top of the box reaches the center of the viewport
        end: "bottom center",     // Ends pinning when the bottom of the box reaches the center
        scrub: true,
        pin: true,                // Pins the element to the center
      },
      height: "90%",
      opacity: 1,
      ease: "none",
      duration: 1,
    });
  }, []);

  return (
    <section className="skill_section" id="skills">
      <div className="project_headingz">Skills</div>
      <div className="all_skills">
        <div className="my_skills container">
          <div className="row skill_row">
            <div className="col-md-5 col-sm-5 col-5 skillset">
              <div className="skill_set1">
                <div className="skill_in_set1 react">REACT JS</div>
                <div className="skill_in_set1 node">NODE JS</div>
                <div className="skill_in_set1 java">JAVA</div>
                <div className="skill_in_set1 firebase">FIREBASE</div>
                <div className="skill_in_set1 html">HTML</div>
                <div className="skill_in_set1 postman">POSTMAN</div>
              </div>
            </div>

            <div className="col-md-2 col-sm-2 col skill_line">
              <div className="box"></div>
            </div>

            <div className="col-md-5 col-sm-5 col-5 skillset">
              <div className="skill_set2">
                <div className="skill_in_set2 javascript">JAVASCRIPT</div>
                <div className="skill_in_set2 css">CSS</div>
                <div className="skill_in_set2 vscode">VS CODE</div>
                <div className="skill_in_set2 github">GITHUB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
