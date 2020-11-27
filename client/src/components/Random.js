import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import tameimpala from '../images/albumcovers/theslowrush.jpg';
import inreturn from '../images/albumcovers/inreturn.jpg';
import travisscott from '../images/albumcovers/birdsinthetrap.jpg';
import rhcp from '../images/albumcovers/stadiumarcadium.jpg';
import Pics from './randomComponents/Pics';

 
class Random extends React.Component {
   componentDidMount() {
       
   }
 
   render() {
       const favAlbumStyle = {
            fontSize: "35px", 
            fontFamily: "Georgia",
            marginLeft: "7vw",
            textAlign: "left",
            color: "white"
       }
       const subtitleStyle = {
        fontSize: "16px", 
        fontFamily: "Georgia",
        marginLeft: "7vw",
        textAlign: "left",
        color: "white"
        };
        const rowStyle = {
            top: "3vh",
            position: "relative",
            marginLeft: "0vw",
            fontFamily: "Georgia"
        };
       const tameStyles = {
           top: "2vh",
           position: "relative"
       }
       const odeszaStyles = {
            top: "2vh",
            position: "relative"
       }
       const textStyle = {
           fontSize: "19px",
           color: "white",
           backgroundColor: "grey",
           margin: "3vh auto",
           width: "270px"
       }
       const odeszaText = {
            marginTop: "3vh",
            fontSize: "19px",
            color: "white",
            backgroundColor: "grey",
            width: "250px",
            margin: "3vh auto"
       }
       return (
           <div className="randomStyle">
               <h3 style={favAlbumStyle}><b>Favorite Albums</b></h3>
               <h6 style={subtitleStyle}>Click on album cover to listen on Spotify!</h6>
               <div>
                   <Row style={rowStyle}>
                       <Col md={5} style={odeszaStyles}>
                        <a href="https://open.spotify.com/album/5SXT6dwhHX56Sos7KMcMF5" 
                        target="_blank" rel="noopener noreferrer">
                            <Image src={inreturn} height={220} width={220}/>
                        </a>
                       <b><p style={odeszaText}>ODESZA - In Return</p></b>
                       </Col>
                       <Col md={4} style={tameStyles}>
                        <a href="https://open.spotify.com/album/31qVWUdRrlb8thMvts0yYL" 
                        target="_blank" rel="noopener noreferrer">
                            <Image src={tameimpala} height={220} width={220}/>
                        </a>
                        <b><p style={textStyle}>Tame Impala - The Slow Rush</p></b>
                       </Col>
                   </Row>
                   <br/>
                   <Row style={rowStyle}>
                       <Col md={5} style={tameStyles}>
                        <a href="https://open.spotify.com/album/42WVQWuf1teDysXiOupIZt" 
                        target="_blank" rel="noopener noreferrer">
                            <Image src={travisscott} height={220} width={220}/>
                        </a>
                        <b><p style={textStyle}>Travis Scott - Birds in the Trap Sing McKnight</p></b>
                       </Col>
                       <Col md={4} style={odeszaStyles}>
                        <a href="https://open.spotify.com/album/7xl50xr9NDkd3i2kBbzsNZ"
                        target="_blank" rel="noopener noreferrer">
                            <Image src={rhcp} height={220} width={220}/>
                        </a>
                       <b><p style={textStyle}>Red Hot Chili Peppers - Stadium Arcadium</p></b>
                       </Col>
                   </Row>
               </div>
               <Pics></Pics>
           </div>
       );
   }
}
 
 
export default Random;
