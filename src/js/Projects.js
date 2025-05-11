import React from 'react';
import '../css/Projects.css';
import{ useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//so basically I'm making a tab that presents a user with options and when one is selected the tab changes 
export default function Projects(){
    console.log('Projects component working');
    const [choice, setChoice] = useState(null);
    const [isFadingOut, setIsFadingOut] = useState(false);
//making the onScroll function for the typewriter effect
  const { ref, inView} = useInView({
    //triggers when project section is 50% in view
    threshold:0.5,
    //I made it so it triggers anytime you scroll to that section
  });
    const handleChoice = (newValue) => {
        setIsFadingOut(true);
        setTimeout(() => {
            setChoice(newValue);
            setIsFadingOut(false);
        }, 300); // Adjust the timeout duration as needed
    };
    //creating the portfolio object
    const portfolio=[
        {
            title:'Portfolio',
            link:"https://github.com/eversor-animarum/portfolio.git",
            desc:'I will be constantly updating it.',
            img:'./pin.jpg',
            techStack:'React, JavaScript, CSS, HTML',
        }
    ];
    console.log("current choice",choice);
return(
    <div id='projects' ref={ref}>
        <div ref={ref} className='projects-header'>/projects</div>
      {/*<div className='carousel'></div>*/} 
    <div className='project-cards'>
        {/*this is for the content of the tabs*/}
  {choice === null && (
  <div className={`questionTab ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
    <img src='/assets/question.png' alt="question" className="question-image" />
    {/*This is for the inview function,starts typing when we get to the section*/}
    {inView &&(
    <p className=" fade-in tab-question">
        Does a portfolio count as a project?
        </p>
      )}
    <div className="button-group">
      <button className="sparkleButton" onClick={() => handleChoice('yes')}>Yes</button>
      <button className="sparkleButton" onClick={() => handleChoice('no')}>No</button>
    </div>
  </div>
)}

{choice === 'yes' && (
        <div className="fade-in tab-content">
          {/* Your tab content goes here */}
          <Box sx={{ paddingLeft: 1,
                width:'50%',
                minHeight: '100px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-evenly',
                alignItems:'left',
             }} className='resultTab'>
			 
                <Box className='yesBox'>
                <div className="corner corner-bl"></div>
                <div className="corner corner-br"></div>
                  <div>
                    <Typography variant="h6">{portfolio[0].title}</Typography>
                    <a href={portfolio[0].link} target="_blank" rel="noopener noreferrer">
              <img src='/assets/portfolio.png' alt='portfolio pic' className='portfolio-img'></img>
                        </a>
                    <ul>
                        <li>
                        Click on the image to view the repo
                        </li>
                        <li>{portfolio[0].desc}</li>
                        <li>Tech Stack: {portfolio[0].techStack}</li>
                    </ul>
                    </div>
                </Box>
          </Box>
        </div>
		)
      }

      {choice === 'no' && (
            <Box className='noBox'>
          <img src='/assets/error404.png' alt="error 404" className='error-image'/>
          <Typography variant="h6">Projects Not Finished. I will update when I do</Typography>      
          </Box>
      )}
    </div>
    </div>
);
}