import React from 'react';
import { Button, Card } from 'react-bootstrap';

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            grid: this.createGrid(),
            hasWon: false,
            cellsLeft: 87
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

    checkMineExistence = (seenMines, x, y) => {
        for(let i = 0; i < seenMines.length; i++) {
            if(seenMines[i].randomX === x
                && seenMines[i].randomY === y) {
                return true;
            }
        }
        return false;
    }

    initializeMines = (grid) => {
        let seenMines = [];
        for(let k = 0; k < 13; k++) {
            let randomX = Math.floor(Math.random() * 10);
            let randomY = Math.floor(Math.random() * 10);
            while(this.checkMineExistence(seenMines, randomX, randomY)) {
                randomX = Math.floor(Math.random() * 10);
                randomY = Math.floor(Math.random() * 10);
            }
            seenMines.push({randomX, randomY});
            grid[randomX][randomY].isMine = true;
            grid[randomX][randomY].neighbors = "💣";
        }
        return grid;
    }

    handleZeroClicked = (i, j) => {
        // top left
        if(i === 0 && j === 0) {
            let newGrid = this.state.grid;
            if(this.state.grid[i][j+1].neighbors === 0
                && this.state.grid[i][j+1].isClicked === false) {
                newGrid[i][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j+1);
            }
            newGrid[i][j+1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i+1][j].neighbors === 0
                && this.state.grid[i+1][j].isClicked === false) {
                newGrid[i+1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j);
            }
            newGrid[i+1][j].isClicked = true;
            this.setState({grid: newGrid});
            
            if(this.state.grid[i+1][j+1].neighbors === 0
                && this.state.grid[i+1][j+1].isClicked === false) {
                newGrid[i+1][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j+1) 
            }
            newGrid[i+1][j+1].isClicked = true;
            this.setState({grid: newGrid});
        }
        // top right
        else if(i === 0 && j === 9) {
            let newGrid = this.state.grid;
            if(this.state.grid[i][j-1].neighbors === 0
                && this.state.grid[i][j-1].isClicked === false) {
                newGrid[i][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j-1);
            }
            newGrid[i][j-1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i+1][j].neighbors === 0
                && this.state.grid[i+1][j].isClicked === false) {
                newGrid[i+1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j);
            }
            newGrid[i+1][j].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i+1][j-1].neighbors === 0
                && this.state.grid[i+1][j-1].isClicked === false) {
                newGrid[i+1][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j-1);
            }
            newGrid[i+1][j-1].isClicked = true;
            this.setState({grid: newGrid});
        }
        // bottom left
        else if(i === 9 && j === 0) {
            let newGrid = this.state.grid;
            if(this.state.grid[i-1][j].neighbors === 0
                && this.state.grid[i-1][j].isClicked === false) {
                newGrid[i-1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j);
            }
            newGrid[i-1][j].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i-1][j+1].neighbors === 0
                && this.state.grid[i-1][j+1].isClicked === false) {
                newGrid[i-1][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j+1);
            }
            newGrid[i-1][j+1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i][j+1].neighbors === 0
                && this.state.grid[i][j+1].isClicked === false) {
                newGrid[i][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j+1);
            }
            newGrid[i][j+1].isClicked = true;
            this.setState({grid: newGrid});
        }
        // bottom right
        else if(i === 9 && j === 9) {
            let newGrid = this.state.grid;
            if(this.state.grid[i][j-1].neighbors === 0
                && this.state.grid[i][j-1].isClicked === false) {
                newGrid[i][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j-1);
            }
            newGrid[i][j-1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i-1][j].neighbors === 0
                && this.state.grid[i-1][j].isClicked === false) {
                newGrid[i-1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j);
            }
            newGrid[i-1][j].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i-1][j-1].neighbors === 0
                && this.state.grid[i-1][j-1].isClicked === false) {
                newGrid[i-1][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j-1);
            }
            newGrid[i-1][j-1].isClicked = true;
            this.setState({grid: newGrid});
        }
        // first row, cant access mines above
        else if(i === 0) {
            let newGrid = this.state.grid;
            if(this.state.grid[i][j-1].neighbors === 0
                && this.state.grid[i][j-1].isClicked === false) {
                newGrid[i][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j-1);
            }
            newGrid[i][j-1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i][j+1].neighbors === 0
                && this.state.grid[i][j+1].isClicked === false) {
                newGrid[i][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j+1);
            }
            newGrid[i][j+1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i+1][j-1].neighbors === 0
                && this.state.grid[i+1][j-1].isClicked === false) {
                newGrid[i+1][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j-1);
            }
            newGrid[i+1][j-1].isClicked = true;
            this.setState({grid: newGrid});
            
            if(this.state.grid[i+1][j].neighbors === 0
                && this.state.grid[i+1][j].isClicked === false) {
                newGrid[i+1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j);
            }
            newGrid[i+1][j].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i+1][j+1].neighbors === 0
                && this.state.grid[i+1][j+1].isClicked === false) {
                newGrid[i+1][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j+1);
            }
            newGrid[i+1][j+1].isClicked = true;
            this.setState({grid: newGrid});
        }
        // last row, cant access mines below
        else if(i === 9){
            let newGrid = this.state.grid;
            if(this.state.grid[i][j-1].neighbors === 0
                && this.state.grid[i][j-1].isClicked === false) {
                newGrid[i][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j-1);
            }
            newGrid[i][j-1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i][j+1].neighbors === 0
                && this.state.grid[i][j+1].isClicked === false) {
                newGrid[i][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j+1);
            }
            newGrid[i][j+1].isClicked = true;
            this.setState({grid: newGrid});
            
            if(this.state.grid[i-1][j].neighbors === 0
                && this.state.grid[i-1][j].isClicked === false) {
                newGrid[i-1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j);
            }
            newGrid[i-1][j].isClicked = true;
                this.setState({grid: newGrid});
  
            if(this.state.grid[i-1][j-1].neighbors === 0
                && this.state.grid[i-1][j-1].isClicked === false) {
                newGrid[i-1][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j-1);
            }
            newGrid[i-1][j-1].isClicked = true;
            this.setState({grid: newGrid});
            
            if(this.state.grid[i-1][j+1].neighbors === 0
                && this.state.grid[i-1][j+1].isClicked === false) {
                newGrid[i-1][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j+1);
            }
            newGrid[i-1][j+1].isClicked = true;
            this.setState({grid: newGrid});
        }
        // first column, cant access mines to the left
        else if(j === 0) {
            let newGrid = this.state.grid;
            if(this.state.grid[i-1][j].neighbors === 0
                && this.state.grid[i-1][j].isClicked === false) {
                newGrid[i-1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j);
            }
            newGrid[i-1][j].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i+1][j].neighbors === 0
                && this.state.grid[i+1][j].isClicked === false) {
                newGrid[i+1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j);
            }
            newGrid[i+1][j].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i-1][j+1].neighbors === 0
                && this.state.grid[i-1][j+1].isClicked === false) {
                newGrid[i-1][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j+1);
            }
            newGrid[i-1][j+1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i][j+1].neighbors === 0
                && this.state.grid[i][j+1].isClicked === false) {
                newGrid[i][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j+1);
            }
            newGrid[i][j+1].isClicked = true;
            this.setState({grid: newGrid});
            
            if(this.state.grid[i+1][j+1].neighbors === 0
                && this.state.grid[i+1][j+1].isClicked === false) {
                newGrid[i+1][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j+1);
            }
            newGrid[i+1][j+1].isClicked = true;
            this.setState({grid: newGrid});
        }
        // last column, cant access mines to the right
        else if(j === 9) {
            let newGrid = this.state.grid;
            if(this.state.grid[i-1][j].neighbors === 0
                && this.state.grid[i-1][j].isClicked === false) {
                newGrid[i-1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j);
            } 
            newGrid[i-1][j].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i+1][j].neighbors === 0
                && this.state.grid[i+1][j].isClicked === false) {
                newGrid[i+1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j);
            }
            newGrid[i+1][j].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i-1][j-1].neighbors === 0
                && this.state.grid[i-1][j-1].isClicked === false) {
                newGrid[i-1][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j-1);
            } 
            newGrid[i-1][j-1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i][j-1].neighbors === 0
                && this.state.grid[i][j-1].isClicked === false) {
                newGrid[i][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j-1);
            }
            newGrid[i][j-1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i+1][j-1].neighbors === 0
                && this.state.grid[i+1][j-1].isClicked === false) {
                newGrid[i+1][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j-1);
            }
            newGrid[i+1][j-1].isClicked = true;
            this.setState({grid: newGrid});
        }
        // search for 0s all around
        else {
            let newGrid = this.state.grid;
            if(this.state.grid[i-1][j-1].neighbors === 0
                && this.state.grid[i-1][j-1].isClicked === false) {
                newGrid[i-1][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j-1);
            }
            newGrid[i-1][j-1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i-1][j].neighbors === 0
                && this.state.grid[i-1][j].isClicked === false) {
                newGrid[i-1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j);
            }
            newGrid[i-1][j].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i-1][j+1].neighbors === 0
                && this.state.grid[i-1][j+1].isClicked === false) {
                newGrid[i-1][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i-1, j+1);
            }
            newGrid[i-1][j+1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i][j-1].neighbors === 0
                && this.state.grid[i][j-1].isClicked === false) {
                newGrid[i][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j-1);
            }
            newGrid[i][j-1].isClicked = true;
            this.setState({grid: newGrid});
            
            if(this.state.grid[i][j+1].neighbors === 0
                && this.state.grid[i][j+1].isClicked === false) {
                newGrid[i][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i, j+1);
            }
            newGrid[i][j+1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i+1][j-1].neighbors === 0
                && this.state.grid[i+1][j-1].isClicked === false) {
                newGrid[i+1][j-1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j-1);
            }
            newGrid[i+1][j-1].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i+1][j].neighbors === 0
                && this.state.grid[i+1][j].isClicked === false) {
                newGrid[i+1][j].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j);
            }
            newGrid[i+1][j].isClicked = true;
            this.setState({grid: newGrid});

            if(this.state.grid[i+1][j+1].neighbors === 0
                && this.state.grid[i+1][j+1].isClicked === false) {
                newGrid[i+1][j+1].isClicked = true;
                this.setState({grid: newGrid});
                this.handleZeroClicked(i+1, j+1);
            }
            newGrid[i+1][j+1].isClicked = true;
            this.setState({grid: newGrid});
        }
    }

    revealGrid = () => {
        this.state.grid.forEach(row => {
            row.forEach(col => {
                col.isClicked = true;
            })
        });
    }

    checkWin = () => {
        let count = 0;
        this.state.grid.forEach(row => {
            row.forEach(col => {
                if(col.isClicked === true) {
                    count++;
                }
            })
        });
        if(count === 87 && this.state.hasWon === false) {
            window.alert("Congratulations! You've won.");
            this.revealGrid();
            this.setState({
                hasWon: true
            })
        }
    }

    calculateMinesLeft = () => {
        let clicked = 0;
        this.state.grid.forEach(row => {
            row.forEach(col => {
                if(col.isClicked) {
                    clicked++;
                }
            })
        });
        let leftover = (87 - clicked < 0) ? 0 : 87 - clicked;
        this.setState({
            cellsLeft: leftover
        });
    }

    mineClicked = (mineKey) => {
        this.state.grid.forEach((row, i) => {
            row.forEach((col, j) => {
                if(col.key === mineKey && col.isMine) {
                    col.isClicked = true;
                    window.alert("Game over!");
                    this.revealGrid();
                    return;
                }
                if(col.key === mineKey) {
                    col.isClicked = true;
                    if(col.neighbors === 0) {
                        this.handleZeroClicked(i, j);
                    }
                    this.checkWin();
                }
            })
        });
        // rerender the component; might not be good practice
        this.setState({
            grid: this.state.grid
        });
        this.calculateMinesLeft();
    }

    renderGrid = () => {
        return this.state.grid.map((row, index) => {
            return (
                <tr key={index} height={35}>
                    {
                        row.map(col => {
                            const regularCellStyle = {
                                border: "1px solid black",
                                width: "36px",
                                height: "36px"
                            };
                            const clickedCellStyle = {
                                border: "1px solid black",
                                width: "36px",
                                height: "36px",
                                backgroundColor: "white"
                            };
                            const blueStyle = {color: "blue"};
                            const greenStyle = {color: "green"};
                            const redStyle = {color: "red"};
                            const navyStyle = {color: "navy"};
                            const darkredStyle = {color: "darkred"}
                            return (
                                (col.isClicked) ?
                                <td key={col.key} style={clickedCellStyle}>
                                    {
                                        (col.neighbors === 0) 
                                            ? null
                                            : (col.neighbors % 5 === 1) 
                                            ? <b style={blueStyle}>{col.neighbors}</b>
                                            : (col.neighbors % 5 === 2) 
                                            ? <b style={greenStyle}>{col.neighbors}</b>
                                            : (col.neighbors % 5 === 3) 
                                            ? <b style={redStyle}>{col.neighbors}</b>
                                            : (col.neighbors === 4)
                                            ? <b style={navyStyle}>{col.neighbors}</b>
                                            : (col.neighbors === 5)
                                            ? <b style={darkredStyle}>{col.neighbors}</b>
                                            : col.neighbors
                                    }
                                </td> :
                                <td key={col.key} style={regularCellStyle} onClick={() => this.mineClicked(col.key)}>
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
            width: "360px",
            height: "360px",
            backgroundColor: "lightgrey",
            margin: "0 auto"
        };
        const titleStyle = {
            fontFamily: "Georgia",
            fontSize: "36px"
        }
        
        return (
            <div className="projectStyle">
                <h2 style={titleStyle}><b>Minesweeper</b></h2> <br/>
                <Card className="infoStyle">
                    <Card.Body style={{padding: "0px", backgroundColor: "lightgrey"}}>
                        <Card.Title><u>Game Information: </u></Card.Title>
                        <ul>
                            <li>Each cell has a value indicating the # of surrounding mines.</li>
                            <li>There are <b>13</b> mines on the grid. Click one and you lose.</li>
                            <li>Cells left to clear: <b>{this.state.cellsLeft}</b></li>
                        </ul>
                    </Card.Body>
                </Card>
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