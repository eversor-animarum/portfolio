import React from 'react';
import { motion } from 'framer-motion';
import "../css/About.css";
//I'll make a fade-in transition later
export default function About() {
    console.log("About component loaded");
    const tech_stack=[
        "Java",
        "Springboot",
        "C++",
        "React.js",
        "Javascript ES6+"
    ];
    return(
    <div id="about">
        <div className="about-header">
        <div className="about-title">/me
        {/*<div className='line'></div>*/}
        </div>
        </div>
        {/*Making a line for the section*/}
        <section className='about-content'>
        <div className="about-desc">
            {/*This is where I put the description*/}
            I am currently pursuing a Bachelors degree in Information Tech
             at <a href="https://www.ug.edu.gh">UG.</a>
             During my leisure hours, I like to read,
             sketch and watch gameplay even though I don't play video games.
            </div>
            <div className='about-image'>
                    {/* So I'd insert an image here*/}
                    <img alt="Vanessa Addi" src='/assets/me.jpg'></img>
                </div>
                </section>
            <div className="about-tech">
                Here are some technologies I've worked with:
                <ul className="tech-list">
                    {/*so this is where we add the motion feature*/}
                    {tech_stack.map((tech, index) => (
                            <motion.li
                            key={index}
                         className="tech-item"
                         initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ twice:true}}
            transition={{ delay: index * 0.1, duration: 0.4 }}
                            >{tech}
                            </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
}