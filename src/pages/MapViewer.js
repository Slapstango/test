import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapViewer() {
  const crashPoints = [
    { lat: 36.67, lng: -121.65, location: 'Salinas' },
    { lat: 36.6, lng: -121.9, location: 'Monterey' },
    { lat: 36.3, lng: -121.2, location: 'King City' }
  ];

  return (
    <div style={{ height: '500px', margin: '2rem' }}>
      <h2>Crash Map</h2>
      <MapContainer center={[36.6, -121.8]} zoom={9} style={{ height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {crashPoints.map((point, i) => (
          <Marker key={i} position={[point.lat, point.lng]}>
            <Popup>{point.location}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapViewer;