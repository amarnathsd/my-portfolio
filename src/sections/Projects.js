// Projects.js
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Import images directly
import pro1 from '../img/pro1.png';
import pro2 from '../img/pro2.png';
import pro3 from '../img/pro3.png';

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <section className="project" id="project">
            <div className="project_heading">Projects</div>
            <div className="project_box">
                <div className="container">
                    <div className="row project_row">
                        <div className="col-lg-7 project_img" data-aos="slide-left"
                             style={{ backgroundImage: `url(${pro1})` }}>
                        </div>
                        <div className="col-lg-5 project_info">
                            <div className="project_title"><b>Financely</b></div>
                            <div className="project_detail">
                                Developed a React-based multi-page web application for expense and income tracking, featuring dynamic graphs and pie charts for enhanced visualization.
                            </div>
                            <div className="techStack">Tech Stack: React, Firebase, JavaScript</div>
                            <div className="project_demo">
                                <a href="https://transcendent-babka-d9cda9.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="project_link">Live Link</button>
                                </a>
                                <a href="https://github.com/amarnathsd/financely" target="_blank" rel="noopener noreferrer">
                                    <button className="project_link">Source Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row project_row">
                        <div className="col-lg-5 project_info project_info_even">
                            <div className="project_title"><b>Dictionary App</b></div>
                            <div className="project_detail">
                                A web app created using React that helps users search for the meanings of words and their pronunciations with different accents.
                            </div>
                            <div className="techStack">Tech Stack: React, Redux, CSS, API</div>
                            <div className="project_demo">
                                <a href="https://amarnathsd.github.io/dictionary-module-f4/" target="_blank" rel="noopener noreferrer">
                                    <button className="project_link">Live Link</button>
                                </a>
                                <a href="https://github.com/amarnathsd/dictionary-module-f4" target="_blank" rel="noopener noreferrer">
                                    <button className="project_link">Source Code</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 project_img" data-aos="slide-right"
                             style={{ backgroundImage: `url(${pro2})` }}>
                        </div>
                    </div>

                    <div className="row project_row">
                        <div className="col-lg-7 project_img" data-aos="slide-left"
                             style={{ backgroundImage: `url(${pro3})` }}>
                        </div>
                        <div className="col-lg-5 project_info">
                            <div className="project_title"><b>Shopping Cart Application</b></div>
                            <div className="project_detail">
                                A web application where users can view product details by registering, add products to the cart, and make purchases.
                            </div>
                            <div className="techStack">Tech Stack: HTML, CSS, React</div>
                            <div className="project_demo">
                                <a href="https://amarnathsd.github.io/cart/" target="_blank" rel="noopener noreferrer">
                                    <button className="project_link">Live Link</button>
                                </a>
                                <a href="https://github.com/amarnathsd/cart" target="_blank" rel="noopener noreferrer">
                                    <button className="project_link">Source Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="show_all_project">
                        <a href="https://github.com/amarnathsd?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <lottie-player className="all_project_icon"
                                src="https://assets1.lottiefiles.com/packages/lf20_80nu1g6c.json" speed="1" loop autoplay></lottie-player>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
