import "./ProjectCard.scss"
export default function ProjectCard({ url, projectName }: { url: string, projectName: string }) {
  return (
    <div className="project-card">

      <span>
        <h3>{projectName}</h3>
        <a href={url}>Link</a>
      </span>
    </div>
  )
}


