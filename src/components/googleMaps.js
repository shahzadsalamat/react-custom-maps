import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import finCities from '../json-data/finland-cities.json';




const GoogleMaps = () => {

    const Map = () => {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: 60.1756, lng: 24.9342 }}
            >
                { finCities.map(cities => {
                    return (
                        <Marker
                            position={{ lat: JSON.parse(cities.lat), lng: JSON.parse(cities.lng) }}

                        />
                    )
                })}


            </GoogleMap>
        )
    }

    const MapWrapper = withScriptjs(withGoogleMap(Map));


    return (
        <div>
            <div style={{ width: '50vw', height: '100vh', backgroundColor: 'black' }}>

                <MapWrapper
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    );
}

export default GoogleMaps;