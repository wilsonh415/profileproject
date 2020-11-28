import React from 'react';
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import issimg from '../../images/issicon.png';
import { Card } from 'react-bootstrap';

class Iss extends React.Component {
    constructor() {
        super();
        this.state = {
            issData: null,
            position: null,
            velocity: null
        }
    };

    componentDidMount() {
        fetch('/api/issdata')
        .then(resp => resp.json())
        .then(data =>  {
            console.log(data);
            this.setState({issData: data});
            this.setState({
                velocity: (parseInt(data.velocity) / 1.609)
            });
            this.setState({
                position: [data.latitude, data.longitude]
            });
        })
        .catch(err => console.log(err));
    }

    render() {
        const issicon = new Leaflet.Icon({
            iconUrl: issimg,
            iconAnchor: [25, 25],
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
            iconSize: [35, 35],
        });
        const styles = {
            top: "3vh",
            position: "relative",
            fontFamily: "Georgia",
        };
        const mapStyle = {
            marginTop: "20px",
            height: "420px",
            width: "420px",
            marginLeft: "auto",
            marginRight: "auto"
        }
        const infoStyle = {
            marginTop: "2vh",
            marginLeft: "auto",
            marginRight: "auto",
            width: "320px",
            padding: "0px",
            background: "lightgrey"
        }
        return (
            <div className="projectStyle">
                <div style={styles}>
                    <h3>
                        <b>Where is the International Space Station (ISS) right now?
                        </b>
                    </h3>
                    {
                        (this.state.position === null) ? 
                        <div>
                            Waiting for map to load...
                        </div> :
                        <div>
                        <MapContainer center={this.state.position}
                        zoom={2} scrollWheelZoom={false} style={mapStyle}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={this.state.position} icon={issicon}>
                                <Popup>
                                Latitude: {this.state.position[0].toFixed(5)}<br/> 
                                Longitude: {this.state.position[1].toFixed(5)}
                                </Popup>
                            </Marker>
                        </MapContainer>
                        <Card style={infoStyle}>
                            <Card.Body style={{padding: "0px"}}>
                                <Card.Title><u>ISS Data: </u></Card.Title>
                                <ul>
                                    <li><b>Latitude</b>: {(this.state.position === null) ? 
                                    null : this.state.position[0].toFixed(5)}°</li>
                                    <li><b>Longitude</b>: {(this.state.position === null) ? 
                                    null : this.state.position[1].toFixed(5)}°</li>
                                    <li><b>Velocity</b>: {(this.state.velocity === null) ?
                                    null : this.state.velocity.toFixed(2)} mph</li>
                                </ul>
                            </Card.Body>
                        </Card>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Iss;