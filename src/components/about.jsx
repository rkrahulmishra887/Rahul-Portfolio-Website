import React from "react";
import myImage from "../img/myImage.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "K8S",
          content: "K8S",
          porcentage: "60%",
          value: "60",
        },
        {
          id: "Docker",
          content: "Docker",
          porcentage: "80%",
          value: "80",
        },
        { id: "AI Automation & DevOps", content: "AI Automation & DevOps", porcentage: "90%", value: "90" },
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "CI/CD",
          content: "CI/CD",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "Java",
          content: "Java",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "Linux_skill",
          content: "Linux",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "RestAPI_skill",
          content: "RestAPI",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "AWS_skill",
          content: "AWS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Docker",
          content: "Docker",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Kubernetes",
          content: "Kubernetes",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "GIT_skill",
          content: "GIT",
          porcentage: "80%",
          value: "80",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a passionate Software Engineer with expertise in both front-end and back-end development. I specialize in transforming innovative ideas into scalable, efficient, and engaging applications using JavaScript, ReactJs, HTML5, CSS3, and modern frameworks."
        },
        {
          id: "second-p-about",
          content:
            "With hands-on experience across the full software development life cycle—from design and coding to testing, debugging, and deployment—I thrive on building solutions that solve real-world problems. My approach combines object-oriented principles with cutting-edge technologies to deliver seamless and robust user experiences."
        },
        {
          id: "third-p-about",
          content:
            "Motivated, detail-oriented, and collaborative, I enjoy working with cross-functional teams to bring complex projects to life. I believe in continuous learning and am always exploring new technologies, libraries, and best practices to stay ahead in the fast-evolving software industry."
        },
        {
          id: "fourth-p-about",
          content:
            "I have developed custom websites and applications that balance functionality, performance, and aesthetics. I pay special attention to responsive design, smooth animations, and intuitive user interfaces that enhance the overall experience for end-users."
        },
        {
          id: "fifth-p-about",
          content:
            "Though early in my career, I have demonstrated the ability to adapt quickly, solve challenging problems, and deliver high-quality code. My focus is not just on writing code, but on crafting solutions that are maintainable, scalable, and impactful."
        },
        {
          id: "sixth-p-about",
          content:
            "Beyond coding, I am passionate about contributing to projects that make a difference, whether through open-source contributions, innovative startup initiatives, or collaboration with forward-thinking teams. I thrive in environments where creativity meets technical excellence."
        },
        {
          id: "seventh-p-about",
          content:
            "Ultimately, my goal is to leverage my skills and passion for technology to create software that not only meets client requirements but also elevates the user experience, drives business growth, and contributes positively to the tech community."
        }
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={myImage}
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* <div className="col-sm-6 col-md-7">
                                                <div className="about-info">
                                                <p><span class="title-s">Name: </span> <span>Frank Izquierdo</span></p>
                                                <p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
                                                <p><span class="title-s">Email: </span> <span>contact@example.com</span></p>
                                                <p><span class="title-s">Phone: </span> <span>(617) 557-0089</span></p>
                                                </div>
                                            </div> */}
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
