import React, { useLayoutEffect, useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, Button, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import data from '../data.json';

import BusSearch from "./BusSearch";

export default function Search() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "MOVELK",
      headerTitleStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: "30%",
      },
      headerStyle: {
        backgroundColor: "#FED339",
        height: 100,
      },
      // headerLeft: () => (
      //   <Image
      //     source={Bus}
      //     style={{
      //       width: 40,
      //       height: 40,
      //       marginLeft: 10,
      //       borderRadius: 50,
      //       backgroundColor: "red",
      //     }}
      //   />
      // ),
    });
  }, [navigation]);

  const [from, setFrom] = useState('');
  const [to, setTO] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSearchPress = () => {
    if (!from || !to) {
      setErrorMessage('Please enter your starting and destination locations.');
      return;
    }

    setIsLoading(true);
    setSearchResults([]);
    setErrorMessage('');

    const filteredData = data.filter(item =>
      item.from.toLowerCase().includes(from.toLowerCase()) &&
      item.to.toLowerCase().includes(to.toLowerCase())
    );

    if (filteredData.length === 0) {
      setErrorMessage('No available data for the entered locations.');
    } else {
      setSearchResults(filteredData);
    }

    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Search</Text>

        <TextInput
          value={from}
          onChangeText={setFrom}
          placeholder="From"
          style={styles.input}
        />

        <TextInput
          value={to}
          onChangeText={setTO}
          placeholder="To"
          style={styles.input}
        />

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <Button title="Search" onPress={onSearchPress} />
      </View>

      {isLoading && <Text>Loading...</Text>}

      {searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          renderItem={({ item }) => <BusSearch flight={item} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          style={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  card: {
    backgroundColor: "white",
    margin: 10,
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
  title: {
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 16,
    marginVertical: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  list: {
    marginHorizontal: 10,
  },
});
