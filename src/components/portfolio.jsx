import React from "react";

//import vmarine
import certificate1 from "../img/certificate1.jpg";
import certificate2 from "../img/certificate2.jpg";
import certificate3 from "../img/certificate3.jpg";
import certificate4 from "../img/certificate4.jpg";
import certificate5 from "../img/certificate5.jpg";
import certificate6 from "../img/certificate6.jpeg";
import certificate7 from "../img/certificate7.jpeg";
import certificate8 from "../img/certificate8.jpg";
import certificate9 from "../img/certificate9.jpeg";
import certificate10 from "../img/certificate10.jpg";
import certificate11 from "../img/certificate11.jpg";
import certificate12 from "../img/certificate12.jpg";
import certificate13 from "../img/certificate13.jpg";
import certificate14 from "../img/certificate14.jpg";
import certificate15 from "../img/certificate15.jpg";
import certificate16 from "../img/certificate16.jpg";
import certificate17 from "../img/certificate17.jpeg";

//import perspective project
import Perspective1 from "../img/Perspective1.png";
import Perspective2 from "../img/Perspective2.png";
import Perspective3 from "../img/Perspective3.png";
import Perspective4 from "../img/Perspective4.png";
import Perspective5 from "../img/Perspective5.png";
import Perspective6 from "../img/Perspective6.png";
import Perspective7 from "../img/Perspective7.png";
import Perspective8 from "../img/Perspective8.png";

//import ISA-HIT-Website
import isa1 from "../img/isa-img1.png";
import isa2 from "../img/isa-img2.png";
import isa3 from "../img/isa-img3.png";
import isa4 from "../img/isa-img4.png";
import isa5 from "../img/isa-img5.png";

//import open event
import openevent1 from "../img/open-event1.png";
import openevent2 from "../img/open-event2.png";
import openevent3 from "../img/open-event3.png";
import openevent4 from "../img/open-event4.png";
import openevent5 from "../img/open-event5.png";
import openevent6 from "../img/open-event6.png";
import openevent7 from "../img/open-event7.png";
import openevent8 from "../img/open-event8.png";

//import E-commerce
import ecommerce1 from "../img/E-commerce1.png";
import ecommerce2 from "../img/E-commerce2.png";
import ecommerce3 from "../img/E-commerce3.png";
import ecommerce4 from "../img/E-commerce4.png";

//import drone project
import drone1 from "../img/drone1.jpeg";
import drone2 from "../img/drone2.jpg";
import drone3 from "../img/drone3.jpg";

//aguadeluz pics
import aguaDeLuz from "../img/aguaDeLuz.png";
import aguaDeLuz1 from "../img/aguaDeLuz-1.png";
import aguaDeLuz2 from "../img/aguaDeLuz-2.png";
import aguaDeLuz3 from "../img/aguaDeLuz-3.png";
import aguaDeLuz4 from "../img/aguaDeLuz-4.png";

//import todo
import todoList from "../img/todolist.png";
import todoList1 from "../img/todo-1.png";
import todoList2 from "../img/todo-2.png";
import todoList3 from "../img/todo-3.png";

//import amtbw
import amtbw from "../img/amtbw.png";

//import medlingos
import medlingos from "../img/medlingos.jpg";
import medlingos1 from "../img/medlingos-1.jpg";
import medlingos2 from "../img/medlingos-2.jpg";
import medlingos3 from "../img/medlingos-3.jpg";
import medlingos4 from "../img/medlingos-4.jpg";

//import landing page
import product from "../img/product.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">Check Out My Latest Projects.</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {/*Certificates */}
            <div className="col-md-4">
              <div className="work-box">
                <a href={certificate5} data-lightbox="gallery-certificates">
                  <div className="work-img">
                    <img src={certificate5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Achievments</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            All Achievments and Award Certificate
                          </span>{" "}
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={certificate1}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate2}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate3}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate4}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate8}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate6}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate7}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate9}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate10}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate11}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate12}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate13}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate14}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate15}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate16}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate17}
                  data-lightbox="gallery-certificates"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            {/* Perspective Project */}

            <div className="col-md-4">
              <div className="work-box">
                <div style={{ textAlign: "right" }} className="socials">
                  <ul>
                    <li>
                      <a
                        href="https://github.com/rkrahulmishra887/Perpective-Projects"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="ico-circle">
                          <i className="ion-social-github"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <a href={Perspective1} data-lightbox="gallery-Perspective">
                  <div className="work-img">
                    <img src={Perspective1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Perspective for traders</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Javascript,Typescript,ReactJS,RestAPI,GIT,Financial
                            Analysis
                          </span>{" "}
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={Perspective2}
                  data-lightbox="gallery-Perspective"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Perspective3}
                  data-lightbox="gallery-Perspective"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Perspective4}
                  data-lightbox="gallery-Perspective"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Perspective5}
                  data-lightbox="gallery-Perspective"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Perspective6}
                  data-lightbox="gallery-Perspective"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Perspective7}
                  data-lightbox="gallery-Perspective"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Perspective8}
                  data-lightbox="gallery-Perspective"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            {/* fossasia open event server project */}

            <div className="col-md-4">
              <div className="work-box">
                <div style={{ textAlign: "right" }} className="socials">
                  <ul>
                    <li>
                      <a
                        href="https://github.com/rkrahulmishra887/Open-Event-Server-Project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="ico-circle">
                          <i className="ion-social-github"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <a href={openevent1} data-lightbox="gallery-openevent">
                  <div className="work-img">
                    <img src={openevent1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Open Event Server</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python,Javascript,Flask,uWSGI,AWS,Celery,GIT
                          </span>{" "}
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={openevent2}
                  data-lightbox="gallery-openevent"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={openevent3}
                  data-lightbox="gallery-openevent"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={openevent4}
                  data-lightbox="gallery-openevent"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={openevent5}
                  data-lightbox="gallery-openevent"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={openevent6}
                  data-lightbox="gallery-openevent"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={openevent7}
                  data-lightbox="gallery-openevent"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={openevent8}
                  data-lightbox="gallery-openevent"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            {/*ISA Website Project*/}

            <div className="col-md-4">
              <div className="work-box">
                <div style={{ textAlign: "right" }} className="socials">
                  <ul>
                    <li>
                      <a
                        href="https://github.com/rkrahulmishra887/ISA/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="ico-circle">
                          <i className="ion-social-github"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <a href={isa1} data-lightbox="gallery-isa">
                  <div className="work-img">
                    <img src={isa1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">ISA-HIT-Website</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            NodeJS ExpressJS ReactJS Webpack MongoDB GIT AWS
                            RestAPI
                          </span>{" "}
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={isa1}
                  data-lightbox="gallery-isa"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa2}
                  data-lightbox="gallery-isa"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa3}
                  data-lightbox="gallery-isa"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa4}
                  data-lightbox="gallery-isa"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa5}
                  data-lightbox="gallery-isa"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa2}
                  data-lightbox="gallery-isa"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa1}
                  data-lightbox="gallery-isa"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            {/*E-commerce website */}

            <div className="col-md-4">
              <div className="work-box">
                <div style={{ textAlign: "right" }} className="socials">
                  <ul>
                    <li>
                      <a
                        href="https://github.com/rkrahulmishra887/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="ico-circle">
                          <i className="ion-social-github"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <a href={ecommerce1} data-lightbox="gallery-ecommerce">
                  <div className="work-img">
                    <img src={ecommerce1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">E-commerce website</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python3,Django,SQL,GIT
                          </span>{" "}
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={ecommerce2}
                  data-lightbox="gallery-ecommerce"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ecommerce3}
                  data-lightbox="gallery-ecommerce"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ecommerce4}
                  data-lightbox="gallery-ecommerce"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ecommerce1}
                  data-lightbox="gallery-ecommerce"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ecommerce2}
                  data-lightbox="gallery-ecommerce"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ecommerce3}
                  data-lightbox="gallery-ecommerce"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ecommerce4}
                  data-lightbox="gallery-ecommerce"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            {/*IOT Drone Project */}

            <div className="col-md-4">
              <div className="work-box">
                <div style={{ textAlign: "right" }} className="socials">
                  <ul>
                    <li>
                      <a
                        href="https://github.com/rkrahulmishra887/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="ico-circle">
                          <i className="ion-social-github"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <a href={drone1} data-lightbox="gallery-iotdrone">
                  <div className="work-img">
                    <img src={drone1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                          IoT based drone for Military Application
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            RaspberryPi3b+,Pixhawk,Mission_Planner,Python3,Linux,
                            Opencv,Image_processing,GIT
                          </span>{" "}
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={drone1}
                  data-lightbox="gallery-iotdrone"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={drone2}
                  data-lightbox="gallery-iotdrone"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={drone3}
                  data-lightbox="gallery-iotdrone"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={drone1}
                  data-lightbox="gallery-iotdrone"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={drone2}
                  data-lightbox="gallery-iotdrone"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={drone3}
                  data-lightbox="gallery-iotdrone"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={drone1}
                  data-lightbox="gallery-iotdrone"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={aguaDeLuz} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={aguaDeLuz} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Agua De Luz</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Webpack SmoothScrolling
                            VanillaJS
                          </span>{" "}
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={aguaDeLuz1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={aguaDeLuz2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={aguaDeLuz3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={aguaDeLuz4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={todoList} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={todoList} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Todo List</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Webpack ReactJS
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={todoList1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={todoList2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={todoList3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={medlingos} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={medlingos} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Medlingos</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bootstrap ReactJS GoogleAPI
                          </span>
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={medlingos1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={medlingos2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={medlingos3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={medlingos4}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={amtbw} data-lightbox="gallery-amtbw">
                  <div className="work-img">
                    <img src={amtbw} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">A Mile To Be Wild</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Wordpress Blogging-Website
                          </span>
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={product} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={product} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Product Landing Page</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap
                          </span>
                          {/*/ <span className="w-date">18 Sep. 2017</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
