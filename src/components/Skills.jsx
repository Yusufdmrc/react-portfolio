import { skills } from "../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div key={index} className="progress-box">
            <div className="progress-circle">
              <CircularProgressbar
                strokeWidth={8}
                text={`${percentage}%`}
                value={percentage}
              />
            </div>
            <h3 className="skills-title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
