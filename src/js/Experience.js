import React from 'react';
import "../css/Experience.css";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from '@mui/material/Box';
/*This where I define the function and make the return function*/
export default function Experience() {
    console.log('Experience component working');
   const[selectedTab,setSelectedTab]=useState('0');
   const handleChange =(event,newValue) =>{
    setSelectedTab(newValue);
};
    return(
        /*This is where I divide it into sections and divs */
        <div id="experience">
            <div className="experience-header">
                <div className="experience-title">/experience</div>
            </div>
            <div className='experienceTabs'>
            <Box sx={{ display:'flex', 
                flexDirection:'row',
                justifyContent:'flex-start', 
                alignItems:'flex-start'}} 
                >
            </Box>
                    {/*This is for the tabs at the left*/}
            <Tabs 
           orientation="vertical"
           value={selectedTab}
           onChange={handleChange}
            sx={{ 
                borderRight: 1, 
                minWidth: 100,
                alignItems: 'flex-start'
              }}
             >
                <Tab label="TOR" value="0" />
                <Tab label="R&D" value="1" />
                <Tab label="HIRE ME" value="2" />
                     </Tabs>
                     {/*This is for the content of the tabs*/}
            <Box sx={{ paddingLeft: 4,
                width:'100%',
                minHeight: '250px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center',
             }} className='experience-Box'>
            {selectedTab === '0' && (
                <Box className='fade-in'>
                    <Typography variant="h6">Technical Support Intern</Typography>
                    <Typography variant="h7" gutterbottom="true">Apr 2025 - Present</Typography>
                    <Typography variant='subtitle1' gutterbottom="true">Tema,Ghana</Typography>
                    <ul>
                        <li>
                        I provide IT support be it hardware or software
                        </li>
                        <li>
                        I also assist with software installations and configurations
                        </li>
                        <li>I also perform clerical duties and data entry tasks</li>
                    </ul>
                </Box>
                    )}
            {selectedTab === '1' && (
                <Box className='fade-in'>
                    <Typography variant="h6">Administrative Assistant</Typography>
                    <Typography variant="h7" gutterbottom="true">2020 - 2021</Typography>
                    <Typography variant='subtitle1' gutterbottom="true">Tema,Ghana</Typography>
                    <ul>
                        <li>I performed data entry tasks, assisted with accounts and customer support </li>
                    </ul>
                </Box>
            )}
            {selectedTab === '2' && (
                <Box className='fade-in'>
                    <Typography variant="h6">Hire me</Typography>
                    <Typography variant='h7' gutterbottom="true">Present</Typography>
                    <Typography variant="subtitle1" gutterbottom="true">Accra,Ghana</Typography>
                    <ul>
                        <li>I quickly adapt to new challenges and present innovative solutions</li>
                        <li>Help this dev by giving her a job and increasing her experience</li>
                    </ul>
                </Box>
            )}
             
        </Box>
        </div>
    </div>
);
}