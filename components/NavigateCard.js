import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navReducer';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
const NavigateCard = () => {
    const dispatch = useDispatch();
    
    const  navigation = useNavigation()
  return (
   <SafeAreaView style={ tw ` bg-white flex-1`}>
      <TouchableOpacity
          onPress={() => navigation.navigate("TabNavigation")}
          style={tw`absolute top-8 left-10 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
      <Text style={tw `text-center py-5 text-xl`}>MOVE LK</Text>
    <View style={tw `border-t border-gray-200 flex-shrink`}>
    <View>
        <GooglePlacesAutocomplete
         styles={toInputBoxStyles}
          placeholder='where to '
          fetchDetails={true}
          enablePoweredByContainer={false}
          returnKeyType={"search"}
          minLength={2}
          onPress={(data, details = null) => {
          
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description,
              }));
            navigation.navigate('RideOptionCard')
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}

        
        />
      </View>
    </View>

    {/* <View style={tw `flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('RideOptionCard')

        }
        style={tw `flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
            <Icon name='bus' type='font-awesome' color='white' size={16} />
                <Text style={ tw `text-white text-center px-3`}>Bus</Text>           
            </TouchableOpacity>  

       
    </View> */}
     
   </SafeAreaView>
     
   
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:20,
        flex:0,
        
    }
})