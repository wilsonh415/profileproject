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
// south dakota pictures
import interior from '../../images/southdakota/BadlandsInterior.JPG';
import badlands from '../../images/southdakota/TheBadlands.JPG';
import pioneer from '../../images/southdakota/PioneerAutoMuseum.JPG';
import custer from '../../images/southdakota/CusterStatePark.JPG';
// new york pictures
import centralpark from '../../images/newyork/CentralPark.JPG';
import brooklynbridge from '../../images/newyork/BrooklynBridge.JPG';
import tarrytown from '../../images/newyork/Tarrytown.JPG';
import timessquare from '../../images/newyork/TimesSquare.JPG';



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
            showTeton: false,
            // south dakota variables
            showBadlands: false,
            showInterior: false,
            showPioneer: false,
            showCuster: false,
            // new york variables
            showTimes: false,
            showCentral: false,
            showBrooklyn: false,
            showTarrytown: false,
            windowWidth: window.innerWidth
        }
    };

    updateWindow = () => {
        this.setState({
            windowWidth: window.innerWidth
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindow);
    }

    // new york setters
    handleTimesOpen = () => {this.setState({showTimes: true});};
    handleTimesClose = () => {this.setState({showTimes: false});};
    handleCentralOpen = () => {this.setState({showCentral: true});};
    handleCentralClose = () => {this.setState({showCentral: false});};
    handleBrooklynOpen = () => {this.setState({showBrooklyn: true});};
    handleBrooklynClose = () => {this.setState({showBrooklyn: false});};
    handleTarrytownOpen = () => {this.setState({showTarrytown: true});};
    handleTarrytownClose = () => {this.setState({showTarrytown: false});};
    // south dakota setters
    handleBadlandsOpen = () => {this.setState({showBadlands: true});};
    handleBadlandsClose = () => {this.setState({showBadlands: false});};
    handleInteriorOpen = () => {this.setState({showInterior: true});};
    handleInteriorClose = () => {this.setState({showInterior: false});};
    handlePioneerOpen = () => {this.setState({showPioneer: true});};
    handlePioneerClose = () => {this.setState({showPioneer: false});};
    handleCusterOpen = () => {this.setState({showCuster: true});};
    handleCusterClose = () => {this.setState({showCuster: false});};
    // wyoming setters
    handleFaithfulOpen = () => {this.setState({showFaithful: true});};
    handleFaithfulClose = () => {this.setState({showFaithful: false});};
    handleYellowstoneOpen = () => {this.setState({showYellowstone: true});};
    handleYellowstoneClose = () => {this.setState({showYellowstone: false});};
    handleBoysenOpen = () => {this.setState({showBoysen: true});};
    handleBoysenClose = () => {this.setState({showBoysen: false});};
    handleTetonOpen = () => {this.setState({showTeton: true});};
    handleTetonClose = () => {this.setState({showTeton: false});};
    // san francisco setters
    handleGGPOpen = () => {this.setState({showGGP: true});};
    handleGGPClose = () => {this.setState({showGGP: false});};
    handleTwinPeaksOpen = () => {this.setState({showTwinPeaks: true});};
    handleTwinPeaksClose = () => {this.setState({showTwinPeaks: false});};
    handleLakeMercedOpen = () => {this.setState({showLakeMerced: true});};
    handleLakeMercedClose = () => {this.setState({showLakeMerced: false});};
    handleDoloresOpen = () => {this.setState({showDolores: true});};
    handleDoloresClose = () => {this.setState({showDolores: false});};
    handleCrissyOpen = () => {this.setState({showCrissy: true});};
    handleCrissyClose = () => {this.setState({showCrissy: false});};
    handleLandsEndOpen = () => {this.setState({showLandsEnd: true});};
    handleLandsEndClose = () => {this.setState({showLandsEnd: false});};
    handleSutroBathsOpen = () => {this.setState({showSutroBaths: true});};
    handleSutroBathsClose = () => {this.setState({showSutroBaths: false});};
    handlePalaceOpen = () => {this.setState({showPalace: true});};
    handlePalaceClose = () => {this.setState({showPalace: false});};
    handleCoolbrithOpen = () => {this.setState({showCoolbrith: true});};
    handleCoolbrithClose = () => {this.setState({showCoolbrith: false});};
    render() {
        const titleStyle = {
            fontSize: "35px", 
            fontFamily: "Georgia",
            marginLeft: "7vw",
            textAlign: "left",
            color: "white",
            marginTop: "10vh"
       };
       const subtitleStyle = {
        fontSize: "16px", 
        fontFamily: "Georgia",
        marginLeft: "7vw",
        textAlign: "left",
        color: "white"
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
            border: "2px solid white",
            height: (this.state.windowWidth >= 900) ? "55vh" : "50%",
            width: (this.state.windowWidth >= 900) ? "50vw" : "80%"
        };
        const modalText = { 
            textAlign: "center",
            fontFamily: "Georgia"
        };
        return (
            <div>
                <h3 style={titleStyle}><b>My Pictures</b></h3>
                <h6 style={subtitleStyle}>Click on photos to expand and for specific location!</h6>
                <Row style={rowStyle}>
                    <Col md={5} style={sfStyle}>
                        <Image style={imgStyle} src={landsend} height={120} 
                        width={120} onClick={() => this.handleLandsEndOpen()}/>
                        <Modal show={this.state.showLandsEnd} style={modalStyles}
                        onHide={() => this.handleLandsEndClose()}>
                            <Modal.Title style={modalText}>Lands End</Modal.Title>
                            <Image style={modalImages} src={landsend}/>
                        </Modal>

                        <Image style={imgStyle} src={sutrobaths} height={120} 
                        width={120} onClick={() => this.handleSutroBathsOpen()}/>
                        <Modal show={this.state.showSutroBaths} style={modalStyles}
                        onHide={() => this.handleSutroBathsClose()}>
                            <Modal.Title style={modalText}>Sutro Baths</Modal.Title>
                            <Image style={modalImages} src={sutrobaths}/>
                        </Modal>
        
                        <Image style={imgStyle} src={palace} height={120} 
                        width={120} onClick={() => this.handlePalaceOpen()}/>
                        <Modal show={this.state.showPalace} style={modalStyles}
                        onHide={() => this.handlePalaceClose()}>
                            <Modal.Title style={modalText}>Palace of Fine Arts</Modal.Title>
                            <Image style={modalImages} src={palace}/>
                        </Modal>

                        <Image style={imgStyle} src={inacoolbrithpark} height={120} 
                        width={120} onClick={() => this.handleCoolbrithOpen()}/>
                        <Modal show={this.state.showCoolbrith} style={modalStyles}
                        onHide={() => this.handleCoolbrithClose()}>
                            <Modal.Title style={modalText}>Ina Coolbrith Park</Modal.Title>
                            <Image style={modalImages} src={inacoolbrithpark}/>
                        </Modal>

                        <Image style={imgStyle} src={lakemerced} height={120} 
                        width={120} onClick={() => this.handleLakeMercedOpen()}/>
                        <Modal show={this.state.showLakeMerced} style={modalStyles}
                        onHide={() => this.handleLakeMercedClose()}>
                            <Modal.Title style={modalText}>Lake Merced</Modal.Title>
                            <Image style={modalImages} src={lakemerced}/>
                        </Modal>

                        <Image style={imgStyle} src={dolorespark} height={120} 
                        width={120} onClick={() => this.handleDoloresOpen()}/>
                        <Modal show={this.state.showDolores} style={modalStyles}
                        onHide={() => this.handleDoloresClose()}>
                            <Modal.Title style={modalText}>Dolores Park</Modal.Title>
                            <Image style={modalImages} src={dolorespark}/>
                        </Modal>

                        <Image style={imgStyle} src={crissyfields} height={120} 
                        width={120} onClick={() => this.handleCrissyOpen()}/>
                        <Modal show={this.state.showCrissy} style={modalStyles}
                        onHide={() => this.handleCrissyClose()}>
                            <Modal.Title style={modalText}>Crissy Field</Modal.Title>
                            <Image style={modalImages} src={crissyfields}/>
                        </Modal>

                        <Image style={imgStyle} src={ggp} height={120} 
                        width={120} onClick={() => this.handleGGPOpen()}/>
                        <Modal show={this.state.showGGP} style={modalStyles}
                        onHide={() => this.handleGGPClose()}>
                            <Modal.Title style={modalText}>Golden Gate Park</Modal.Title>
                            <Image style={modalImages} src={ggp}/>
                        </Modal>

                        <Image style={imgStyle} src={twinpeaks} height={120} 
                        width={120} onClick={() => this.handleTwinPeaksOpen()}/>
                        <Modal show={this.state.showTwinPeaks} style={modalStyles}
                        onHide={() => this.handleTwinPeaksClose()}>
                            <Modal.Title style={modalText}>Twin Peaks</Modal.Title>
                            <Image style={modalImages} src={twinpeaks}/>
                        </Modal>

                        <b><p style={textCityStyle}>My Hometown - San Francisco</p></b>
                    </Col>
                    <Col md={5} style={{position: "relative"}}>
                        <Image src={oldfaithful} style={imgStyle} height={180} 
                        width={180} onClick={() => this.handleFaithfulOpen()}/>
                        <Modal show={this.state.showFaithful} style={modalStyles}
                        onHide={() => this.handleFaithfulClose()}>
                            <Modal.Title style={modalText}>Old Faithful - Yellowstone National Park</Modal.Title>
                            <Image style={modalImages} src={oldfaithful}/>
                        </Modal>

                        <Image src={boysenstatepark} style={imgStyle} height={180}
                        width={180} onClick={() => this.handleBoysenOpen()}/>
                        <Modal show={this.state.showBoysen} style={modalStyles}
                        onHide={() => this.handleBoysenClose()}>
                            <Modal.Title style={modalText}>Boysen State Park</Modal.Title>
                            <Image style={modalImages} src={boysenstatepark}/>
                        </Modal>

                        <Image src={yellowstone} style={imgStyle} height={180} 
                        width={180} onClick={() => this.handleYellowstoneOpen()}/>
                        <Modal show={this.state.showYellowstone} style={modalStyles}
                        onHide={() => this.handleYellowstoneClose()}>
                            <Modal.Title style={modalText}>Yellowstone National Park</Modal.Title>
                            <Image style={modalImages} src={yellowstone}/>
                        </Modal>

                        <Image src={grandteton} style={imgStyle} height={180} 
                        width={180} onClick={() => this.handleTetonOpen()}/>
                        <Modal show={this.state.showTeton} style={modalStyles}
                        onHide={() => this.handleTetonClose()}>
                            <Modal.Title style={modalText}>Grand Teton National Park</Modal.Title>
                            <Image style={modalImages} src={grandteton}/>
                        </Modal>
                        <b><p style={textCityStyle}>Wyoming</p></b>
                    </Col>
                </Row>
                <Row style={rowStyle}>
                    <Col md={5} style={sfStyle}>

                        <Image src={interior} style={imgStyle} height={180} 
                        width={180} onClick={() => this.handleInteriorOpen()}/>
                        <Modal show={this.state.showInterior} style={modalStyles}
                        onHide={() => this.handleInteriorClose()}>
                            <Modal.Title style={modalText}>Interior - Badlands National Park</Modal.Title>
                            <Image style={modalImages} src={interior}/>
                        </Modal>

                        <Image src={badlands} style={imgStyle} height={180} 
                        width={180} onClick={() => this.handleBadlandsOpen()}/>
                        <Modal show={this.state.showBadlands} style={modalStyles}
                        onHide={() => this.handleBadlandsClose()}>
                            <Modal.Title style={modalText}>Badlands National Park</Modal.Title>
                            <Image style={modalImages} src={badlands}/>
                        </Modal>

                        <Image src={pioneer} style={imgStyle} height={180} 
                        width={180} onClick={() => this.handlePioneerOpen()}/>
                        <Modal show={this.state.showPioneer} style={modalStyles}
                        onHide={() => this.handlePioneerClose()}>
                            <Modal.Title style={modalText}>Pioneer Auto Museum - Murdo</Modal.Title>
                            <Image style={modalImages} src={pioneer}/>
                        </Modal>

                        <Image src={custer} style={imgStyle} height={180} 
                        width={180} onClick={() => this.handleCusterOpen()}/>
                        <Modal show={this.state.showCuster} style={modalStyles}
                        onHide={() => this.handleCusterClose()}>
                            <Modal.Title style={modalText}>Custer State Park</Modal.Title>
                            <Image style={modalImages} src={custer}/>
                        </Modal>
                        <b><p style={textCityStyle}>South Dakota</p></b>
                    </Col>
                    <Col md={5} style={{position: "relative"}}>
                        <Image src={centralpark} style={imgStyle} height={180}
                        width={180} onClick={() => this.handleCentralOpen()}/>
                        <Modal show={this.state.showCentral} style={modalStyles}
                        onHide={() => this.handleCentralClose()}>
                            <Modal.Title style={modalText}>Central Park - NYC</Modal.Title>
                            <Image style={modalImages} src={centralpark}/>
                        </Modal>

                        <Image src={timessquare} style={imgStyle} height={180}
                        width={180} onClick={() => this.handleTimesOpen()}/>
                        <Modal show={this.state.showTimes} style={modalStyles}
                        onHide={() => this.handleTimesClose()}>
                            <Modal.Title style={modalText}>Times Square - NYC</Modal.Title>
                            <Image style={modalImages} src={timessquare}/>
                        </Modal>

                        <Image src={brooklynbridge} style={imgStyle} height={180}
                        width={180} onClick={() => this.handleBrooklynOpen()}/>
                        <Modal show={this.state.showBrooklyn} style={modalStyles}
                        onHide={() => this.handleBrooklynClose()}>
                            <Modal.Title style={modalText}>Brooklyn Bridge</Modal.Title>
                            <Image style={modalImages} src={brooklynbridge}/>
                        </Modal>

                        <Image src={tarrytown} style={imgStyle} height={180}
                        width={180} onClick={() => this.handleTarrytownOpen()}/>
                        <Modal show={this.state.showTarrytown} style={modalStyles}
                        onHide={() => this.handleTarrytownClose()}>
                            <Modal.Title style={modalText}>Tarrytown</Modal.Title>
                            <Image style={modalImages} src={tarrytown}/>
                        </Modal>
                        <b><p style={textCityStyle}>New York</p></b>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Pics;