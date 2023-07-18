import "./about.css";
import Info from "../../components/Info";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Yusuf Demirci.pdf";
import GithubStats from "../../components/GithubStats";

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
          </div>

          <div className="github-stats">
            <GithubStats />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
