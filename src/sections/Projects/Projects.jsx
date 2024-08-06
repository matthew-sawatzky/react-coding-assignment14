import React from "react";
import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png"
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from "../../common/ProjectCard";

function projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://github.com/matthew-sawatzky"}
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link={"https://github.com/matthew-sawatzky"}
          h3="Fresh Burger"
          p="Burger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link={"https://github.com/matthew-sawatzky"}
          h3="Hipsster"
          p="Glasses Store"
        />
        <ProjectCard
          src={fitLift}
          link={"https://github.com/matthew-sawatzky"}
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default projects;
