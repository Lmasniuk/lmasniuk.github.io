import "./ProjectCard.scss";

import type { ProjectInfoType } from "../../types/ProjectInfoType";

export default function ProjectCard({
  projectInfo,
}: {
  projectInfo: ProjectInfoType;
}) {
  return (
    <div className="project-card">
      <a href={projectInfo.url}>
        <div className="project-card__preview">
          <img
            className="project-card__preview-image"
            src={projectInfo.projectPreview}
            alt={"Shrek 5 Countdown Preview"}
          />
        </div>
      </a>
      <div className="project-card__details">
        <h3>{projectInfo.name}</h3>
        <p>{projectInfo.description}</p>
      </div>
    </div>
  );
}
