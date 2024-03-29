import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import cplogo from '../images/resumelogos/cplogo.jpeg';
import lowelllogo from '../images/resumelogos/lowelllogo.png';
import llnllogo from '../images/resumelogos/llnllogo.jpeg';
import sfologo from '../images/resumelogos/sfologo.png';
 
class Resume extends React.Component {
    constructor() {
        super();
        this.state = {
            cpExpand: false,
            lowellExpand: false,
            llnlExpand: false,
            sfoExpand: false,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    }

    updateWindow = () => {
        this.setState({
            windowWidth: window.innerWidth
        });
        if(window.innerWidth <= 750 && (this.state.cpExpand === true ||
            this.state.lowellExpand || this.state.llnlExpand || this.state.sfoExpand)) {
            this.setState({
                cpExpand: false,
                lowellExpand: false,
                llnlExpand: false,
                sfoExpand: false
            });
            window.alert("Browser width is too small to display details");
            window.location.reload();
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindow);
    }

    checkExpand = (param) => {
        if(this.state.windowWidth < 750) {
            window.alert("Browser width not large enough to display details! " +  
            "Please expand browser width or use another device.");
            window.location.reload();
        }
        else if(param === "Cal Poly" && this.state.windowWidth >= 750) {
            this.setState({cpExpand : !this.state.cpExpand})
        }
        else if(param === "Lowell" && this.state.windowWidth >= 750) {
            this.setState({lowellExpand : !this.state.lowellExpand})
        }
        else if(param === "LLNL" && this.state.windowWidth >= 750) {
            this.setState({llnlExpand : !this.state.llnlExpand})
        }
        else if(param === "SFO" && this.state.windowWidth >= 750) {
            this.setState({sfoExpand : !this.state.sfoExpand})
        }
    }
 
   render() {
       // Titles & Card Placement + Style
       const educationStyle = {
           top: "3vh",
           marginLeft: "6vw",
           position: "relative",
           float: "left",
           fontFamily: "Georgia",
           fontSize: "30px",
           backgroundColor: "skyblue",
           clear: "both"
       }
       const experienceStyle = {
           marginLeft: "1vw",
           marginBottom: "3vh",
           position: "relative",
           float: "left",
           fontFamily: "Georgia",
           fontSize: "30px",
           backgroundColor: "skyblue",
           clear: "both"
       }
       const cardStyle = {
            minWidth: "38vw",
            minHeight: "22vh",
            backgroundColor: "white",
            float: "left",
            marginBottom: "5vh",
            borderRadius: "35px",
            flexDirection: "row",
            maxHeight: (this.state.windowWidth >= 950) ? "28vh" : null
        };
        const subTextStyle = {
            fontFamily: "Raleway",
            fontSize: "15px",
            float: "left",
            clear: "both"
        };

       // Cal Poly Styles
       const cpcardlayout = {
            top: "5vh",
            position: "relative",
            marginLeft: "5vw",
            width: (this.state.cpExpand) ? "64vw" : "44vw",
            clear: "both"
       };
       const cpLogoStyle = {
            marginLeft: "10px",
            marginTop: "10px",
            marginRight: "15px",
            width: "120px",
            height: "120px"
       };
       const cpTitleStyle = {
        fontFamily: "Georgia",
        fontSize: "20px",
        float: "left"
        };

       // Lowell Styles
       const lowellcardlayout = {
            top: "5vh",
            position: "relative",
            marginLeft: "5vw",
            width: (this.state.lowellExpand) ? "64vw" : "44vw"
        };
       const lowellStyle = {
        fontFamily: "Georgia",
        fontSize: "20px",
        float: "left"
        };
        const lowellCardStyle = {
            marginLeft: "20px",
            marginTop: "20px",
            marginRight: "25px",
            width: "100px",
            height: "100px"
        };

        // LLNL Styles
        const llnlcardlayout = {
            top: "8vh",
            position: "relative",
            marginLeft: "5vw",
            width: (this.state.llnlExpand) ? "64vw" : "44vw"
        };
       const llnlLogoStyle = {
           marginLeft: "33px",
           marginTop: "35px",
           width: "73px",
           height: "73px"
       };
       const llnlSubText = {
        fontFamily: "Raleway",
        fontSize: "15px",
        float: "left",
        marginLeft: "39px",
        clear: "both"
        };

        // SFO styles
        const sfocardlayout = {
            top: "8vh",
            position: "relative",
            marginLeft: "5vw",
            width: (this.state.sfoExpand) ? "64vw" : "44vw"
        };
       const sfoLogoStyle = {
           marginLeft: "20px",
           marginTop: "15px",
           marginRight: "10px",
           width: "90px",
           height: "110px"
       };
       const sfoSubText = {
           fontFamily: "Raleway",
           fontSize: "15px",
           float: "left",
           marginLeft: "10px",
           clear: "both"
       };
       return (
           <div className="resumeStyle">
               <h2 style={educationStyle}>
                   <b>Education</b>
               </h2>
               <div style={cpcardlayout}>
                    <Accordion defaultActiveKey="0">
                        <Card style={cardStyle}>
                            <Card.Img variant="left" src={cplogo} style={cpLogoStyle}/>
                            <Card.Body>
                                <Card.Title style={cpTitleStyle}>
                                    <a href="https://www.calpoly.edu/" 
                                    target="_blank" rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}>  
                                    <b>California Polytechnic State <br/>University, San Luis Obispo</b>
                                    </a>
                                </Card.Title>
                                <br/>
                                <Card.Text style={subTextStyle}>
                                    &nbsp; San Luis Obispo, CA &nbsp; <b>|</b> &nbsp; Sep 2017 - Present
                                </Card.Text>
                                <br/>
                                <Card.Text style={subTextStyle}>
                                    &nbsp; B.S. in Computer Science
                                </Card.Text>
                            </Card.Body>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1"
                            onClick={() => this.checkExpand("Cal Poly")}>
                                <b>{this.state.cpExpand === false ? '>' : '<'}</b>
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <div style={{float: "left"}}>
                                        <b><u>Relevant Coursework:</u></b><br/>
                                        <ul style={{fontSize: "9px", textAlign: "left"}}>
                                            <li>Design & Implementation of Databases</li>
                                            <li>Design & Analysis of Algorithms</li>
                                            <li>Theory of Computation</li>
                                            <li>Operating Systems</li>
                                            <li>Statistics with R</li>
                                            <li>User-Centered Interface & Design</li>
                                            <li>Human Computer Interaction</li>
                                            <li>OOP & Data Structures</li>
                                        </ul>
                                    </div>
                                </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div style={lowellcardlayout}>
                   <Accordion>
                        <Card style={cardStyle}>
                            <Card.Img variant="left" src={lowelllogo} style={lowellCardStyle}/>
                            <Card.Body>
                                <Card.Title style={lowellStyle}>
                                    <a href="https://en.wikipedia.org/wiki/Lowell_High_School_(San_Francisco)"
                                    target="_blank" rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}>
                                    <b>Lowell High School</b>
                                    </a>
                                </Card.Title>
                                <br/>
                                <Card.Text style={subTextStyle}>
                                    San Francisco, CA &nbsp; <b>|</b> &nbsp; Aug 2013 - May 2017
                                </Card.Text>
                                <br/>
                                <Card.Text style={subTextStyle}>
                                    11 Advanced Placement Classes
                                </Card.Text>
                            </Card.Body>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1" 
                            onClick={() => this.checkExpand("Lowell")}>
                                <b>{this.state.lowellExpand === false ? '>' : '<'}</b>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <div>
                                        <p style={{fontSize: "9px"}}>
                                            Lowell High School is a selective <br/>
                                            public magnet school where admission<br/>
                                            tests are necessary for enrollment.
                                        </p>
                                        <b><u>Relevant Coursework:</u></b>
                                        <ul style={{fontSize: "9px", textAlign: "left"}}>
                                            <li>AP Computer Science</li>
                                            <li>AP Computer Science Principles</li>
                                            <li>AP Psychology</li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                   </Accordion>
               </div>
               <div style={llnlcardlayout}>
               <h2 style={experienceStyle}>
                    <b>Experience</b>
                </h2>
                    <Accordion>
                        <Card style={cardStyle}>
                           <Card.Img variant="left" src={llnllogo} style={llnlLogoStyle}/>
                           <Card.Body>
                               <Card.Title style={{fontFamily: "Georgia", fontSize: "20px"}}>
                                   <a href="https://www.llnl.gov/" target="_blank"
                                   rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}>
                                    <b>Lawrence Livermore <br/>National Laboratory</b>
                                   </a>
                               </Card.Title>
                               <Card.Text style={llnlSubText}>
                                   Livermore, CA &nbsp; <b>|</b> &nbsp; Apr 2019 - Aug 2019
                                   
                               </Card.Text>
                               <br/>
                               <Card.Text style={llnlSubText}>
                               Computation Student Scholar
                               </Card.Text>
                           </Card.Body>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1"
                            onClick={() => this.checkExpand("LLNL")}>
                                <b>{this.state.llnlExpand === false ? '>' : '<'}</b>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1" style={{maxWidth: "30vw"}}>
                                <Card.Body>
                                    <div>
                                        <b><u>Responsibilities:</u></b>
                                        <ul style={{fontSize: "10px", textAlign: "left"}}>
                                            <li>Developed & designed a rationalization app for department
                                                directors at the lab, which consisted of a complex updateable
                                                ledger (table of accounting data) with the use of ag-Grid.
                                            </li>
                                            <li>Implemented various system features for our admin pages, some
                                                of which included options to lock users out, post system messages,
                                                and give updates regarding the status of our finance application.
                                            </li>
                                            <li>Updated and remodeled many of the finance department's
                                                SPAs (single-page applications) from AngularJS to Angular.
                                            </li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                   </Accordion>
                </div>
                <div style={sfocardlayout}>
                    <Accordion>
                        <Card style={cardStyle}>
                           <Card.Img variant="left" src={sfologo} style={sfoLogoStyle}/>
                           <Card.Body>
                               <Card.Title style={{fontFamily: "Georgia", fontSize: "20px"}}>
                                   <a href="https://sfoconnect.com/" rel="noopener noreferrer"
                                   target="_blank" style={{color: "black", textDecoration: "none"}}>
                                    <b>City & County of San Francisco <br/> (SFO Airport - ITT Office)</b>
                                   </a>
                               </Card.Title>
                               <Card.Text style={sfoSubText}>
                                   San Francisco, CA &nbsp; <b>|</b> &nbsp; Jun 2017 - Aug 2017
                               </Card.Text>
                               <br/>
                               <Card.Text style={sfoSubText}>
                                   Public Service Trainee (SWE Intern)
                               </Card.Text>
                           </Card.Body>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1"
                            onClick={() => this.checkExpand("SFO")}>
                                <b>{this.state.sfoExpand === false ? '>' : '<'}</b>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1" style={{maxWidth: "30vw"}}>
                                <Card.Body>
                                    <div>
                                        <b><u>Responsibilities:</u></b>
                                        <ul style={{fontSize: "10px", textAlign: "left"}}>
                                            <li>Wrote unit tests in Java and ensured code coverage for
                                                the checkpoint wait time team with the use of Jenkins.
                                            </li> <br/>
                                            <li>Collected Wi-Fi access point data and developed algorithms
                                                to determine the faulty or problematic access points.
                                            </li> <br/>
                                            <li>Learned about RESTful APIs and the development
                                                of web services.</li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                   </Accordion>
               </div>
           </div>
       );
   }
}
 
export default Resume;
