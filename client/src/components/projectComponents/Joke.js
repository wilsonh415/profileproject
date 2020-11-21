import React from 'react';
import { Card, Button } from 'react-bootstrap';
import laughing from '../../images/laughing.jpg';

class Joke extends React.Component {

    constructor() {
        super();
        this.state = {
            jokeSetup: null,
            jokeDelivery: null,
            joke: null,
            category: null
        }
    }

    getJokes = async () => {
        const resp = await fetch('/api/jokes');
        const data = await resp.json();
        if(data.category === "Dark" || data.category === "Miscellaneous") {
            this.getJokes();
        }
        if(data.joke !== null && data.category !== "Dark" 
        && data.category !== "Miscellaneous") {
            this.setState({
                joke: data.joke,
                category: data.category
            })
        }
        if(data.setup !== null && data.delivery !== null 
            && data.category !== "Dark" && data.category !== "Miscellaneous") {
            this.setState({
                jokeSetup: data.setup,
                jokeDelivery: data.delivery,
                category: data.category
            });
        }
    }

    componentDidMount() {
        this.getJokes();
    }

    render() {
        const styles = {
            backgroundColor: "white",
            border: "1px solid",
            borderRadius: "5px",
            maxWidth: "286px",
            position: "relative",
            fontFamily: "Georgia"
        }
        return (
            <div style={styles}>
                <Card>
                    <Card.Img src={laughing} variant="top" width={286} height={180}></Card.Img>
                    <Card.Body>
                        <Card.Title><b>Random Jokes!</b></Card.Title>
                        <Card.Text>
                            Lighten up your day with a laugh!
                            <br/>
                        </Card.Text>
                        <Card.Text style={{fontSize: "11px"}}>
                            <b>Joke Type: {this.state.category}</b>
                        </Card.Text>
                        <Card.Text>
                            {
                                (this.state.joke !== null) ? this.state.joke : null
                            }
                            <b>
                            {
                                (this.state.jokeSetup !== null) ? this.state.jokeSetup : null
                            }
                            </b>
                            <br/>
                            {
                                (this.state.jokeDelivery !== null) ? this.state.jokeDelivery : null
                            }
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary" onClick={() => this.getJokes()}
                    style={{width: "120px", marginLeft: "29%"}}>New Joke!</Button>
                </Card>
            </div>
        )
    }
}

export default Joke;