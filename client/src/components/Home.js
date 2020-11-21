import React from 'react';

class Home extends React.Component {
    render() {
        const styles = {
            position: "relative",
            top: "17%",
            fontFamily: "Georgia",
            color: "white"
        }
        return (
            <div className="homeStyle">
                <h1 style={styles}>
                    Welcome! Website is still a work in progress.
                </h1>
            </div>
        )
    }
}

export default Home;