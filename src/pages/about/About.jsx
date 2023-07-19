import "./about.css";
import Info from "../../components/Info";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Yusuf Demirci.pdf";
import GithubStats from "../../components/GithubStats";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
import { GiClick } from "react-icons/gi";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Infos</h3>
            <ul className="info-list grid">
              <Info />
            </ul>
            <a href={CV} download="" className="button">
              My CV{" "}
              <span className="button-icon">
                <FaDownload />
              </span>
            </a>
            <a href="https://github.com/Yusufdmrc" className="button">
              Github
              <span className="button-icon">
                <GiClick />
              </span>
            </a>
          </div>

          <div className="github-stats">
            <GithubStats />
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center">My Skills</h3>
        <div className="skills-container grid">
          <Skills />
        </div>
      </section>

      <div className="divider"></div>

      <section className="resume">
        <h3 className="section-subtitle subtitle-center">
          Experience & Education
        </h3>

        <div className="resume-container grid">
          <div className="resume-data">
            {resume.map((value) => {
              if (value.category === "experience") {
                return <ResumeItem key={value.id} {...value} />;
              }
            })}
          </div>
          <div className="resume-data">
            {resume.map((value) => {
              if (value.category === "education") {
                return <ResumeItem key={value.id} {...value} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
