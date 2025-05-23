import React from 'react';
import '../css/Projects.css';
import{ useState } from 'react';
import { useInView } from 'react-intersection-observer';
//import Confetti from 'react-confetti';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
//so basically I'm making a tab that presents a user with options and when one is selected the tab changes 
export default function Projects(){
    console.log('Projects component working');
    const [choice, setChoice] = useState(null);
    const [isFadingOut, setIsFadingOut] = useState(false);
    //this is for ratings
    const [ratingValue, setRatingValue] = useState(null);
    //making the showconfetti function for the yes button
    //const [showConfetti,setShowConfetti] = useState(false);
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
        }, 300); 
    };
    //this is for the confetti triggered when yes is pressed
    /*const handleConfetti = () => {
        if (choice === 'yes') {
            setShowConfetti(true);
            /*Next time I'll isolate the confetti to the button */
           // return <Confetti width={window.innerWidth} height={window.innerHeight} />;
       // }
   // };
    //creating the portfolio object
    const portfolio=[
        {
            title:'Portfolio',
            link:"https://github.com/eversor-animarum/portfolio.git",
            desc:'I will be constantly updating it.',
            img:'/assets/portfolio.png',
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
      {/*So I made some confetti appear when the yes button is clicked*/}
      <button className="sparkleButton" onClick={() => {setTimeout(() => handleChoice('yes'), 500);}}>Yes</button>
      <button className="sparkleButton" onClick={() => handleChoice('no')}>No</button>
    </div>
  </div>
)}

{choice === 'yes' && (
        <div className="fade-in tab-content">
           {/* Confetti goes here,I'll add it later 
    {handleConfetti && (
      <Confetti width={window.innerWidth} height={window.innerHeight} sx={{ zIndex: -1 }} />
    )}
       */}
     
          {/*I am creating a card to showcase my projects*/}
         <Card className='project-card'
          sx={{ maxWidth: 345, backgroundColor: '#f5f5f5',
             borderRadius: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <CardMedia 
          component="portfolio-img"
          alt="portfolio"
          image={portfolio[0].img}
          className='portfolio-img' />
          <Stack className='main-stack' direction='row' alignItems='center' spacing={2} p={2} useFlexGap={true}>
             <Stack direction="column" spacing={1} useFlexGap>
          <Typography variant="h5" className='project-title'>{portfolio[0].title} 
          <a href={portfolio[0].link} target="_blank" rel="noopener noreferrer">
            <FolderOpenIcon className="folder-icon"></FolderOpenIcon>
          </a>
          </Typography> 
          <Typography variant="h5" className='tech-stack'>{portfolio[0].techStack}</Typography>
          <Stack className='rate-box' direction="row" spacing={1.5} useFlexGap>
          <Typography variant="h6" className='rate'>Rate it! </Typography>
        <Rating className='stars' defaultValue={null} 
        value={ratingValue}
        onChange={(event, newValue) => {
          setRatingValue(newValue);
          console.log('User rating:', newValue);
        }}
        sx={{'& .MuiRating-iconEmpty': {
        color: '#e0a9bb',},}} size="small" />
      </Stack>
          </Stack>
          </Stack>
         </Card>
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