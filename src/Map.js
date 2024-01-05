import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const mapContainerStyle = {
        width: '50%',
        maxWidth: '800px',
        height: '400px',
        margin: "20px 0"
    };

    const center = {
        lat: 53.16741482511532, // szerokość geograficzna
        lng: 22.05683374158026, //  długość geograficzna
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDtQwn9gT6eU1pBWZ4CwEfWDBuf3v4fBiI">
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
