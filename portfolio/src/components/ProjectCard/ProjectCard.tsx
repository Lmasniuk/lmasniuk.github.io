import "./ProjectCard.scss"

export default function ProjectCard({ url, projectName, projectPreview }: { url: string, projectName: string, projectPreview: string }) {
  return (
    <div className="project-card">
      <a href={url}>

        <div className="project-card__preview">
          <img className="project-card__preview-image" src={projectPreview} alt={"Shrek 5 Countdown Preview"} />
        </div>

      </a>
      <div className="project-card__details">
        <h3>{projectName}</h3>
      </div>
    </div >
  )
}


