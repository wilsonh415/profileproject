import React from 'react';
import { Row } from 'react-bootstrap';
import SpacePhoto from './projectComponents/SpacePhoto';
import Joke from './projectComponents/Joke';
import Minesweeper from './projectComponents/Minesweeper';
import IssCard from './projectComponents/IssCard';

 
class Projects extends React.Component {

   render() {
       const styles = {
           top: "20vh",
           position: "relative",
           marginLeft: "7vw",
           fontFamily: "Georgia",
           minHeight: "477px"
       };
       const rowTwo = {
            top: "30vh",
            position: "relative",
            marginLeft: "7vw",
            fontFamily: "Georgia",
            minHeight: "477px"
        };

       return (
           <div className="projectStyle">
                <Row style={styles}>
                    <IssCard></IssCard>
                    <SpacePhoto></SpacePhoto>
                </Row> 
                <Row style={rowTwo}>
                    <Minesweeper></Minesweeper>
                    <Joke></Joke>
                </Row>
                <br/>
           </div>
       )
   }
}
 
export default Projects;
