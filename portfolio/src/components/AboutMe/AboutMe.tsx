import "./AboutMe.scss";

import react from "../../assets/technology-icons/react.svg";
import sass from "../../assets/technology-icons/sass.svg";
import typescript from "../../assets/technology-icons/typescript.svg";
import githubactions from "../../assets/technology-icons/githubactions.svg";
import javascript from "../../assets/technology-icons/javascript.svg";
import aws from "../../assets/technology-icons/aws.svg";
import bamboo from "../../assets/technology-icons/bamboo.svg";
import bitbucket from "../../assets/technology-icons/bitbucket.svg";
import css from "../../assets/technology-icons/css.svg";
import django from "../../assets/technology-icons/django.svg";
import docker from "../../assets/technology-icons/docker.svg";
import elasticsearch from "../../assets/technology-icons/elasticsearch.svg";
import express from "../../assets/technology-icons/express.svg";
import figma from "../../assets/technology-icons/figma.svg";
import flask from "../../assets/technology-icons/Flask.svg";
import git from "../../assets/technology-icons/git.svg";
import github from "../../assets/technology-icons/github.svg";
import html from "../../assets/technology-icons/html.svg";
import java from "../../assets/technology-icons/java.svg";
import jenkins from "../../assets/technology-icons/jenkins.svg";
import jira from "../../assets/technology-icons/jira.svg";
import kibana from "../../assets/technology-icons/kibana.svg";
import logstash from "../../assets/technology-icons/logstash.svg";
import mysql from "../../assets/technology-icons/mysql.svg";
import nodejs from "../../assets/technology-icons/nodejs.svg";
import npm from "../../assets/technology-icons/npm.svg";
import okta from "../../assets/technology-icons/okta.svg";
import postgres from "../../assets/technology-icons/postgres.svg";
import postman from "../../assets/technology-icons/postman.svg";
import python from "../../assets/technology-icons/python.svg";
import redis from "../../assets/technology-icons/redis.svg";
import spring from "../../assets/technology-icons/spring.svg";
import sqlserver from "../../assets/technology-icons/sqlserver.svg";
import vscode from "../../assets/technology-icons/vscode.svg";
import intellij from "../../assets/technology-icons/intellij.svg";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <p>
        Hi, I'm Logan, a full stack software developer with 10+ years of
        experience building scalable web applications using JavaScript, Java,
        and Python. I'm a Proven leader and educator with passion for clean
        code, mentoring and delivering high impact solutions across agile teams.
      </p>
      <h3 className="about-me__technologies">Technologies</h3>
      <h4 className="about-me__technologies-subset">Languages</h4>
      <ul className="about-me__technologies-list">
        <img className="about-me__technologies-icon" src={html} alt="HTML" />

        <img className="about-me__technologies-icon" src={css} alt="CSS" />
        <img className="about-me__technologies-icon" src={sass} alt="Sass" />
        <img
          className="about-me__technologies-icon"
          src={javascript}
          alt="JavaScript"
        />
        <img
          className="about-me__technologies-icon"
          src={typescript}
          alt="TypeScript"
        />
        <img
          className="about-me__technologies-icon"
          src={python}
          alt="Python"
        />
        <img className="about-me__technologies-icon" src={java} alt="Java" />
      </ul>

      <h4 className="about-me__technologies-subset">Libraries & Frameworks</h4>
      <ul className="about-me__technologies-list">
        <img className="about-me__technologies-icon" src={react} alt="React" />
        <img
          className="about-me__technologies-icon"
          src={nodejs}
          alt="Node.js"
        />
        <img className="about-me__technologies-icon" src={npm} alt="npm" />
        <img
          className="about-me__technologies-icon"
          src={express}
          alt="Express"
        />
        <img
          className="about-me__technologies-icon"
          src={django}
          alt="Django"
        />
        <img className="about-me__technologies-icon" src={flask} alt="Flask" />
        <img
          className="about-me__technologies-icon"
          src={spring}
          alt="Spring"
        />
      </ul>
      <h4 className="about-me__technologies-subset">
        Databases & Data Technologies
      </h4>
      <ul className="about-me__technologies-list">
        <img className="about-me__technologies-icon" src={git} alt="Git" />
        <img
          className="about-me__technologies-icon"
          src={github}
          alt="GitHub"
        />
        <img
          className="about-me__technologies-icon"
          src={bitbucket}
          alt="Bitbucket"
        />
        <img
          className="about-me__technologies-icon"
          src={postgres}
          alt="Postgres"
        />
        <img className="about-me__technologies-icon" src={mysql} alt="MySQL" />
        <img
          className="about-me__technologies-icon"
          src={sqlserver}
          alt="SQL Server"
        />
        <img className="about-me__technologies-icon" src={redis} alt="Redis" />
        <img
          className="about-me__technologies-icon"
          src={elasticsearch}
          alt="Elasticsearch"
        />
        <img
          className="about-me__technologies-icon"
          src={logstash}
          alt="Logstash"
        />
        <img
          className="about-me__technologies-icon"
          src={kibana}
          alt="Kibana"
        />
      </ul>
      <h4 className="about-me__technologies-subset">DevOps & Cloud</h4>
      <ul className="about-me__technologies-list">
        <img
          className="about-me__technologies-icon"
          src={docker}
          alt="Docker"
        />
        <img className="about-me__technologies-icon" src={aws} alt="AWS" />
        <img
          className="about-me__technologies-icon"
          src={githubactions}
          alt="Github Actions"
        />
        <img
          className="about-me__technologies-icon"
          src={bamboo}
          alt="Bamboo"
        />
        <img
          className="about-me__technologies-icon"
          src={jenkins}
          alt="Jenkins"
        />
      </ul>
      <h4 className="about-me__technologies-subset">Tools & Platforms</h4>
      <ul className="about-me__technologies-list">
        <img
          className="about-me__technologies-icon"
          src={vscode}
          alt="VS Code"
        />
        <img
          className="about-me__technologies-icon"
          src={intellij}
          alt="IntelliJ IDEA"
        />
        <img className="about-me__technologies-icon" src={jira} alt="Jira" />
        <img className="about-me__technologies-icon" src={okta} alt="Okta" />
        <img
          className="about-me__technologies-icon"
          src={postman}
          alt="Postman"
        />
        <img className="about-me__technologies-icon" src={figma} alt="Figma" />
      </ul>
    </section>
  );
}
