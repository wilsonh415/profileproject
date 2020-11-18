import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import cplogo from '../images/cplogo.jpeg';
import lowelllogo from '../images/lowelllogo.png';
import llnllogo from '../images/llnllogo.jpeg';
import sfologo from '../images/sfologo.png';
 
class Resume extends React.Component {
    constructor() {
        super();
        this.state = {
            cpExpand: false,
            lowellExpand: false,
            llnlExpand: false,
            sfoExpand: false
        }
    }
 
   render() {
       // Titles & Card Placement + Style
       const educationStyle = {
           top: "10vh",
           marginLeft: "31vw",
           position: "absolute",
           fontFamily: "Georgia",
           fontSize: "30px"
       }
       const experienceStyle = {
           top: "78vh",
           marginLeft: "31vw",
           position: "absolute",
           fontFamily: "Georgia",
           fontSize: "30px"
       }
       const cardStyle = {
            minWidth: "38vw",
            minHeight: "22vh",
            backgroundColor: "white",
            display: "flex",
            marginBottom: "5vh",
            borderRadius: "35px",
            flexDirection: "row",
            marginRight: "auto"
        };
        const subTextStyle = {
            fontFamily: "Raleway",
            fontSize: "15px",
            float: "left"
        };
       // Cal Poly Styles
       const cpcardlayout = {
            top: "20vh",
            position: "absolute",
            marginLeft: "30vw",
            overflow: "auto"
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
        top: "50vh",
        position: "absolute",
        marginLeft: "30vw",
        overflow: "auto"
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
            top: "88vh",
            position: "absolute",
            marginLeft: "30vw"
        };
       const llnlLogoStyle = {
           marginLeft: "33px",
           marginTop: "35px",
           marginRight: "0px",
           width: "73px",
           height: "73px"
       };
       const llnlSubText = {
        fontFamily: "Raleway",
        fontSize: "15px",
        float: "left",
        marginLeft: "39px"
        };

        // SFO styles
        const sfocardlayout = {
            top: "119vh",
            position: "absolute",
            marginLeft: "30vw"
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
           marginLeft: "10px"
       };
       return (
           <div>
               <h2 style={educationStyle}>
                   <b>Educationn</b>
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
                                    San Luis Obispo, CA &nbsp; <b>|</b> &nbsp; Sep 2017 - Present
                                </Card.Text>
                                <br/>
                                <Card.Text style={subTextStyle}>
                                    B.S. in Computer Science
                                </Card.Text>
                            </Card.Body>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1" 
                            onClick={() => this.setState({cpExpand : !this.state.cpExpand})}>
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
                            onClick={() => this.setState({lowellExpand : !this.state.lowellExpand})}>
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
               <h2 style={experienceStyle}>
                   <b>Work Experience</b>
               </h2>
               <div style={llnlcardlayout}>
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
                            onClick={() => this.setState({llnlExpand : !this.state.llnlExpand})}>
                                <b>{this.state.llnlExpand === false ? '>' : '<'}</b>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <div>
                                        <b><u>Responsibilities:</u></b>
                                        <ul style={{fontSize: "10px", textAlign: "left"}}>
                                            <li>Developed & designed a rationalization app for department<br/>
                                                directors at the lab, which consisted of a complex updateable <br/>
                                                ledger (table of accounting data) with the use of ag-Grid.
                                            </li>
                                            <li>Implemented various system features for our admin pages, some<br/>
                                                of which included options to lock users out, post system messages,<br/>
                                                and give updates regarding the status of our finance application.
                                            </li>
                                            <li>Updated and remodeled many of the finance department's <br/>
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
                                   Public Service Trainee (Software Engineering Intern)
                               </Card.Text>
                           </Card.Body>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1"
                            onClick={() => this.setState({sfoExpand : !this.state.sfoExpand})}>
                                <b>{this.state.lowellExpand === false ? '>' : '<'}</b>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <div>
                                        <b><u>Responsibilities:</u></b>
                                        <ul style={{fontSize: "10px", textAlign: "left"}}>
                                            <li>Wrote unit tests in Java and ensured code coverage for <br/>
                                                the checkpoint wait time team with the use of Jenkins.
                                            </li>
                                            <li>Collected Wi-Fi access point data and developed algorithms <br/>
                                                to determine the faulty or problematic access points.
                                            </li>
                                            <li>Learned about RESTful APIs and the development <br/>
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
