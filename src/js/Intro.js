//import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import React from 'react';
//this is for the typing effect
import { Typewriter } from 'react-simple-typewriter';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
//this is for the animation
import Animation from './Animation.js';
//import { motion } from 'framer-motion';
//this is for the video I might add at the top
//import video from '../../sakura.mp4';
import "./../css/Intro.css";
export default function Intro() {
  console.log("Intro component loaded");

    /*I divide verything here into sections*/
    return(
      <div id="intro">
        {/*Animation link goes here */}
        <Animation></Animation>
        <div className="intro-text">
        <span className="intro-title">
        <Typewriter
          words={['Hi, I\'m Vanessa']}
          loop={1}
          cursor
          cursorStyle='|'
          typeSpeed={120}
        />
        </span>
        {/*Making an animation for this section*/}
        <div className="intro-subtitle">I tinker with code</div>
        <div className='intro-desc'>
        I'm a student from the <a href="https://www.ug.edu.gh">University of Ghana.</a>  
        I'm still on my journey to become a software engineer.
        If you want to mentor me, or connect. Please reach out.
        </div>
        </div>
        {/*This is the link to my email*/}
        <a href="mailto:vanessaaddi18@gmail.com"
        className="intro-contact">
        <EmailRoundedIcon></EmailRoundedIcon>
        {" Say Hi! "}
        </a>
      </div>
    );
  }

  
  