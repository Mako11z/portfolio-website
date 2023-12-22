"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelor's Degree in Computer Science at Texas State University</li>
                <li>Austin Community College</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className="list-disc pl-2">
                <li>CodePath certificate in web developemnt</li>
                <li>Codepath certificate in technical interviews</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white mb-20">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    border: '1px solid linear-gradient(to bottom right, #5000FF, #FF0080)',
                    boxSizing: 'border-box', // Include border in the overall size
                    width: '98%', // Adjust the width as needed
                    height: '98%', // Adjust the height as needed
                    paddingTop: '5px', // Padding to create space between the image and the border
                    paddingRight: '3pxpx',
                    paddingBottom: '5px',
                    overflow: 'hidden', // Ensure the border doesn't exceed the wrapper
                }}>
            <Image 
                src="/images/about-life-code.png" 
                width={540} 
                height={540}  
                layout='responsive'
            />
        </div>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">This is where my description of me will go</p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>Certification{" "}</TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;