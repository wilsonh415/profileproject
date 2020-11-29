import React from 'react';
import { Card, Button, Nav, Row, Col } from 'react-bootstrap';
import issfoto from '../images/issfoto.jpeg';
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
                    <Joke></Joke>
                    <Minesweeper></Minesweeper>
                </Row>
                <br/>
           </div>
       )
   }
}
 
export default Projects;
