import React from 'react';
import { Card } from 'react-bootstrap';
import cplogo from '../images/cplogo.jpeg';
import lowelllogo from '../images/lowelllogo.png';
import llnllogo from '../images/llnllogo.jpeg';
import sfologo from '../images/sfologo.png';
 
class Resume extends React.Component {
 
   render() {
       const educationStyle = {
           top: "10vh",
           marginLeft: "30vw",
           position: "absolute",
           fontFamily: "Georgia"
       }
       const experienceStyle = {
           top: "77vh",
           marginLeft: "30vw",
           position: "absolute",
           fontFamily: "Georgia"
       }
       const edustyles = {
           top: "18vh",
           position: "absolute",
           marginLeft: "30vw",
       };
       const expstyles = {
           top: "85vh",
           position: "absolute",
           marginLeft: "30vw"
       };
       const cardStyle = {
           width: "37vw",
           height: "22vh",
           backgroundColor: "white",
           display: "flex",
           marginBottom: "5vh",
           borderRadius: "35px"
       };
       const cardImgStyle = {
           marginLeft: "10px",
           marginTop: "10px",
           width: "120px",
           height: "120px"
       };
       const llnlStyle = {
           marginLeft: "27px",
           marginTop: "35px",
           width: "84px",
           height: "84px"
       };
       const sfoStyle = {
           marginLeft: "20px",
           marginTop: "10px",
           width: "100px",
           height: "120px"
       };
       const subTextStyle = {
           fontFamily: "Raleway",
           fontSize: "15px",
           float: "left"
       };
       const llnlSubText = {
           fontFamily: "Raleway",
           fontSize: "15px",
           float: "left",
           marginLeft: "22px"
       };
       const sfoSubText = {
           fontFamily: "Raleway",
           fontSize: "15px",
           float: "left",
           marginLeft: "14px"
       };
       const titleStyle = {
           fontFamily: "Georgia",
           fontSize: "20px",
           float: "left",
           marginTop: "1.5vh"
       };
       return (
           <div>
               <h2 style={educationStyle}>
                   <b>Education</b>
               </h2>
               <div style={edustyles}>
                   <Card style={cardStyle}>
                       <div style={{display: "flex"}}>
                           <Card.Img variant="left" src={cplogo} style={cardImgStyle}/>
                           <Card.Body>
                               <Card.Title style={titleStyle}>
                                   <b>California Polytechnic State <br/>University, San Luis Obispo</b>
                               </Card.Title>
                               <Card.Text style={subTextStyle}>
                                   San Luis Obispo, CA &nbsp; <b>|</b> &nbsp; Sep 2017 - Present
                               </Card.Text>
                               <Card.Text style={subTextStyle}>
                                   B.S. in Computer Science
                               </Card.Text>
                           </Card.Body>
                       </div>
                   </Card>
                   <Card style={cardStyle}>
                       <div style={{display: "flex"}}>
                           <Card.Img variant="left" src={lowelllogo} style={cardImgStyle}/>
                           <Card.Body>
                               <Card.Title style={titleStyle}>
                                   <b>Lowell High School</b>
                               </Card.Title>
                               <Card.Text style={subTextStyle}>
                                   San Francisco, CA &nbsp; <b>|</b> &nbsp; Aug 2013 - May 2017
                               </Card.Text>
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
                       <div style={{display: "flex"}}>
                           <Card.Img variant="left" src={llnllogo} style={llnlStyle}/>
                           <Card.Body>
                               <Card.Title style={{fontFamily: "Georgia", fontSize: "20px", marginLeft: "-30px", marginTop: "1.5vh"}}>
                                   <b>Lawrence Livermore National Laboratory</b>
                               </Card.Title>
                               <Card.Text style={llnlSubText}>
                                   Livermore, CA &nbsp; <b>|</b> &nbsp; Apr 2019 - Aug 2019
                               </Card.Text>
                               <Card.Text style={llnlSubText}>
                                   Computation Student Scholar
                               </Card.Text>
                           </Card.Body>
                       </div>
                   </Card>
                   <Card style={cardStyle}>
                       <div style={{display: "flex"}}>
                           <Card.Img variant="left" src={sfologo} style={sfoStyle}/>
                           <Card.Body>
                               <Card.Title style={{fontFamily: "Georgia", fontSize: "20px", marginLeft: "-30px", marginTop: "1.5vh"}}>
                                   <b>City & County of San Francisco <br/> (SFO Airport - ITT Department)</b>
                               </Card.Title>
                               <Card.Text style={sfoSubText}>
                                   San Francisco, CA &nbsp; <b>|</b> &nbsp; Jun 2017 - Aug 2017
                               </Card.Text>
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
