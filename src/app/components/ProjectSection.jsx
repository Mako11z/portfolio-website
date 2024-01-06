"use client"
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from 'framer-motion';

const ProjectsData = [
    {
        id: 1,
        title: "JustPositivity",
        description: "JustPositivity is a platform designed to promote positivity by allowing users to reflect and create positive entries. Whether it's a moment of gratitude, a personal achievement, or a source of inspiration, JustPositivity is a space to celebrate positivity.",
        image: "/images/JustPositivity.png",
        gitUrl: 'https://github.com/Mako11z/JustPositivity',
        previewUrl: 'https://github.com/Mako11z/JustPositivity/blob/master/JustPositivityW.gif',
    },
    {
        id: 2,
        title: "StopHumanTrafficking",
        description: "This website is dedicated to raising awareness about human trafficking, a heinous crime that affects millions of people globally. Our goal is to provide information, resources, and actionable steps for individuals and communities to join the fight against human trafficking.",
        image: "/images/StopHumanTrafficking.png",
        gitUrl: 'https://github.com/Mako11z/StopHumanTrafficking',
        previewUrl: 'https://mako11z.github.io/StopHumanTrafficking/',
    },
    {
        id: 3,
        title: "VibeTrack",
        description: "VibeTrack is a nightclub tracker web app that aims to provide an enhanced experience for customers, helping them discover nearby clubs that cater to their preferences and interests.",
        image: "/images/VibeTrack.png",
        gitUrl: 'https://github.com/micnguyen-rnb90/VibeTrack',
        previewUrl: 'https://vibetrack.vercel.app/',
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
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectSection;