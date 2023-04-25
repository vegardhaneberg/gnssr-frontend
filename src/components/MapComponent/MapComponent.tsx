import React, { useEffect } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "./MapComponent.css";
import { LatLng } from "leaflet";
import { LatLngExpression } from "leaflet";
import { LatLngBounds } from "leaflet";
import { LatLngBoundsExpression } from "leaflet";

function MapComponent() {
  const lineNorth: LatLngExpression[] = [
    [38.0, -180.0],
    [38.0, 180.0],
  ];

  const lineSouth: LatLngExpression[] = [
    [-38.0, -180.0],
    [-38.0, 180.0],
  ];
  const bounds: LatLngBoundsExpression = [
    [-45, -180],
    [45, 180],
  ];

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2.8}
      scrollWheelZoom={true}
      minZoom={2.8}
      maxBounds={bounds}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline pathOptions={{ color: "red" }} positions={lineNorth} />
      <Polyline pathOptions={{ color: "red" }} positions={lineSouth} />
    </MapContainer>
  );
}

export default MapComponent;
