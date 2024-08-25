// import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
// import React, { useLayoutEffect } from "react";
// import tw from "tailwind-react-native-classnames";
// import NavOptions from "../components/navOptions";
// import { GOOGLE_MAPS_APIKEY } from "@env";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { useDispatch } from "react-redux";
// import { setDestination, setOrigin } from "../slices/navReducer";
// import { useNavigation } from "@react-navigation/native";

// const HomeScreen = () => {
//   const dispatch = useDispatch();
//   const navigation = useNavigation();
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       title: " MOVELK",
//       headerTitleStyle: {
//         color: "white",
//         fontSize: 20,
//         fontWeight: "bold",
//         paddingHorizontal: "35%",
//       },
//       headerStyle: {
//         backgroundColor: "#FED339",
//         height: 100,
//       },
//     });
//   }, []);
//   return (
//     <SafeAreaView>
//       <View style={tw`p-10`}>
      

//         <GooglePlacesAutocomplete
//           placeholder="Search"
//           styles={{
//             container: {
//               flex: 0,
//             },
//             textInput: {
//               fontSize: 15,
//             },
//           }}
//           onPress={(data, details = null) => {
//             if (details) {
//               dispatch(
//                 setOrigin({
//                   location: details.geometry.location,
//                   description: data.description,
//                 })
//               );
//               dispatch(setDestination(null));
//             }
//           }}
//           fetchDetails={true}
//           returnKeyType={"search"}
//           minLength={2}
//           enablePoweredByContainer={false}
//           query={{
//             key: GOOGLE_MAPS_APIKEY,
//             language: "en",
//           }}
//           nearbyPlacesAPI="GooglePlacesSearch"
//           debounce={400}
//         />
//         <NavOptions />
//       </View>

//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  
//   <Pressable
//     style={{
//       width: 200,
//       height: 150,
//       marginTop: 10,
//       backgroundColor: "#FED339",
//       borderRadius: 10,
//       padding:20,
//       marginHorizontal:20,
//       top:20
//     }}
//   >
//     <Text style={{ color:"black",fontSize:15, fontWeight:'bold', marginVertical:7}}>RATHANA TRAVELS</Text>
//     <Text style={{ color:"black",fontSize:15, fontWeight:'500', marginVertical:7}}>JOIN WITH MOVELK 😃 </Text>
//   </Pressable>
//   <Pressable
//     style={{
//       width: 300,
//       height: 150,
//       marginTop: 10,
//       borderRadius: 10,
//       padding:20,
//       marginHorizontal:40, 
//       top:20
//     }}
//   >
// <Image
//     source={require("../assets/images/main1.jpeg")}
//     style={styles.img2}
//   />
//   </Pressable>
//   <Pressable
//     style={{
//       width: 400,
//       height: 150,
//       marginTop: 10,
//       borderRadius: 10,
//       padding:20,
//       marginHorizontal:20, 
//       top:20
//     }}
//   >
// <Image
//     source={require("../assets/images/main1.jpeg")}
//     style={styles.img2}
//   />
//   </Pressable>


// </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     height: "100%",
//   },
//   header: {
//     height: "30%",
//     borderRadius: 10,
//   },
//   kesh:{
//     color:"green",
//   },
//   keshPink:{
//     color:"yellow",
//   },
//   input: {
//     height: 55,
//     marginHorizontal: 5,
//     borderRadius: 10,
//     fontSize: 16,
//     backgroundColor: "#C0C0C0",
//     borderColor: "#F7F7F7",
//     borderWidth: 2,
//   },
//   text1: {
//     color: "black",
//     fontSize: 30,
//     marginHorizontal: 20,
//     textAlign: "center",
//   },
//   img1: {
//     width: "100%",
//     height: 170,
//     bottom: -20,
//   },
//   img2: {
//     width: "100%",
//     height: 190,
//     bottom: 20,
//     borderRadius: 20,
//   },
//   button: {
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 20,
//     marginTop: -10,
//     marginLeft: 5,
//     backgroundColor: "#FED339",
//     width: "45%",
//     height: "20%",
//     flexDirection: "row",
//   },
//   text: {
//     fontSize: 15,
//     color: "white",
//   },
//   inputContainer: {
//     marginHorizontal: 16,
//   },
//   home: {
//     borderRadius: 30,
//     marginHorizontal: 30,
//     marginTop: -50,
//   },
// });

import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/navOptions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navReducer";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: " MOVELK",
      headerTitleStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: "35%",
      },
      headerStyle: {
        backgroundColor: "#FED339",
        height: 100,
      },
    });
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      dispatch(
        setOrigin({
          location: { lat: latitude, lng: longitude },
          description: "Current Location",
        })
      );
      dispatch(setDestination(null));
    })();
  }, []);

  return (
    <SafeAreaView>
      <View style={tw`p-10`}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 15,
            },
          }}
          onPress={(data, details = null) => {
            if (details) {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              dispatch(setDestination(null));
            }
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable
          style={{
            width: 200,
            height: 150,
            marginTop: 10,
            backgroundColor: "#FED339",
            borderRadius: 10,
            padding: 20,
            marginHorizontal: 20,
            top: 20,
          }}
        >
          <Text style={{ color: "black", fontSize: 15, fontWeight: "bold", marginVertical: 7 }}>RATHANA TRAVELS</Text>
          <Text style={{ color: "black", fontSize: 15, fontWeight: "500", marginVertical: 7 }}>JOIN WITH MOVELK 😃</Text>
        </Pressable>
        <Pressable
          style={{
            width: 300,
            height: 150,
            marginTop: 10,
            borderRadius: 10,
            padding: 20,
            marginHorizontal: 40,
            top: 20,
          }}
        >
          <Image
            source={require("../assets/images/main1.jpeg")}
            style={styles.img2}
          />
        </Pressable>
        <Pressable
          style={{
            width: 400,
            height: 150,
            marginTop: 10,
            borderRadius: 10,
            padding: 20,
            marginHorizontal: 20,
            top: 20,
          }}
        >
          <Image
            source={require("../assets/images/main1.jpeg")}
            style={styles.img2}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    height: "30%",
    borderRadius: 10,
  },
  kesh: {
    color: "green",
  },
  keshPink: {
    color: "yellow",
  },
  input: {
    height: 55,
    marginHorizontal: 5,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#C0C0C0",
    borderColor: "#F7F7F7",
    borderWidth: 2,
  },
  text1: {
    color: "black",
    fontSize: 30,
    marginHorizontal: 20,
    textAlign: "center",
  },
  img1: {
    width: "100%",
    height: 170,
    bottom: -20,
  },
  img2: {
    width: "100%",
    height: 190,
    bottom: 20,
    borderRadius: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: -10,
    marginLeft: 5,
    backgroundColor: "#FED339",
    width: "45%",
    height: "20%",
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    color: "white",
  },
  inputContainer: {
    marginHorizontal: 16,
  },
  home: {
    borderRadius: 30,
    marginHorizontal: 30,
    marginTop: -50,
  },
});
