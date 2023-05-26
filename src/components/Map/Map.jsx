import { GoogleMap, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const Map = ({ onClick }) => {
  const [markerPosition, setMarkerPosition] = useState(null);

  const mapContainerStyle = {
    width: '500px',
    height: '400px',
    marginTop: '35px',
    marginRight: '30px',
  };

  const center = {
    lat: 50.4501,
    lng: 30.5234,
  };

  const handleMapClick = event => {
    const { lat, lng } = event.latLng;

    const latitude = lat();
    const longitude = lng();

    setMarkerPosition({ lat: latitude, lng: longitude });
    onClick(event);
  };

  return (
    <GoogleMap
      zoom={13}
      center={markerPosition || center}
      mapContainerStyle={mapContainerStyle}
      onClick={handleMapClick}
    >
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  );
};

export default Map;
