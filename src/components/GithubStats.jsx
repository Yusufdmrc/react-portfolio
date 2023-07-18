import { githubStats } from "../data";
import parse from "html-react-parser";

const GithubStats = () => {
  return (
    <>
      {githubStats.map(({ number, title }, index) => {
        return (
          <div className="stats-box" key={index}>
            <h3 className="stats-number">{number}</h3>
            <p className="stats-title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default GithubStats;
