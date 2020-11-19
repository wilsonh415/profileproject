import React from 'react';
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import issimg from '../../images/issicon.png';

class Iss extends React.Component {
    constructor() {
        super();
        this.state = {
            issData: null,
            position: null
        }
    };

    componentDidMount() {
        fetch('/api/issdata')
        .then(resp => resp.json())
        .then(data =>  {
            this.setState({issData: data});
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
            // marginLeft: "30vw",
            fontFamily: "Georgia",
        };
        const mapStyle = {
            marginTop: "50px",
            height: "420px",
            width: "420px",
            marginLeft: "auto",
            marginRight: "auto"
        }
        return (
            <div className="projectStyle">
                <div style={styles}>
                    <h3>
                        <b>Where is the International Space Station right now?
                        </b>
                    </h3>
                    {
                        (this.state.position === null) ? 
                        <div>
                            Waiting for map to load...
                        </div> :
                        <MapContainer center={this.state.position}
                        zoom={2} scrollWheelZoom={false} style={mapStyle}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={this.state.position} icon={issicon}>
                                <Popup>
                                Latitude: {this.state.position[0].toFixed(5)}<br/> 
                                Longitude: {this.state.position[1].toFixed(5)}
                                </Popup>
                            </Marker>
                        </MapContainer>
                    }
                </div>
            </div>
        )
    }
}

export default Iss;