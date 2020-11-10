import React from 'react';
import Iss from './projectComponents/Iss';
import { Card, Button, Nav, Row } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import issfoto from '../images/issfoto.jpeg';
import { Link } from 'react-router-dom';
 
class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            spaceFoto: null,
            copyright: null
        }
    }

    async componentDidMount() {
        const resp = await fetch('/api/spacephoto');
        const data = await resp.json();
        this.setState({
            spaceFoto: data.hdurl,
            copyright: data.copyright
        });
        console.log(data);
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
               <Card style={{ width: '18rem', backgroundColor: "white", border: "1px solid"}}>
                    <Card.Img variant="top" src={this.state.spaceFoto} width={286} height={180}/>
                    <Card.Body>
                        <Card.Title><b>NASA's astronomy photo of the day!</b></Card.Title>
                        <Card.Text>
                        Look at today's unique space photo, image by {this.state.copyright}.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <div style={{marginLeft: "25vw", marginTop: "-53vh"}}>
                <Card style={{ width: '18rem', backgroundColor: "white", border: "1px solid"}}>
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
                </div>

                {/* <BrowserRouter>
                    <Route component={Iss} path="/Projects/Iss"></Route>
                </BrowserRouter> */}
           </div>
       )
   }
}
 
export default Projects;
