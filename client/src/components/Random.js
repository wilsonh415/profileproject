import React from 'react';
 
class Random extends React.Component {
   componentDidMount() {
       console.log("Hello");
   }
 
   render() {
       const styles = {
           top: "100px",
           position: "absolute",
           marginLeft: "30vw"
       }
       return (
           <div style={styles}>
               <h1>Coming soon...</h1>
           </div>
       );
   }
}
 
 
export default Random;
