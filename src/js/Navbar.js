import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./../css/Navbar.css";
import React from 'react';
export const NavBar = () => {
    //to check if it's working, I will add a console.log here
    console.log("Navbar component is working");
    return (
        <Navbar fixed="top" className="navbar-light bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">Vanessa Addi</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#intro">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="mailto:vanessaaddi18@gmail.com">
                  <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
                </Nav.Link>
                <Nav.Link href="https://github.com/eversor-animarum" target="_blank">
                  <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/vanessa-addi-891BB3311/" target="_blank">
                  <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}