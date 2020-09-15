import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/RahulProfile.jpg"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Rahul Mishra</h2>
            <h4 style={{ color: "grey" }}>Software Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              AWS Certified Trainer, MERN Full Stack Developer, ICSI | CNSS
              Certified Network Security Specialist, Intern at J.P.Moragan ,
              Virtual Intern at microsoft.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>
              H/O Justice Mridula Mishra, Jagat Narayan Road, Kadamkuan, Patna -
              800003, Bihar, India
            </p>
            <h5>Mobile</h5>
            <p>8292220938</p>
            <h5>Email</h5>
            <p>rkrahulmishra88714@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2017}
              endYear={2021}
              schoolName="Haldia Institute of Technology "
              schoolDescription="B.tech in Electronics and Instrumentation"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="J.P.Morgan"
              jobDescription="Software Developer Intern"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={90} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={80} />
            <Skills skill="ReactJS" progress={70} />
            <Skills skill="ExpressJS" progress={70} />
            <Skills skill="MongoDB" progress={70} />
            <Skills skill="RestAPI" progress={80} />
            <Skills skill="GIT" progress={90} />
            <Skills skill="AWS" progress={70} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
