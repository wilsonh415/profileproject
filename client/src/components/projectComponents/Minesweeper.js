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
                        <Card.Text>
                            <b>Rules</b>: Clear every tile without selecting
                            a mine and you win. Each "safe" tile will have a
                            number indicating the number of mines around it. Choose carefully. Good luck.
                        </Card.Text>
                        <b><hr/></b>
                        <Nav.Link href='/Minesweeper'>
                            <Button variant="primary">Play now!</Button>
                        </Nav.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Minesweeper;