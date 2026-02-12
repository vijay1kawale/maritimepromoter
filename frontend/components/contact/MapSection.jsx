// "use client";

// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// const markerIcon = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
//   shadowSize: [41, 41],
// });

// const MapSection = () => {
//   return (
//     <div className="w-full h-[32rem] md:h-[32rem] rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 z-0" style={{ position: 'relative' }}>
//       <MapContainer
//         center={[19.186, 72.848]}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{ height: "100%", width: "100%", zIndex: 0 }}
//         className="h-full w-full"
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[19.186, 72.848]} icon={markerIcon}>
//           <Popup>Malad West, Mumbai</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default MapSection;


"use client";

import React, { useEffect, useState } from "react"; // Import useState for holding the icon
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import L from "leaflet"; // We will import L inside useEffect

const MapSection = () => {
  const [markerIcon, setMarkerIcon] = useState(null); // State to hold the L.Icon instance

  useEffect(() => {
    // Only import Leaflet and create the icon on the client-side
    // after the component has mounted.
    const L = require("leaflet"); // Dynamically import leaflet here

    setMarkerIcon(
      new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        shadowSize: [41, 41],
      })
    );
  }, []); // Empty dependency array ensures this runs once after initial render

  if (!markerIcon) {
    // Optionally render a loading state or nothing until the icon is ready
    return (
      <div className="w-full h-[32rem] md:h-[32rem] rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 z-0 flex items-center justify-center">
        <p>Loading map...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[32rem] md:h-[32rem] rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 z-0" style={{ position: 'relative' }}>
      <MapContainer
        center={[19.0759, 72.9976]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Only render Marker if markerIcon is not null */}
        {markerIcon && (
          <Marker position={[19.0759, 72.9976]} icon={markerIcon}>
            <Popup>Navi Mumbai, Vashi</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapSection;