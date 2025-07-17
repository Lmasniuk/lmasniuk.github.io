import type { ProjectInfoType } from "../types/ProjectInfoType";

import shrekPreview from "../assets/shrek5countdown-preview.jpeg";
import roulettePreview from "../assets/logo_for_roulette_regret.jpeg";
import teamGeniePreview from "../assets/team-genie-logo.jpeg";
import atomsgamePreview from "../assets/atoms-logo.jpeg";

export const PROJECTS: Record<string, ProjectInfoType> = {
  "roulette-regret": {
    name: "Roulette Regret",
    url: "https://rouletteregret.bet",
    projectPreview: roulettePreview,
    description: "A roulette betting simulator",
  },
  "team-genie": {
    name: "Team Genie",
    url: "https://team-genie.netlify.app",
    projectPreview: teamGeniePreview,
    description:
      "Create random groups balanced of a specified size from a list of name and grades",
  },
  "atoms-game": {
    name: "Atoms Game",
    url: "https://atomsgame.netlify.app",
    projectPreview: atomsgamePreview,
    description:
      "An addicitive multiplayer game where you place atoms in a grid until your opponent has none left!",
  },
  "shrek-5-countdown": {
    name: "Shrek 5 Countdown",
    url: "https://shrek5countdown.com",
    projectPreview: shrekPreview,
    description: "A countdown to the release of Shrek 5, with a fun twist!",
  },
};
