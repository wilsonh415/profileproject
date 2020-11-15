import React from 'react';

class Home extends React.Component {
    render() {
        const styles = {
            position: "absolute",
            marginLeft: "30vw",
            top: "45%",
            fontFamily: "Georgia"
        }
        return (
            <div style={styles}>
                <h1>Welcome! Website is still a work in progress.
                </h1>
            </div>
        )
    }
}

export default Home;