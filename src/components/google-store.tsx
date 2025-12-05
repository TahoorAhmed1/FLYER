"use client";

import GoogleMapReact from "google-map-react";
import { MapPin } from "lucide-react";
import React from "react";



interface MarkerProps {
  onClick?: () => void;
}

// Marker component for the map
const Marker: React.FC<MarkerProps> = ({ onClick }) => (
  <div onClick={onClick} className="cursor-pointer">
    <MapPin className="w-6 h-6 text-red-500" />
  </div>
);

export default function Google({stores}:any) {
  const [activeStore, setActiveStore] = React.useState<any | null>(null);

  const defaultCenter = {
    lat: stores[0]?.latitude,
    lng: stores[0]?.longitude,
  };

  const defaultZoom = 14;

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-80  bg-white border-r border-gray-200">
        <div className="h-screen overflow-y-auto mr-2">
          <div className=" space-y-4">
            {stores.map((store:any) => (
              <div
                key={store.id}
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-shadow cursor-pointer border border-gray-200"
                onClick={() => setActiveStore(store)}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 ">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {store.name}
                    </h3>
                    {store.description && (
                      <p className="text-sm text-gray-600 mb-1">
                        {store.description}
                      </p>
                    )}
                    {store.phone && (
                      <p className="text-sm text-gray-600 mb-1">
                        {store.phone}
                      </p>
                    )}
                    {store.address && (
                      <p className="text-sm text-gray-600">{store.address}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 relative rounded-2xl">
        <GoogleMapReact
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
        >
          {stores.map((store:any) => (
            <Marker
              key={store.id}
          
              onClick={() => setActiveStore(store)}
            />
          ))}

            {activeStore && (
            <div
             
              style={{
                position: "absolute",
                transform: "translate(-50%, -120%)",
                background: "white",
                padding: "8px",
                borderRadius: "6px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                minWidth: "150px",
                zIndex: 1000,
              }}
            >
              <h3 className="text-sm font-semibold">{activeStore.name}</h3>
              <p className="text-xs">{activeStore.description}</p>
              <p className="text-xs">{activeStore.phone}</p>
              <p className="text-xs">{activeStore.address}</p>
            </div>
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
}
