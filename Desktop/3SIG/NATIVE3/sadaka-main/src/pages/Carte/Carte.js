import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios'; // Import axios to make API requests
import './styleMap.css';
import { format } from 'date-fns';

const MapComponent = () => {
  const position = [31.7929502, -7.0909733];
  const [communes, setCommunes] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get('http://localhost:8084/annonces/annoncesGroupedByCommune')
      .then(response => setCommunes(response.data.communes))
      .catch(error => console.error('Error fetching annonces:', error));
  }, []);

  const handleMarkerClick = (ad) => {
    setSelectedAd((prev) => (prev === ad ? null : ad));
    setSelectedAnnonce(null);
  };

  const handleDetailsClick = (annonce) => {
    setSelectedAnnonce(annonce);
  };

  const handleCloseDetails = () => {
    setSelectedAnnonce(null);
  };

  return (
    <div className="flex">
      <MapContainer className="w-2/3" center={position} zoom={6} style={{ height: '500px', zIndex: 1 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {communes.map((commune) => (
          <Marker
            key={commune.nom}
            position={[commune.latitude, commune.longitude]}
            icon={L.divIcon({
              className: 'custom-marker',
              html: commune.nombreAnnonces.toString(),
            })}
            eventHandlers={{
              click: () => handleMarkerClick(commune),
            }}
          >
            <Popup>
              <div>
                <h3>{commune.nom}</h3>
                <p>Nombre  d'Annonces: {commune.nombreAnnonces}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
    </div>
  );
};

export default MapComponent;