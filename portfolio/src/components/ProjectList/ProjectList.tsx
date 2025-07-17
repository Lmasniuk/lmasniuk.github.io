import "./ProjectList.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

import { PROJECTS } from "../../constants/projectsInfo";

export default function ProjectList() {
  return (
    <section className="project-list">
      <ProjectCard projectInfo={PROJECTS["roulette-regret"]} />
      <ProjectCard projectInfo={PROJECTS["team-genie"]} />
      <ProjectCard projectInfo={PROJECTS["atoms-game"]} />
      <ProjectCard projectInfo={PROJECTS["shrek-5-countdown"]} />
    </section>
  );
}
