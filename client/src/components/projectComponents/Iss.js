import React from 'react';
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import issimg from '../../images/iss.png';

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
        return (
            <div>
                <h3>Where is the International Space Station right now?</h3>
                {
                    (this.state.position === null) ? 
                    <div>
                        Waiting for map to load...
                    </div> :
                    <MapContainer center={this.state.position}
                    zoom={3} scrollWheelZoom={false} style={{height: "280px", width: "280px"}}>
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
        )
    }
}

export default Iss;