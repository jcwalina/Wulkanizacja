import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const mapContainerStyle = {
        height: '400px',
        margin: "20px 0"
    };

    const center = {
        lat: 53.16741482511532, // szerokość geograficzna
        lng: 22.05683374158026, //  długość geograficzna
    };

    const apiKey = process.env.REACT_APP_KEY;

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={16}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
