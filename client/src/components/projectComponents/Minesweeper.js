import React from 'react';
import { Card, Nav, Button } from 'react-bootstrap';
import minesweeper from '../../images/minesweeperimg.png';

class Minesweeper extends React.Component {

    render() {
        return (
            <div className="msCardClass">
                <Card>
                    <Card.Img variant="top" src={minesweeper} width={286} height={180}/>
                    <Card.Body>
                        <Card.Title><b>Minesweeper</b></Card.Title>
                        <b><hr/></b>
                        <b>NOTE</b>: Project in the works!
                        <b><hr/></b>
                        <Card.Text>
                            <b>Rules</b>: Clear every safe tile without
                            selecting a bomb and you win. Each safe tile will have a
                            number indicating the number of bombs around it. Choose carefully. Good luck.
                        </Card.Text>
                        <b><hr/></b>
                        <Nav.Link>
                            <Button variant="primary">Coming soon!</Button>
                        </Nav.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Minesweeper;