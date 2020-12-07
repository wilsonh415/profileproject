import React from 'react';
import { Button } from 'react-bootstrap';


class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            grid: this.createGrid()
        }
    }

    componentDidMount() {
    }

    createGrid = () => {
        let grid = [];
        for(let i = 0; i < 10; i++) {
            grid.push([]);
            for(let j = 0; j < 10; j++) {
                grid[i][j] = {
                    xPos: i,
                    yPos: j,
                    isMine: false,
                    isClicked: false,
                    key: i.toString() + j.toString()
                }
            }
        }
        return grid;
    }

    mineClicked = (mineKey) => {
        window.alert("key clicked was: " + mineKey);
    }

    renderGrid = () => {
        return this.state.grid.map((row, index) => {
            return (
                <tr key={index} height={35}>
                    {
                        row.map(col => {
                            const cellStyle = {
                                border: "1px solid black"
                            }
                            return (
                                <td key={col.key} style={cellStyle} onClick={() => this.mineClicked(col.key)}>
                                    {col.key}
                                </td>
                            )
                        })
                    }
                </tr>
            )
        })
    }

    render() {
        const tableStyle = {
            width: "350px",
            height: "350px",
            backgroundColor: "lightgrey",
            margin: "0 auto"
        };
        const titleStyle = {
            fontFamily: "Georgia",
            fontSize: "36px"
        }
        return (
            <div className="projectStyle">
                <h2 style={titleStyle}>Minesweeper</h2> <br/>
                <table style={tableStyle}>
                    <tbody>
                    { (this.state.grid !== null) ? this.renderGrid() : null}
                    </tbody>
                </table>
                <br/>
                <Button variant="primary">Restart!</Button>
            </div>
        )
    }
}

export default Game;