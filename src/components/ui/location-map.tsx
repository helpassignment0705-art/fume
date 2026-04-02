"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"
import { locations } from "@/lib/data"
import "leaflet/dist/leaflet.css"

const customIcon = new Icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath fill='%23d92365' d='M384 192c0 88.4-71.6 160-160 160S64 280.4 64 192c0-86.8 68.8-157.6 154.5-162.8C219.2 13.3 220.3 12 224 12s4.8 1.3 5.5 2.2C249.2 34.4 318 105.2 384 192zM192 160c-44.2 0-80-35.8-80-80S147.8 0 192 0s80 35.8 80 80-35.8 80-80 80zm0-128c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z'/%3E%3C/svg%3E",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

export default function LocationMap() {
  useEffect(() => {
    // Fix for Leaflet default marker icons not loading in Next.js
    delete (Icon.Default.prototype as any)._getIconUrl
    Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    })
  }, [])

  const center: [number, number] = [28.59, 77.12]

  return (
    <MapContainer
      center={center}
      zoom={11}
      style={{ height: "100%", width: "100%", borderRadius: "12px" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.coordinates.lat, location.coordinates.lng]}
          icon={customIcon}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">{location.name}</h3>
              <p className="text-sm text-gray-600">{location.address}</p>
              <p className="text-sm text-[#d92365] mt-1">{location.seats}+ seats available</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
