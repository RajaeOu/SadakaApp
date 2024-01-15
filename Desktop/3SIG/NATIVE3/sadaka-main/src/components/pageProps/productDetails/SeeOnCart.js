import React from 'react';
import { useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const dispatch = useDispatch();
const markerData = [
  { id: 1, name: 'TIGLIT', lat: 30, lng:-8.237079  },
  { id: 2, name: 'EL YOUSSOUFIA', lat: 34, lng: -5.80945 },
  { id: 3, name: 'LAQSABI TAGOUST', lat:29, lng: -7.23108},
  // Ajoutez d'autres marqueurs au besoin
];

const iconUrl = '/location-pin.png';
const customIcon = new L.Icon({
  iconUrl: iconUrl,
  iconSize: [20, 20],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const seeOnCart = () => {
    const { state } = useLocation();
    const { location } = state || {};
  return (
    <MapContainer
      center={[30.808975, -6.045327]}
      zoom={5}
      style={{ height: '600px', width: '100%' }}
    >
      {/* Utilisation des tuiles Esri */}
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      />

      {markerData.map((marker) => (
        <Marker
          key={marker.id}
          position={[marker.lat, marker.lng]}
          icon={customIcon}
        >
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default seeOnCart;