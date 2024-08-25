import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BusSearch = ({ flight }) => {
    return (
        <View style={styles.container}>
          <Image source={{ uri: flight.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{flight.Name}</Text>
            <Text style={styles.route}>{flight.from} <Ionicons name="arrow-forward" size={14} color="gray"   /> {flight.to}</Text>
            <Text style={styles.time}> Departure Time :{flight.departAt}</Text>
            <Text style={styles.time}> Arrival Time: {flight.arrT}</Text>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
      },
      image: {
        width: 100,
        height: 100,
       
        marginRight: 15,
      },
      details: {
        flex: 1,
      },
      name: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      route: {
        color: 'gray',
    fontSize:16
      },
      time: {
        color: 'dimgray',
      },
    });
    

export default BusSearch;
