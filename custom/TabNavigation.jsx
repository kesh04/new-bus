import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screen/homeScreen";

import { Entypo, FontAwesome, Fontisto } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Search from "../screen/Search";
import { FontAwesome5 } from '@expo/vector-icons';
import Specail from "../screen/Specail";
import Profile from "../screen/Profile";
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false  } }>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={25} color="#FED339" />
            ) : (
              <Entypo
                name="home"
                size={25}
                color="#808080"
              />
            ),
          
        }}
      />
    
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="magnify" size={30} color="#FED339" />
            ) : (
              <MaterialCommunityIcons name="magnify" size={30} color="#808080" />
            ),
        }}
      />
        <Tab.Screen
        name="Specail"
        component={Specail}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="star" size={24} color="#FED339" />
            ) : (
              <FontAwesome5 name="star" size={24} color="#808080" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Fontisto name="player-settings" size={25} color="#FED339" />
            ) : (
              <Fontisto
                name="player-settings"
                size={25}
                color="#808080"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigation;
