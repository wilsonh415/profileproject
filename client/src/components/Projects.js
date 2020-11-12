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
           top: "120px",
           position: "absolute",
           marginLeft: "30vw",
           fontFamily: "Georgia"
       }
       return (
           <div style={styles}>
                <Row>
                    <Card style={{ width: '18rem', backgroundColor: "white", border: "1px solid", marginRight: "3vw"}}>
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
