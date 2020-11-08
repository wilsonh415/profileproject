import React from 'react';
import Iss from './projectComponents/Iss';
 
class Projects extends React.Component {
   render() {
       const styles = {
           top: "100px",
           position: "absolute",
           marginLeft: "30vw"
       }
       return (
           <div style={styles}>
               <Iss></Iss>
           </div>
       )
   }
}
 
export default Projects;
