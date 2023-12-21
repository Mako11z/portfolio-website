"use client"
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from 'framer-motion';

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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section className="mb-50" id='projects'>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {ProjectsData.map((project, index) => (
                    <motion.li 
                        variants={cardVariants} 
                        key={index} initial='initial' 
                        animate={isInView ? 'animate' : 'initial'}
                        transition={{ duration: 0.7, delay: index * 0.6  }}
                    >
                        <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image} 
                            gitUrl={project.gitUrl} 
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectSection;