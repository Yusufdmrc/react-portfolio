import "./home.css";
import Profile from "../../assets/profil.jpeg";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="home" className="home-img" />

      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title">
            <span>I am Yusuf Demirci</span>
            <br />
            Frontend Web Developer
          </h1>

          <p className="home-description">
            I am a software engineering student at Doğuş University.I want to
            advance in front-end web development and I am improving myself. I do
            projects using HTML, CSS, Tailwind and Javascript.I am also learning
            React and want to be a React developer in the future.In the backend
            area, I know the C# programming language and the ASP.NET MVC
            Framework at a basic level.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button-icon">
              <HiArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color-block"></div>
    </section>
  );
};

export default Home;
