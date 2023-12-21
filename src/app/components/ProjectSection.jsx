import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
    {
        id: 1,
        title: "JustPositivity",
        description: "Project description",
        image: "/images/JustPositivity.png",
        gitUrl: 'https://github.com/Mako11z/JustPositivity',
    },
    {
        id: 2,
        title: "StopHumanTrafficking",
        description: "Project description",
        image: "/images/StopHumanTrafficking.png",
        gitUrl: 'https://github.com/Mako11z/StopHumanTrafficking',
    },
    {
        id: 3,
        title: "VibeTrack",
        description: "Project description",
        image: "/images/VibeTrack.png",
        gitUrl: 'https://github.com/micnguyen-rnb90/VibeTrack',
    }
];

const ProjectSection = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {ProjectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} />)}
            </div>
        </div>
    );
};

export default ProjectSection;