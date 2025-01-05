import React, { useState, useEffect, useRef } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const defaultCenter = {
    lat: 26.8467, // Example: Lucknow, India
    lng: 80.9462,
};

const LiveTracking = () => {
    const [currentPosition, setCurrentPosition] = useState(defaultCenter);
    const [mapLoaded, setMapLoaded] = useState(false);
    const mapRef = useRef(null);

    useEffect(() => {
        const handleError = (error) => {
            console.error('Geolocation error:', error.message);
        };

        // Watch for live position updates
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude,
                });
                console.log('Live position updated:', latitude, longitude);

                if (mapRef.current) {
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                }
            },
            handleError,
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            onLoad={() => setMapLoaded(true)}
        >
            {mapLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={currentPosition}
                    zoom={15}
                    onLoad={(map) => (mapRef.current = map)}
                >
                    {/* Use a custom marker for the current position */}
                    <Marker
                        position={currentPosition}
                        icon={{
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 8, // Size of the dot
                            fillColor: 'blue',
                            fillOpacity: 1,
                            strokeWeight: 0,
                        }}
                    />
                </GoogleMap>
            ) : (
                <div>Loading map...</div>
            )}
        </LoadScript>
    );
};

export default LiveTracking;