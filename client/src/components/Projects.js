import React from 'react';
import { Card, Button, Nav, Row } from 'react-bootstrap';
import issfoto from '../images/issfoto.jpeg';
import SpacePhoto from './projectComponents/SpacePhoto';
 
class Projects extends React.Component {
    constructor() {
        super();
    }


   render() {
       const styles = {
           top: "20vh",
           position: "relative",
           marginLeft: "5vw",
           fontFamily: "Georgia"
       };
       const issCardStyle = {
           backgroundColor: "white",
           border: "1px solid",
           minWidth: "286px",
           marginBottom: "5vh",
           minHeight: "477px"
       };
       return (
           <div className="projectStyle">
                <Row style={styles}>
                    <Card style={issCardStyle}>
                        <Card.Img variant="top" src={issfoto} width={286} height={180}/>
                        <Card.Body>
                            <Card.Title><b>Where is the International Space Station (ISS)?</b></Card.Title>
                            <Card.Text>
                            Launched in November 20, 1998, the ISS orbits the Earth every 93 minutes.
                            </Card.Text>
                            <Nav.Link href="/Iss">
                                <Button variant="primary">Locate ISS!</Button>
                            </Nav.Link>
                        </Card.Body>
                    </Card>
                    <SpacePhoto></SpacePhoto>
                </Row> 
                <br/>
           </div>
       )
   }
}
 
export default Projects;
