import React from 'react';
import { Card } from 'react-bootstrap';
import cplogo from '../images/cplogo.jpeg';
import lowelllogo from '../images/lowelllogo.png';
import llnllogo from '../images/llnllogo.jpeg';
import sfologo from '../images/sfologo.png';
 
class Resume extends React.Component {
 
   render() {
       // Titles & Card Placement + Style
       const educationStyle = {
           top: "10vh",
           marginLeft: "31vw",
           position: "absolute",
           fontFamily: "Georgia",
           fontSize: "28px"
       }
       const experienceStyle = {
           top: "75vh",
           marginLeft: "31vw",
           position: "absolute",
           fontFamily: "Georgia",
           fontSize: "28px"
       }
       const edustyles = {
           top: "20vh",
           position: "absolute",
           marginLeft: "30vw",
       };
       const expstyles = {
           top: "85vh",
           position: "absolute",
           marginLeft: "30vw"
       };
       const cardStyle = {
           minWidth: "38vw",
           minHeight: "22vh",
           backgroundColor: "white",
           display: "flex",
           marginBottom: "5vh",
           borderRadius: "35px",
           flexDirection: "row"
       };
       // Cal Poly Styles
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
       const llnlLogoStyle = {
           marginLeft: "33px",
           marginTop: "35px",
           marginRight: "5px",
           width: "73px",
           height: "73px"
       };
       const llnlSubText = {
        fontFamily: "Raleway",
        fontSize: "15px",
        float: "left",
        marginLeft: "30px"
        };

        // SFO styles
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

       // General Styles
       const subTextStyle = {
            fontFamily: "Raleway",
            fontSize: "15px",
            float: "left"
        };
       return (
           <div>
               <h2 style={educationStyle}>
                   <b>Education</b>
               </h2>
               <div style={edustyles}>

                   <Card style={cardStyle}>
                       <div style={{display: "flex", marginRight: "auto"}}>
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
                       </div>
                   </Card>

                   <Card style={cardStyle}>
                       <div style={{display: "flex", marginRight: "auto"}}>
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
                       </div>
                   </Card>
               </div>
 
               <h2 style={experienceStyle}>
                   <b>Work Experience</b>
               </h2>
               <div style={expstyles}>

                    <Card style={cardStyle}>
                       <div style={{display: "flex", marginRight: "auto"}}>
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
                       </div>
                   </Card>

                   <Card style={cardStyle}>
                       <div style={{display: "flex", marginRight: "auto"}}>
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
                       </div>
                   </Card>
               </div>
           </div>
       );
   }
}
 
export default Resume;
