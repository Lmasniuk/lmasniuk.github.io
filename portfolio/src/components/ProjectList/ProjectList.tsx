import "./ProjectList.scss"
import ProjectCard from "../ProjectCard/ProjectCard"

import shrekPreview from "../../assets/shrek5countdown-preview.jpeg"
import roulettePreview from "../../assets/logo_for_roulette_regret.jpeg"
import teamGeniePreview from "../../assets/team-genie-logo.jpeg"
import atomsgamePreview from "../../assets/atoms-logo.jpeg"


export default function ProjectList() {
    return (
        <section className="project-list">
            <ProjectCard projectName="Shrek 5 Countdown" url="https://shrek5countdown.com" projectPreview={shrekPreview} />
            <ProjectCard projectName="Roulette Regret" url="https://rouletteregret.bet" projectPreview={roulettePreview} />
            <ProjectCard projectName="Team Genie" url="https://team-genie.netlify.app" projectPreview={teamGeniePreview} />
            <ProjectCard projectName="Atoms Game" url="https://atomsgame.netlify.app" projectPreview={atomsgamePreview} />
        </section>
    )
}
