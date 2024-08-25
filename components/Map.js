// import { StyleSheet, Text, View } from 'react-native';
// import React, { useEffect, useRef } from 'react';
// import MapView, { Marker } from 'react-native-maps';
// import tw from 'tailwind-react-native-classnames';
// import { useSelector } from 'react-redux';
// import { GOOGLE_MAPS_APIKEY } from "@env";
// import { selectDestination, selectOrigin } from '../slices/navReducer';
// import  MapViewDirection from 'react-native-maps-directions' 

// const Map = () => {
//   const origin = useSelector(selectOrigin);
//   const destination = useSelector(selectDestination)
//   const mapRef = useRef(null)

//   useEffect(()=>{
//     if (!origin || !destination) return;
//     mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
//       edagePadding:{top:50, right:50, bottom:50, left:50},
//     })
//   }, [origin,destination])

//   return (
//     <MapView
//     ref={mapRef}
//       style={tw`flex-1`}
      
//       initialRegion={{
//         latitude: origin.location.lat,
//         longitude: origin.location.lng,
//         latitudeDelta: 0.120,
//         longitudeDelta: 0.170,
//       }}
//     >
//       {origin && destination && (
//            <MapViewDirection 
//               origin={origin.description}
//               destination={destination.description}
//               apikey={GOOGLE_MAPS_APIKEY}
//               strokeWidth={4}
//               strokeColor='red'
//            />
//       )}

//         {origin?.location && (
//             <Marker 
//                coordinate={{
//                 latitude: origin.location.lat,
//                 longitude: origin.location.lng,
//                }}
//                title='Origin'
//                description={origin.description}
//                identifier='origin'
            
//             />
//         )}
//         {destination?.location && (
//             <Marker 
//                coordinate={{
//                 latitude: destination.location.lat,
//                 longitude: destination.location.lng,
//                }}
//                title='destination'
//                description={destination.description}
//                identifier='destination'
            
//             />
//         )}
//         </MapView>
//   );
// };

// export default Map;

// const styles = StyleSheet.create({});



import { StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { selectDestination, selectOrigin } from '../slices/navReducer';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.120,
        longitudeDelta: 0.170,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          destination={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="red"
          onError={(errorMessage) => {
            console.log("Error on GMAPS route request: ", errorMessage);
          }}
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
