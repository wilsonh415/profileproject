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

        // initialize the grid
        for(let i = 0; i < 10; i++) {
            grid.push([]);
            for(let j = 0; j < 10; j++) {
                grid[i][j] = {
                    xPos: i,
                    yPos: j,
                    isMine: false,
                    isClicked: false,
                    neighbors: null, // aka mines
                    key: i.toString() + j.toString()
                }
            }
        }
        this.initializeMines(grid);
        this.calculateNeighbors(grid);
        return grid;
    }

    calculateNeighbors = (grid) => {
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                // not a mine
                let current = grid[i][j];
                if(!grid[i][j].isMine) {
                    current.neighbors = 0;
                    // top left
                    if(i === 0 && j === 0) {
                        current.neighbors += (grid[i][j+1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j+1].isMine) ? 1 : 0;
                    }
                    // top right
                    else if(i === 0 && j === 9) {
                        current.neighbors += (grid[i][j-1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j-1].isMine) ? 1 : 0;
                    }
                    // bottom left
                    else if(i === 9 && j === 0) {
                        current.neighbors += (grid[i-1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i-1][j + 1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i][j+1].isMine) ? 1 : 0;
                    }
                    // bottom right
                    else if(i === 9 && j === 9) {
                        current.neighbors += (grid[i][j-1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i-1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i-1][j-1].isMine) ? 1 : 0;
                    }
                    // first row, cant access mines above
                    else if(i === 0) {
                        current.neighbors += (grid[i][j-1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i][j+1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j-1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j+1].isMine) ? 1 : 0;
                    }
                    // last row, cant access mines below
                    else if(i === 9){
                        current.neighbors += (grid[i][j-1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i][j+1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i-1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i-1][j-1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i-1][j+1].isMine) ? 1 : 0;
                    }
                    // first column, cant access mines to the left
                    else if(j === 0) {
                        current.neighbors += (grid[i-1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i-1][j+1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i][j+1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j+1].isMine) ? 1 : 0;
                    }
                    // last column, cant access mines to the right
                    else if(j === 9) {
                        current.neighbors += (grid[i-1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i-1][j-1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i][j-1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j-1].isMine) ? 1 : 0;
                    }
                    // calculate everything around
                    else {
                        current.neighbors += (grid[i-1][j-1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i-1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i-1][j+1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i][j-1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i][j+1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j-1].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j].isMine) ? 1 : 0;
                        current.neighbors += (grid[i+1][j+1].isMine) ? 1 : 0;
                    }
                }
            }
        }
        return grid;
    }

    initializeMines = (grid) => {
        let seenMines = [];
        for(let k = 0; k < 14; k++) {
            let randomX = Math.floor(Math.random() * 10);
            let randomY = Math.floor(Math.random() * 10);
            while(seenMines.indexOf({randomX, randomY}) !== -1) {
                randomX = Math.floor(Math.random() * 10);
                randomY = Math.floor(Math.random() * 10);
            }
            seenMines.push({randomX, randomY});
            grid[randomX][randomY].isMine = true;
            grid[randomX][randomY].neighbors = "💣";
        }
        return grid;
    }

    mineClicked = (mineKey) => {
        this.state.grid.forEach((row, i) => {
            row.forEach((col, j) => {
                if(col.key === mineKey && col.isMine) {
                    col.isClicked = true;
                    window.alert("Game over!");
                    return;
                }
                if(col.key === mineKey) {
                    col.isClicked = true;
                }
            })
        });
        // rerender the component; might not be good practice
        this.setState({
            grid: this.state.grid
        });
    }

    renderGrid = () => {
        return this.state.grid.map((row, index) => {
            return (
                <tr key={index} height={35}>
                    {
                        row.map(col => {
                            const cellStyle = {
                                border: "1px solid black",
                                width: "35px",
                                height: "35px"
                            }
                            // "💣"
                            return (
                                <td key={col.key} style={cellStyle} onClick={() => this.mineClicked(col.key)}>
                                    {(col.isClicked) ? col.neighbors : null}
                                </td>
                            )
                        })
                    }
                </tr>
            )
        })
    }

    restartGame = () => {
        window.location.reload();
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
                <Button variant="primary" onClick={() => this.restartGame()}>Restart!</Button>
            </div>
        )
    }
}

export default Game;