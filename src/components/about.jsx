import React from "react";
// import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        // { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Python_skill",
          content: "Redux",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "Python_skill",
          content: "Node js",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "Python_skill",
          content: "Mongo DB",
          porcentage: "50%",
          value: "50"
        },
        // {
        //   id: "Python_skill",
        //   content: "Redux",
        //   porcentage: "65%",
        //   value: "65"
        // },
        {
          id: "Python_skill",
          content: "MySql",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "Python_skill",
          content: "DevOps",
          porcentage: "85%",
          value: "85"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a Full Stack Developer with almost a 2 years of experience specializing in React/Redux , Java , Node.js I have experience in developing and deploying websites utilizing various open-source packages as well as Content Management Systems (CMS) such WordPress. In addition, I have worked on enterprise-level web projects"
        },
        {
          id: "second-p-about",
          content:
            "My hands On Technologies are React , Java , SpringBoot , MongoDB , NodeJs , HTML,CSS,JS Also DevOps Skill Include git , svn , aws I have extensive experience in HTML, CSS, JavaScript, and various open-source frameworks such as NodeJS, ExpressJS, AngularJS, MongoDB, and CouchDB. I am skilled in the use of these frameworks to develop web applications based on Single Page Applications (SPA) architectures. I also possess skills in writing complex SQL queries using popular database servers such as MySQL"
        },
        {
          id: "third-p-about",
          content:
            "In addition to my development work, I am skilled in troubleshooting problems and resolving bugs within an existing system. Full Stack Developer | JAVA | Full Stack Developer | ReactJS"
        }
      ]
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
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
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
                      {this.state.about_me.map(content => {
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
