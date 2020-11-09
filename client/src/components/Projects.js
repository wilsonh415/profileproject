import React from 'react';
import Iss from './projectComponents/Iss';
import { Card, Button, Nav } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import issfoto from '../images/issfoto.jpeg';
import { Link } from 'react-router-dom';
 
class Projects extends React.Component {
   render() {
       const styles = {
           top: "120px",
           position: "absolute",
           marginLeft: "30vw",
           fontFamily: "Georgia"
       }
       return (
           <div style={styles}>
                <Card style={{ width: '18rem', backgroundColor: "white", border: "1px solid"}}>
                    <Card.Img variant="top" src={issfoto} width={286} height={180}/>
                    <Card.Body>
                        <Card.Title>Where is the International Space Station (ISS)?</Card.Title>
                        <Card.Text>
                        Launched in November 20, 1998, the ISS orbits the Earth every 93 minutes.
                        </Card.Text>
                        <Nav.Link href="/Iss">
                            <Button variant="primary">Locate ISS!</Button>
                        </Nav.Link>
                    </Card.Body>
                </Card>

                {/* <BrowserRouter>
                    <Route component={Iss} path="/Projects/Iss"></Route>
                </BrowserRouter> */}
           </div>
       )
   }
}
 
export default Projects;
