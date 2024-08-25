

import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';


import SplashImage from "../assets/images/splach.gif"; 

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 5000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar hidden />
      <Image
        style={{height: 250, width: '100%', resizeMode: 'contain'}}
        source={SplashImage} // Use the imported image here
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
