import React, { useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import finCities from '../json-data/finland-cities.json';
import mapStyle from "./mapStyle";

const GoogleMaps = () => {

    const Map = () => {
        const [selectedMarker, SetSelectedMarker] = useState(null);
        return (
            <GoogleMap
                defaultZoom={7}
                defaultCenter={{ lat: 61.7833, lng: 25.7000 }}
                defaultOptions={{ styles: mapStyle }}
            >
                { finCities.map(city => {
                    return (
                        <Marker
                            position={{ lat: JSON.parse(city.lat), lng: JSON.parse(city.lng) }}
                            onClick={() => {
                                SetSelectedMarker(city)
                            }}
                            icon={{
                                url: './city-marker.png',
                                scaledSize: new window.google.maps.Size(25, 25)
                            }}
                        />
                    )
                })}
                {selectedMarker && (
                    <InfoWindow
                        position={{ lat: JSON.parse(selectedMarker.lat), lng: JSON.parse(selectedMarker.lng) }}
                        onCloseClick={() => {
                            SetSelectedMarker(null)
                        }}
                    >
                        <div>
                            <h1>{selectedMarker.city}</h1>
                            <p>Population: {selectedMarker.population_proper}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        )
    }

    const MapWrapper = withScriptjs(withGoogleMap(Map));

    return (
        <div>
            <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>

                <MapWrapper
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4JMhZ3Ppj23nTDI8c5Gk0BNdVzXhIykI&v=3.exp&libraries=geometry,drawing,places"                    
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    );
}

export default GoogleMaps;