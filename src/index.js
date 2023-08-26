import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML and CSS",
    level: "advanced",
    color: "#B7E751"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "lightyellow"
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "lightblue"
  },
  {
    skill: "ReactJS",
    level: "intermediate",
    color: "#01FF23"
  },
  {
    skill: "Python",
    level: "beginner",
    color: "#F1F630"
  },
  {
    skill: "PHP",
    level: "beginner",
    color: "#47E721"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function Avatar() {
  const img = "/potrait.jpg";
  return <img src={img} alt="Potrait" className="avatar" />;
}

function Intro() {
  return (
    <>
      <h2>Hello my name is Mike Koenders</h2>
      <p>
        I am a developer from Düsseldorf. I love to be part of a cool project as
        a project manager or developer or data analyst. I`ll give my best to
        make your dream come true.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <ul className="skillList">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  console.log(skillObj);
  return (
    <li>
      <p className="skill" style={{ backgroundColor: skillObj.color }}>
        {skillObj.skill}
        <SkillLevel skillObj={skillObj} key={skillObj.skill} />
      </p>
    </li>
  );
}

function SkillLevel({ skillObj }) {
  return (
    <>
      {skillObj.level === "beginner" ? (
        <span>🐣</span>
      ) : skillObj.level === "intermediate" ? (
        <span>👍</span>
      ) : (
        <span>🚀</span>
      )}
    </>
  );
}
