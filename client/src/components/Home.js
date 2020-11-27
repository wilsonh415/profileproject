import React from 'react';

class Home extends React.Component {
    render() {
        const styles = {
            position: "relative",
            top: "19%",
            fontFamily: "Georgia",
            color: "white",
            fontSize: "45px",
            marginLeft: "10vw",
            marginRight: "10vw"
        }
        return (
            <div className="homeStyle">
                <h1 style={styles}>
                    Hi, I'm Wilson. Welcome to my website!
                    It is still a work in progress.
                </h1>
            </div>
        )
    }
}

export default Home;