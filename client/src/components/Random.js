import React from 'react';
 
class Random extends React.Component {
   componentDidMount() {
       console.log("Hello");
   }
 
   render() {
       const styles = {
           top: "6vh",
           position: "relative",
       }
       return (
           <div className="randomStyle">
               <h1 style={styles}>Coming soon...</h1>
           </div>
       );
   }
}
 
 
export default Random;
