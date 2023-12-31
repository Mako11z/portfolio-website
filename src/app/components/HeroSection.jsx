"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="lg:py-16 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }} 
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" style={{ fontSize: '70px' }}>Hello, I'm{""} </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Isaiah',
                                5000,
                                'Software Engineer',
                                5000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        </h1>
                    <p className="text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl">
                        Passonite about making the world a better place, one line of code at a time
                    </p>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Download Resume</button>
                    
                </motion.div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                         src='/images/avatar-2.png'
                         width={300}
                         height={300}
                         className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                         />
                         
                      
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;