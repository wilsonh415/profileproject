import React from 'react';

class Home extends React.Component {
    render() {
        const styles = {
            position: "relative",
            top: "19%",
            fontFamily: "Georgia",
            color: "white",
            fontSize: "45px"
        }
        return (
            <div className="homeStyle">
                <h1 style={styles}>
                    Hey there, welcome to my website!
                </h1>
            </div>
        )
    }
}

export default Home;