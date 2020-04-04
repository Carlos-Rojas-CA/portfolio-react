import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBarScroll from './components/App-Bar-Scroll/App-bar'
import Container from '@material-ui/core/Container';
// import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
// import theme from './utils/themeUtil';
import Grid from '@material-ui/core/Grid';
import profile from './assets/Profile_Picture.png';
import etheron from './assets/Etheron.PNG';
import dsr from './assets/DSR.PNG'
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import CVCard from './components/Card/CVCard';
import SchoolIcon from '@material-ui/icons/School';
import PortfolioCard from './components/Card/PortfolioCard'
import mmm from './assets/MMM.png'
import Button from '@material-ui/core/Button';
import resumePDF from './assets/Carlos_Rojas Resume_t.pdf'
import GetAppIcon from '@material-ui/icons/GetApp';





function App() {

  const [front, setFront] = useState(true)
  const [fullStack, setFullStack] = useState(true)


  return (
    <div className="App">
      <header className="App-header">
        {/* <ThemeProvider theme={theme}> */}
        <AppBarScroll myName={'Carlos Rojas'}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Container maxWidth="md" className="container">
                <Grid container>
                  <Grid item xs={12} sm={5}>
                    <img src={profile} alt="Carlos" id={"carlos"} className="profile" />
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Typography variant="h4" style={{ paddingTop: '20px', fontFamily: 'Coda, sans-ser' }}>Carlos Rojas</Typography>
                    <Typography variant="h6" style={{ fontFamily: 'Coda, sans-ser' }}>Software/Aerospace Engineer</Typography>
                    <hr />
                    <Grid container>
                      <Grid item xs={3}>
                        <p style={{ textAlign: "left", marginBlockStart: "0.5em", marginBlockEnd: "0.5em" }}>Phone:</p>
                        <p style={{ textAlign: "left", marginBlockStart: "0.5em", marginBlockEnd: "0.5em" }}>Email:</p>
                        <p style={{ textAlign: "left", marginBlockStart: "0.5em", marginBlockEnd: "0.5em" }}>City:</p>
                      </Grid>
                      <Grid item xs={9}>
                        <p style={{ textAlign: "left", marginBlockStart: "0.5em", marginBlockEnd: "0.5em" }}>(909) 782-0746</p>
                        <p style={{ textAlign: "left", marginBlockStart: "0.5em", marginBlockEnd: "0.5em" }}>c2rojas75@gmail.com</p>
                        <p style={{ textAlign: "left", marginBlockStart: "0.5em", marginBlockEnd: "0.5em" }}>San Diego, California</p>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} spacing={2}>
                        <a href="https://www.linkedin.com/in/carlos-rojas-9b1b9a112/"><LinkedInIcon style={{ fontSize: 60 }} /></a>

                        <a href="https://github.com/Carlos-Rojas-CA"><GitHubIcon className="git" style={{ fontSize: 56, }} /></a>

                        <a href="https://angel.co/carlos-rojas-24"> <img src="https://img.icons8.com/windows/64/000000/angelist.png" /></a>

                      </Grid>
                    </Grid>

                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12}>
                      <Typography variant="h4" style={{ paddingTop: '20px', fontFamily: 'Coda, sans-ser' }}>About Me...</Typography>
                      <p style={{ textAlign: "center", marginBlockStart: "0.5em", marginBlockEnd: "0.5em", fontSize: "18px", fontFamily: "Helvetica, Arial, sans-ser" }}>My name is Carlos. Born and raised in southern California. My love for technology and games paired with some determination lead me to software. I wanted to create tools for myself to improve my experience. My skills include React, Javascript, (soon to be) Python.</p>
                      <p style={{ textAlign: "center", marginBlockStart: "0.5em", marginBlockEnd: "0.5em", fontSize: "18px", fontFamily: "Helvetica, Arial, sans-ser" }}>Otherwise, I'm exploring San Diego with my dog and learning new skills/languages. The "I can do that" idea drives me to continue learning and improving myself.</p>
                      <a href={resumePDF} download><Button variant="contained" color="secondary">
                        Download Resume   <GetAppIcon />
                      </Button></a>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <hr />
                      <Typography variant="h4" id={"resume"} style={{ paddingTop: '20px', fontFamily: 'Coda, sans-ser' }}>Resume</Typography>
                      <WorkIcon style={{ textAlign: "center", fontSize: "25px", display: "inline" }} />
                      <Typography variant="h5" style={{ textAlign: "center", fontFamily: 'Coda, sans-ser', display: "inline", alignContent: "center" }}>   Work History</Typography>
                      <CVCard
                        main={"Teledyne RD Instruments - Mechanical Engineer"}
                        time={"2018 - Present"}
                        bullets={[
                          {
                            descript: "Design components and full assemblies for underwater mechanical and electromechanical products and systems using SolidWorks.",
                            num: 1
                          },
                          {
                            descript: "Work directly and indirectly with customers to modify instruments to meet their needs to have a successful deployment. ",
                            num: 2
                          },
                          {
                            descript: "Perform simulation and analysis on systems and parts to ensure viability of products under extreme conditions.",
                            num: 3
                          },
                          {
                            descript: "Collaborated on the R&D mechanical team to launch new products to meet target dates and stakeholder goals.",
                            num: 4
                          },
                        ]} />
                      <CVCard
                        main={"Scripps Institution of Oceanography, UC San Diego - Mechanical Engineer Assistant"}
                        time={"2016 - 2018"}
                        bullets={[
                          {
                            descript: "Designed and modified models for mooring projects using SolidWorks 2017.",
                            num: 1
                          },
                          {
                            descript: "Generated Bills of Material for assemblies.",
                            num: 2
                          },
                          {
                            descript: "Deployed and recovered research buoys near the coast of San Diego.",
                            num: 3
                          },
                          {
                            descript: "Created documentation and procedures for assembly and disassembly of instrument cages.",
                            num: 4
                          },
                        ]} />
                      <SchoolIcon style={{ textAlign: "center", fontSize: "25px", display: "inline" }} />
                      <Typography variant="h5" style={{ textAlign: "center", fontFamily: 'Coda, sans-ser', display: "inline", alignContent: "center" }}>   Education</Typography>
                      <CVCard
                        main={"UCSD Extension - Coding BootCamp"}
                        time={"2019 - 2020"}
                        bullets={[
                          {
                            descript: "Immersive full-stack web development bootcamp through UCSD Extension.",
                            num: 1
                          },
                          {
                            descript: "Topics: MongoDB, Node.js, Javascript, React.js, jQuery, MySQL, Git, and Express.js",
                            num: 2
                          },
                          {
                            descript: "Performed simulation and analysis on systems and parts to ensure viability of products under extreme conditions.",
                            num: 3
                          },
                          {
                            descript: "Collaborated on the R&D mechanical team to launch new products to meet target dates and stakeholder goals.",
                            num: 4
                          },
                        ]} />
                      <CVCard
                        main={"University of California, San Diego - B.S. in Aerospace Engineering"}
                        time={"2010 - 2018"}
                        bullets={[
                          {
                            descript: "Course Work: Fluid Mechanics, Heat Transfer, Thermal Dynamics, Aerodynamics, Aerospace Structural Mechanics, Propulsion, and Space Mission Analysis and Design.",
                            num: 1
                          },
                          {
                            descript: "Coding Used: MATLAB, LabVIEW, and C++",
                            num: 2
                          }
                        ]} />
                      <hr />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Typography variant="h4" id={"portfolio"} style={{ paddingTop: '20px', fontFamily: 'Coda, sans-ser' }}>Portfolio</Typography>
                    </Grid>

                    {/* id={"carlos"} */}

                    <Typography variant="body2" component="p" > <a
                      onClick={() => {
                        setFront(true)
                        setFullStack(true)
                      }}
                      style={{ display: "inline", marginRight: "10px", fontSize: "16px", fontWeight: "bold", fontFamily: "Coda, sans-ser" }}>ALL</a> </Typography>
                    <Typography variant="body2" component="p" > <a
                      onClick={() => {
                        setFront(false)
                        setFullStack(true)
                      }}
                      style={{ display: "inline", marginRight: "10px", fontSize: "16px", fontWeight: "bold", fontFamily: "Coda, sans-ser" }}>FULL-STACK</a> </Typography>
                    <Typography variant="body2" component="p" > <a
                      onClick={() => {
                        setFront(true)
                        setFullStack(false)
                      }}
                      style={{ display: "inline", marginRight: "10px", fontSize: "16px", fontWeight: "bold", fontFamily: "Coda, sans-ser" }}>FRONTEND</a>  </Typography>

                    <br />
                    {
                      fullStack
                        ? (<Grid item xs={12} lg={12}>
                          <PortfolioCard image={etheron} title={"Etheron"} gitHub={'https://github.com/Carlos-Rojas-CA/Etheron-RPG'} site={'https://etheron-rpg.herokuapp.com/'} details={"Etheron is a web based game using Express.js and React to load characters and user data in a Mongo Data Base. Users retreive their characters and select the character they wish to continue with. The web page then lanuches our Unity base RPG game."} />
                          <PortfolioCard image={mmm} title={"Movie-Meme-Mash"} gitHub={'https://github.com/Carlos-Rojas-CA/Movie-Meme-Mash'} site={'https://test-memms.herokuapp.com/'} details={"Movie-Meme-Mash is an online forum and rating system for movies. Users create logins and uses passport.js to log into the app. There, they may search for a movie using the OMdb API. The app then stores new and retrieves existing reviews of the movies from a MySQL Database. Once loaded using jQuery, the user may add a review using giphy to help express their emotions."} />
                        </Grid>
                        )
                        : null //https://etheron-rpg.herokuapp.com/   https://test-memms.herokuapp.com/
                    }
                    {
                      front
                        ? (<Grid item xs={12} lg={12}>
                          <PortfolioCard image={dsr} title={"Daily Snack Retriever"} gitHub={'https://github.com/Carlos-Rojas-CA/Daily-Snack-Retrieval'} site={'https://carlos-rojas-ca.github.io/Daily-Snack-Retrieval/'} details={"Daily Snack Retriever takes in user input for allergies and food preferences. The app then sends a request to Edamam API to retrieve random recipes from their database. The result are loaded using jQuery and Materialize."} />
                        </Grid>
                        )
                        : null   // https://carlos-rojas-ca.github.io/Daily-Snack-Retrieval/
                    }

                  </Grid>
                </Grid>

              </Container>
            </Grid>
          </Grid>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React.
        </a> */}

        </AppBarScroll>
        {/* </ThemeProvider> */}
      </header>
    </div>
  );
}

export default App;
