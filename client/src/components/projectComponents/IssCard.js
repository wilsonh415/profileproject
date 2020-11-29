import React from 'react';
import { Card, Nav, Button } from 'react-bootstrap';
import issfoto from '../../images/issfoto.jpeg';


class IssCard extends React.Component {
    render() {
        const issCardStyle = {
            backgroundColor: "white",
            border: "1px solid",
            borderRadius: "5px",
            minWidth: "286px",
            maxWidth: "286px",
            marginBottom: "5vh",
            minHeight: "477px",
            maxHeight: "477px",
            position: "relative"
        };
        return (
            <div style={issCardStyle}>
                <Card>
                    <Card.Img variant="top" src={issfoto} width={286} height={180}/>
                    <Card.Body>
                        <Card.Title><b>Where is the International Space Station (ISS)?</b></Card.Title>
                        <b><hr/></b>
                        <Card.Text>
                        Launched in November 20, 1998, the ISS orbits the Earth every 93 minutes.
                        </Card.Text>
                        <b><hr/></b>
                        <Nav.Link href="/Iss">
                            <Button variant="primary">Locate ISS!</Button>
                        </Nav.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default IssCard;