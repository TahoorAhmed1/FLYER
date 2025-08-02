"use client";

import { MapPin, Star } from "lucide-react";
import { useEffect, useRef } from "react";

// Declare the global google object for TypeScript
declare global {
  interface Window {
    google: {
      maps: {
        Map: new (mapDiv: HTMLElement, opts?: any) => any;
        Marker: new (opts?: any) => any;
        InfoWindow: new (opts?: any) => any;
        SymbolPath: {
          CIRCLE: any;
          // Add other SymbolPath members if needed
        };
        // Add other Google Maps types as needed
      };
    };
  }
}

const stores = [
  {
    id: 1,
    name: "Panda Mussanah, Makkah Road",
    address: "King Abdulaziz Rd, Al Mussanah, Al Riyadh 12461, Saudi Arabia",
    addressArabic: "Mussanah 12461, Saudi Arabia",
    lat: 24.7136,
    lng: 46.6753,
    rating: null,
    reviews: null,
  },
  {
    id: 2,
    name: "Panda Qaboos Lebnan",
    address: "Sultan Qaboos Lebnan, Riyadh 11564, Saudi Arabia",
    addressArabic: "",
    lat: 24.7236,
    lng: 46.6853,
    rating: null,
    reviews: null,
  },
  {
    id: 3,
    name: "Hyper Panda Bilal Abn Rabah",
    address: "Bilal Ibn Abn Rabah, Tuwaiq, Riyadh 14921, Saudi Arabia",
    addressArabic: "",
    lat: 24.7036,
    lng: 46.6953,
    rating: null,
    reviews: null,
  },
  {
    id: 4,
    name: "Panda Al Groob",
    address: "Bilal Ibn Abn Rabah, Tuwaiq, Riyadh 14921, Saudi Arabia",
    addressArabic: "",
    lat: 24.6936,
    lng: 46.7053,
    rating: null,
    reviews: null,
  },
  {
    id: 5,
    name: "Panda Qiryab",
    address: "Riyadh Branch Rd, Qiryab, Riyadh 14914, Saudi Arabia",
    addressArabic: "",
    lat: 24.6836,
    lng: 46.7153,
    rating: null,
    reviews: null,
  },
  {
    id: 6,
    name: "Panda Suwaidi",
    address:
      "Imam Ibn Saud Al Muqaddas, As Suwaidi Al Sharqiya, Riyadh 12793, Saudi Arabia",
    addressArabic: "",
    lat: 24.6736,
    lng: 46.7253,
    rating: null,
    reviews: null,
  },
  {
    id: 7,
    name: "Panda Mercato Mall",
    address: "",
    addressArabic: "",
    lat: 24.6636,
    lng: 46.7353,
    rating: 4.0,
    reviews: 302,
  },
];

// Define a type for a single store item
type Store = (typeof stores)[number];

function GoogleMap({ stores }: { stores: Store[] }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any | null>(null); // Keep as any for simplicity with global google object

  useEffect(() => {
    if (!mapRef.current) return;

    // Access window.google with a type assertion
    const google = (window as any).google;

    // Ensure Google Maps API is loaded
    if (typeof window === "undefined" || !google || !google.maps) {
      console.warn("Google Maps API not loaded yet.");
      return;
    }

    // Initialize the map
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 24.7136, lng: 46.6753 }, // Riyadh coordinates
      zoom: 12,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      zoomControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    });

    mapInstanceRef.current = map;

    // Add markers for each store
    stores.forEach((store: Store) => {
      const marker = new google.maps.Marker({
        position: { lat: store.lat, lng: store.lng },
        map: map,
        title: store.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: store.rating ? "#ef4444" : "#eab308", // Red for rated, yellow for others
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 2,
        },
      });

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-semibold text-sm mb-1">${store.name}</h3>
            <p class="text-xs text-gray-600 mb-1">${store.address}</p>
            ${
              store.rating
                ? `
              <div class="flex items-center space-x-1 mt-2">
                <span class="text-sm font-medium">${store.rating}</span>
                <span class="text-xs text-blue-600">${store.reviews} reviews</span>
              </div>
            `
                : ""
            }
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }, [stores]);

  return <div ref={mapRef} className="w-full h-full" />;
}

export default function Google() {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-80 bg-white border-r border-gray-200">
        <div className="h-screen overflow-y-auto">
          <div className="p-4 space-y-4">
            {stores.map((store) => (
              <div
                key={store.id}
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 mb-1">
                      {store.name}
                    </h3>

                    {store.address && (
                      <p className="text-xs text-gray-600 mb-1 leading-relaxed">
                        {store.address}
                      </p>
                    )}

                    {store.addressArabic && (
                      <p className="text-xs text-gray-600 mb-2">
                        {store.addressArabic}
                      </p>
                    )}

                    {store.rating && (
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium text-gray-900">
                            {store.rating}
                          </span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(store.rating!)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-blue-600 hover:underline cursor-pointer">
                          {store.reviews} reviews
                        </span>
                      </div>
                    )}

                    {store.rating && (
                      <p className="text-xs text-gray-500 mt-1">
                        View larger map
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <GoogleMap stores={stores} />
      </div>
    </div>
  );
}
