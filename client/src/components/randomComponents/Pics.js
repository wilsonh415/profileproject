import React from 'react';
import { Row, Col, Image, Modal } from 'react-bootstrap';
// san francico pictures
import landsend from '../../images/sf/LandsEnd.JPG';
import crissyfields from '../../images/sf/CrissyFields.jpg';
import inacoolbrithpark from '../../images/sf/InaCoolbrithPark.JPG';
import ggp from '../../images/sf/GoldenGatePark.JPG';
import dolorespark from '../../images/sf/DoloresPark.JPG';
import lakemerced from '../../images/sf/LakeMerced.JPG';
import palace from '../../images/sf/PalaceOfFineArts.JPG';
import sutrobaths from '../../images/sf/SutroBaths.JPG';
import twinpeaks from '../../images/sf/TwinPeaks.JPG';
// wyoming pictures
import oldfaithful from '../../images/wyoming/OldFaithful.JPG';
import grandteton from '../../images/wyoming/GrandTeton.JPG';
import boysenstatepark from '../../images/wyoming/BoysenStatePark.JPG';
import yellowstone from '../../images/wyoming/Yellowstone.JPG';


class Pics extends React.Component {
    constructor() {
        super();
        this.state = {
            // sf variables
            showLandsEnd: false,
            showSutroBaths: false,
            showPalace: false,
            showCoolbrith: false,
            showLakeMerced: false,
            showDolores: false,
            showCrissy: false,
            showGGP: false,
            showTwinPeaks: false,
            // wyoming variables
            showFaithful: false,
            showYellowstone: false,
            showBoysen: false,
            showTeton: false
        }
    };
    handleFaithfulOpen = () => {
        this.setState({showFaithful: true});
    };
    handleFaithfulClose = () => {
        this.setState({showFaithful: false});
    };
    handleYellowstoneOpen = () => {
        this.setState({showYellowstone: true});
    };
    handleYellowstoneClose = () => {
        this.setState({showYellowstone: false});
    };
    handleBoysenOpen = () => {
        this.setState({showBoysen: true});
    };
    handleBoysenClose = () => {
        this.setState({showBoysen: false});
    };
    handleTetonOpen = () => {
        this.setState({showTeton: true});
    };
    handleTetonClose = () => {
        this.setState({showTeton: false});
    };
    handleGGPOpen = () => {
        this.setState({showGGP: true});
    };
    handleGGPClose = () => {
        this.setState({showGGP: false});
    };
    handleTwinPeaksOpen = () => {
        this.setState({showTwinPeaks: true});
    };
    handleTwinPeaksClose = () => {
        this.setState({showTwinPeaks: false});
    };
    handleLakeMercedOpen = () => {
        this.setState({showLakeMerced: true});
    };
    handleLakeMercedClose = () => {
        this.setState({showLakeMerced: false});
    };
    handleDoloresOpen = () => {
        this.setState({showDolores: true});
    };
    handleDoloresClose = () => {
        this.setState({showDolores: false});
    };
    handleCrissyOpen = () => {
        this.setState({showCrissy: true});
    };
    handleCrissyClose = () => {
        this.setState({showCrissy: false});
    };
    handleLandsEndOpen = () => {
        this.setState({showLandsEnd: true});
    };
    handleLandsEndClose = () => {
        this.setState({showLandsEnd: false});
    };
    handleSutroBathsOpen = () => {
        this.setState({showSutroBaths: true});
    };
    handleSutroBathsClose = () => {
        this.setState({showSutroBaths: false});
    };
    handlePalaceOpen = () => {
        this.setState({showPalace: true});
    };
    handlePalaceClose = () => {
        this.setState({showPalace: false});
    };
    handleCoolbrithOpen = () => {
        this.setState({showCoolbrith: true});
    };
    handleCoolbrithClose = () => {
        this.setState({showCoolbrith: false});
    };
    render() {
        const titleStyle = {
            fontSize: "35px", 
            fontFamily: "Georgia",
            marginLeft: "7vw",
            textAlign: "left",
            color: "white",
            marginTop: "10vh"
       };
       const sfStyle = {
           position: "relative",
           marginLeft: "4vw"
       };
       const rowStyle = {
        top: "3vh",
        position: "relative",
        marginLeft: "0vw",
        fontFamily: "Georgia"
        };
        const imgStyle = {
            border: "2px solid white"
        };
        const modalStyles = {
            top: "15%",
            margin: "auto"
        };
        const textCityStyle = {
            fontSize: "19px",
            color: "white",
            backgroundColor: "grey",
            position: "relative",
            margin: "3vh auto",
            width: "270px"
        }
        const modalImages = {
            margin: "auto",
            border: "2px solid white"
        };
        const modalText = { 
            textAlign: "center",
            fontFamily: "Georgia"
        };
        return (
            <div>
                <h3 style={titleStyle}><b>My Pictures</b></h3>
                <Row style={rowStyle}>
                    <Col md={5} style={sfStyle}>
                        <Image style={imgStyle} src={landsend} height={120} 
                        width={120} onClick={() => this.handleLandsEndOpen()}/>
                        <Modal show={this.state.showLandsEnd} style={modalStyles}
                        onHide={() => this.handleLandsEndClose()}>
                            <Modal.Title style={modalText}>Lands End, San Francisco</Modal.Title>
                            <Image style={modalImages} src={landsend} height={420} width={420}/>
                        </Modal>

                        <Image style={imgStyle} src={sutrobaths} height={120} 
                        width={120} onClick={() => this.handleSutroBathsOpen()}/>
                        <Modal show={this.state.showSutroBaths} style={modalStyles}
                        onHide={() => this.handleSutroBathsClose()}>
                            <Modal.Title style={modalText}>Sutro Baths, San Francisco</Modal.Title>
                            <Image style={modalImages} src={sutrobaths} height={420} width={420}/>
                        </Modal>
        
                        <Image style={imgStyle} src={palace} height={120} 
                        width={120} onClick={() => this.handlePalaceOpen()}/>
                        <Modal show={this.state.showPalace} style={modalStyles}
                        onHide={() => this.handlePalaceClose()}>
                            <Modal.Title style={modalText}>Palace of Fine Arts, San Francisco</Modal.Title>
                            <Image style={modalImages} src={palace} height={420} width={420}/>
                        </Modal>

                        <Image style={imgStyle} src={inacoolbrithpark} height={120} 
                        width={120} onClick={() => this.handleCoolbrithOpen()}/>
                        <Modal show={this.state.showCoolbrith} style={modalStyles}
                        onHide={() => this.handleCoolbrithClose()}>
                            <Modal.Title style={modalText}>Ina Coolbrith Park, San Francisco</Modal.Title>
                            <Image style={modalImages} src={inacoolbrithpark} height={420} width={420}/>
                        </Modal>

                        <Image style={imgStyle} src={lakemerced} height={120} 
                        width={120} onClick={() => this.handleLakeMercedOpen()}/>
                        <Modal show={this.state.showLakeMerced} style={modalStyles}
                        onHide={() => this.handleLakeMercedClose()}>
                            <Modal.Title style={modalText}>Lake Merced, San Francisco</Modal.Title>
                            <Image style={modalImages} src={lakemerced} height={420} width={420}/>
                        </Modal>

                        <Image style={imgStyle} src={dolorespark} height={120} 
                        width={120} onClick={() => this.handleDoloresOpen()}/>
                        <Modal show={this.state.showDolores} style={modalStyles}
                        onHide={() => this.handleDoloresClose()}>
                            <Modal.Title style={modalText}>Dolores Park, San Francisco</Modal.Title>
                            <Image style={modalImages} src={dolorespark} height={420} width={420}/>
                        </Modal>

                        <Image style={imgStyle} src={crissyfields} height={120} 
                        width={120} onClick={() => this.handleCrissyOpen()}/>
                        <Modal show={this.state.showCrissy} style={modalStyles}
                        onHide={() => this.handleCrissyClose()}>
                            <Modal.Title style={modalText}>Crissy Field, San Francisco</Modal.Title>
                            <Image style={modalImages} src={crissyfields} height={420} width={420}/>
                        </Modal>

                        <Image style={imgStyle} src={ggp} height={120} 
                        width={120} onClick={() => this.handleGGPOpen()}/>
                        <Modal show={this.state.showGGP} style={modalStyles}
                        onHide={() => this.handleGGPClose()}>
                            <Modal.Title style={modalText}>Golden Gate Park, San Francisco</Modal.Title>
                            <Image style={modalImages} src={ggp} height={420} width={420}/>
                        </Modal>

                        <Image style={imgStyle} src={twinpeaks} height={120} 
                        width={120} onClick={() => this.handleTwinPeaksOpen()}/>
                        <Modal show={this.state.showTwinPeaks} style={modalStyles}
                        onHide={() => this.handleTwinPeaksClose()}>
                            <Modal.Title style={modalText}>Twin Peaks, San Francisco</Modal.Title>
                            <Image style={modalImages} src={twinpeaks} height={420} width={420}/>
                        </Modal>

                        <b><p style={textCityStyle}>My Hometown - San Francisco</p></b>
                    </Col>
                    <Col md={5} style={{position: "relative"}}>
                        <Image src={oldfaithful} style={imgStyle} height={180} 
                        width={180} onClick={() => this.handleFaithfulOpen()}/>
                        <Modal show={this.state.showFaithful} style={modalStyles}
                        onHide={() => this.handleFaithfulClose()}>
                            <Modal.Title style={modalText}>Old Faithful, Yellowstone National Park</Modal.Title>
                            <Image style={modalImages} src={oldfaithful} height={420} width={420}/>
                        </Modal>

                        <Image src={boysenstatepark} style={imgStyle} height={180}
                        width={180} onClick={() => this.handleBoysenOpen()}/>
                        <Modal show={this.state.showBoysen} style={modalStyles}
                        onHide={() => this.handleBoysenClose()}>
                            <Modal.Title style={modalText}>Boysen State Park, Wyoming</Modal.Title>
                            <Image style={modalImages} src={boysenstatepark} height={420} width={420}/>
                        </Modal>

                        <Image src={yellowstone} style={imgStyle} height={180} 
                        width={180} onClick={() => this.handleYellowstoneOpen()}/>
                        <Modal show={this.state.showYellowstone} style={modalStyles}
                        onHide={() => this.handleYellowstoneClose()}>
                            <Modal.Title style={modalText}>Yellowstone National Park, Wyoming</Modal.Title>
                            <Image style={modalImages} src={yellowstone} height={420} width={420}/>
                        </Modal>

                        <Image src={grandteton} style={imgStyle} height={180} 
                        width={180} onClick={() => this.handleTetonOpen()}/>
                        <Modal show={this.state.showTeton} style={modalStyles}
                        onHide={() => this.handleTetonClose()}>
                            <Modal.Title style={modalText}>Grand Teton, Wyoming</Modal.Title>
                            <Image style={modalImages} src={grandteton} height={420} width={420}/>
                        </Modal>
                        <b><p style={textCityStyle}>Wyoming</p></b>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Pics;