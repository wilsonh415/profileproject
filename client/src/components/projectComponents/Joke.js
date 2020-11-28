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
            category: null,
            showClicked: false
        }
    }

    getJokes = async () => {
        const resp = await fetch('/api/jokes');
        const data = await resp.json();
        // need to filter out the offensive/inappropriate jokes
        const filterWords = ["sex", "penis", "FAT", "fat", "cancer", "shitty",
        "masturbating", "masturbated", "anal", "jacking", "Alzheimer's"];
        let isBad = false;
        if(data.joke !== undefined) {
            let wordCheck = filterWords.map(w => data.joke.includes(w));
            if(wordCheck.includes(true)) {
                isBad = true;
            }
        }
        if(data.setup !== undefined && data.delivery !== undefined) {
            let wordCheck = filterWords.map(w => data.setup.includes(w));
            wordCheck.push(...filterWords.map(w => data.delivery.includes(w)));
            if(wordCheck.includes(true)) {
                isBad = true;
            }
        }
        if(data.category === "Dark" || data.category === "Miscellaneous" || isBad) {
            this.getJokes();
        }
        if(data.joke !== undefined && data.category !== "Dark" 
        && data.category !== "Miscellaneous" && isBad === false) {
            this.setState({
                joke: data.joke,
                category: data.category,
                jokeDelivery: null,
                jokeSetup: null
            })
        }
        if(data.setup !== undefined && data.delivery !== undefined && isBad === false
            && data.category !== "Dark" && data.category !== "Miscellaneous") {
            this.setState({
                jokeSetup: data.setup,
                jokeDelivery: data.delivery,
                category: data.category,
                joke: null
            });
        }
    }

    componentDidMount() {
        this.getJokes();
    }

    showClicked = () => {
        this.setState({
            showClicked: true
        });
    }

    render() {
        const styles = {
            backgroundColor: "white",
            border: "1px solid",
            borderRadius: "5px",
            minWidth: "286px",
            maxWidth: "286px",
            position: "relative",
            fontFamily: "Georgia",
            marginBottom: "5vh"
        }
        return (
            <div style={styles}>
                <Card>
                    <Card.Img src={laughing} variant="top" width={286} height={180}></Card.Img>
                    <Card.Body>
                        <Card.Title><b>Random Jokes!</b></Card.Title>
                        <Card.Text>
                            Lighten up your day with a laugh!
                        </Card.Text>
                        <Card.Text style={{fontSize: "9px", marginTop: "-2vh"}}>
                            <b style={{fontSize:"10px"}}>NOTE</b>: Some jokes may be offensive and inappropriate.
                            This API was created by Sv443 (Sven Fehler)
                        </Card.Text>
                        <b><hr/></b>
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
                        <b><hr/></b>
                    </Card.Body>
                    <Button variant="primary" onClick={() => this.getJokes()}
                    style={{width: "120px", marginLeft: "29%", marginBottom: "2vh"}}>New Joke!</Button>
                </Card>
            </div>
        )
    }
}

export default Joke;