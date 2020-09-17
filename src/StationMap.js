import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import License_Key from './License_Key';

const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute'
};

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map style={mapStyles}
                 google={this.props.google}
                 initialCenter={{ lat: 40.912384, lng: -73.123271 }}
                 zoom={14}
            >
                <Marker
                    name={"West Apartments I"}
                    position={{lat: 40.913378, lng: -73.134329}}
                    onClick={this.onMarkerClick}

                />

                <Marker
                    name={'West Apartments C'}
                    position={{lat: 40.911754, lng: -73.132887}}
                    onClick={this.onMarkerClick}
                />

                <Marker
                    name={'Tabler'}
                    position={{lat: 40.910053, lng: -73.124887}}
                    onClick={this.onMarkerClick}
                />

                <Marker
                    name={'Life Sciences 2'}
                    position={{lat: 40.911422, lng: -73.120797}}
                    onClick={this.onMarkerClick}
                />

                <Marker
                    name={'Javits'}
                    position={{lat: 40.913432, lng: -73.121416}}
                    onClick={this.onMarkerClick}
                />

                <Marker
                    name={'Wang Center'}
                    position={{lat: 40.916524, lng: -73.118169}}
                    onClick={this.onMarkerClick}
                />

                <Marker
                    name={'James College'}
                    position={{lat: 40.919247, lng: -73.120864}}
                    onClick={this.onMarkerClick}
                />

                <Marker
                    name={'SAC'}
                    position={{lat: 40.914429, lng: -73.124660}}
                    onClick={this.onMarkerClick}
                />

                <Marker
                    name={'Library'}
                    position={{lat: 40.916137, lng: -73.123461}}
                    onClick={this.onMarkerClick}
                />

                <Marker
                    name={'Athletic Fields'}
                    position={{lat: 40.921469, lng: -73.126406}}
                    onClick={this.onMarkerClick}
                />

                <Marker
                    name={'LIRR'}
                    position={{lat: 40.920082, lng: -73.128242}}
                    onClick={this.onMarkerClick}
                />

                <Marker
                    name={'South P Lot'}
                    position={{lat: 40.896510, lng: -73.126509}}
                    onClick={this.onMarkerClick}
                />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >

                    <div>
                        {this.state.selectedPlace.name}
                    </div>

                </InfoWindow>


            </Map>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: License_Key
})(MapContainer);
