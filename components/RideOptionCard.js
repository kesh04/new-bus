import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const  data =[
  {
    id:"movelk-x-123",
    title:"DS Gunasekara",
    long:"5km",
    nubmer:"NC-2004",
    routeN:"57",
    image:"https://cdn.pixabay.com/photo/2014/04/02/10/23/coach-303659_960_720.png"
  },
  {
    id:"movelk-x-122",
    title:"Wajira",
    long:"8km",
    nubmer:"ND-1698",
    routeN:"57",
    image:"https://cdn.pixabay.com/photo/2014/04/02/10/23/coach-303659_960_720.png"
  },
 
]


const RideOptionCard = () => {
  const navigation = useNavigation();
  const  [selectd, setSeleted]= useState(null)
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>RideOptionCard</Text>
      </View>

      <FlatList 
       data={data}
       keyExtractor={(item)=> item.id}
       renderItem={({item :{id,title,routeN,nubmer,image},item})=>(
             <TouchableOpacity 
             onPress={()=>setSeleted(item)}
             style={tw `flex-row  justify-between px-6 ${id === selectd?.id && 'bg-gray-200'}`}>
               < Image
                  style={{
                    width:100,
                    height:100,
                    resizeMode:"contain",
                    left:-15
                  }}
                source={{uri:image}}
               />
               <View style={tw `-ml-2 `}>
                 <Text style={tw `text-xl font-semibold `}>{item.title}</Text>
                 <Text>Time : {item.long}</Text>
                 <Text>Route nubmer : {item.routeN}</Text>

                 
               </View>
               <Text style={tw `text-xl -ml-2 left-4 `}>{item.nubmer}</Text>
             </TouchableOpacity>
       )}
      
      
      />
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
