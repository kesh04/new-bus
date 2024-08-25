import {  FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navReducer'


const  data =[
    {
        id:"123",
        title:"Get a bus",
        image:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_221,w_221/v1696961952/assets/3c/de13a8-e12a-433e-b94b-edc1fc431797/original/Shuttle.png",
        screen:"MapScreen",
    },
  

]
const navOptions = () => {
   const navigation = useNavigation(); 
    const origin = useSelector(selectOrigin )

  return (
    <View>
     <FlatList
       data={data}
       horizontal
       keyExtractor={(item)=> item.id}
       renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate(item.screen)} 
            disabled={!origin}
            style={tw `p-2 pl-8 pb-2 pt-3 bg-gray-200 m-20 `}>
             <View style={ tw `${!origin && "opacity-20"}`}>
                <Image 
                style={{width:120,height:120, resizeMode:"contain", left:-15}}
                source={{uri:item.image}}/>
                <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon style={tw `p-2 bg-black rounded-full w-10 mt-4 left-4`} name='arrowright' color='white' type='antdesign'/>  
             </View>
          </TouchableOpacity>
       )}
          
      
       
     />
    </View>
  )
}

export default navOptions
