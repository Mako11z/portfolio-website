import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
    {
        id: 1,
        title: "JustPositivity",
        description: "Project description",
        image: "/images/projects/1.png"
    },
    {
        id: 2,
        title: "StopHumanTrafficking",
        description: "Project description",
        image: "/images/projects/1.png"
    },
    {
        id: 3,
        title: "VibeTrack",
        description: "Project description",
        image: "/images/projects/1.png"
    }
];

const ProjectSection = () => {
    return (
        <div>
            <h2>My Projects</h2>
            <div>
                {ProjectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />)}
            </div>
        </div>
    );
};

export default ProjectSection;