import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
 
class NavbarComp extends React.Component {
   render() {
       const styleText = {
           color: "black",
           opacity: 0.9,
           fontSize: "21px",
           marginRight: "25px",
           fontFamily: "Palatino Linotype",
           backgroundColor: "skyblue"
       };
       return(
           <div className="navigationBar">
               <Navbar bg="lightgrey" variant="light">
                   {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                   {/* <Nav className="mx-auto p-2"> */}
                   <Nav className="border-left mx-auto">
                       <Nav.Link href="/Resume"><b style={styleText}>Resume</b></Nav.Link>
                       <Nav.Link href="/Projects"><b style={styleText}>Projects</b></Nav.Link>
                       <Nav.Link href="/Random"><b style={styleText}>Random</b></Nav.Link>
                   </Nav>
               </Navbar>
           </div>
       )
   }
}

export default NavbarComp;