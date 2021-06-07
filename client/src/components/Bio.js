import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AvatarEditor from 'react-avatar-editor';
// import profilepic from '../images/profilepic.JPG';
import profilepic from '../images/foto.JPG';
import gmailicon from '../images/medialogos/gmailicon.png';
import githubicon from '../images/medialogos/githubicon.svg';
import linkedinicon from '../images/medialogos/linkedinicon.png';
 
class Bio extends React.Component {

   render() {
       const bioText = {
           margin: "10px",
           color: "black",
           fontFamily: "Georgia",
           fontSize: "16px"
       };
       const linkStyles = {
           marginTop: "2vh",
           marginBottom: "8vh"
       };
       return (
           <div className="profileSidebar">
               <Container>
                   <Row>
                       <div className="profilePic">
                           <AvatarEditor
                           width={210}
                           height={210}
                           scale={1.0}
                           border={0}
                           style={{borderRadius: "50%"}}
                           image={profilepic}/>
                       </div>
                   </Row>
                   <h3 style={{fontFamily: "Georgia"}}>Wilson Huang</h3>
                   <div style={linkStyles}>
                       <a href="mailto:wilsonh415@gmail.com">
                           <img width="30" height="30" style={{margin: "10px", marginRight: "20px"}}
                           src={gmailicon} alt="Gmail"></img>
                       </a>
                       <a href="https://github.com/wilsonh415" 
                       target="_blank" rel="noopener noreferrer">
                           <img width="30" height="30" style={{margin: "10px", marginRight: "20px"}}
                           src={githubicon} alt="Github"></img>
                       </a>
                       <a href="https://www.linkedin.com/in/wilsonhuang5/" 
                       target="_blank" rel="noopener noreferrer">
                           <img width="30" height="30" style={{margin: "10px"}}
                           src={linkedinicon} alt="LinkedIn"></img>
                       </a>
                   </div>
                   <Row>
                       <p style={bioText}>
                           I'm a 4th year computer science student at
                           Cal Poly, SLO graduating in Spring 2021.
                           Born, raised, and currently living in San Francisco.
                           I love running, biking, exploring places, and
                           learning new perspectives! Looking for full-time
                           employment developing software.
                       </p>
                   </Row>
               </Container>
           </div>
       )
   }
}
 
export default Bio;
