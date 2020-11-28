import React from 'react';
import { Card } from 'react-bootstrap';
import minesweeper from '../../images/minesweeperimg.png';

class Minesweeper extends React.Component {

    render() {
        return (
            <div className="msCardClass">
                <Card>
                    <Card.Img variant="top" src={minesweeper} width={286} height={180}/>
                    <Card.Body>
                        <Card.Title><b>Minesweeper</b></Card.Title>
                        <Card.Text>
                            In the works
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Minesweeper;