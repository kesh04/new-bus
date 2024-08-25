import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import data from '../bus.json';  // Update the path as necessary

const Specail = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "MOVELK",
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

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setErrorMessage('Please enter your location');
      setSearchPerformed(false);
      return;
    }

    const filtered = data.filter(item => 
      item.from.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setSearchPerformed(true);
    setErrorMessage(''); 
  };

  const handleInputChange = (text) => {
    setSearchQuery(text);
    setSearchPerformed(false); 
    setErrorMessage(''); 
  };

  const handleItemPress = (item) => {
    navigation.navigate('specailBus', { item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={[styles.input, { paddingLeft: 40 }]}
            keyboardType="default"
            placeholder="WHERE"
            value={searchQuery}
            onChangeText={handleInputChange}
          />
          <FontAwesome
            style={{ position: "absolute", right: 36, top: 15.8 }}
            name="search"
            onPress={handleSearch}
            size={24}
            color="black"
          />
        </View>
      </View>

      {errorMessage ? (
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        </View>
      ) : (
        searchPerformed && (
          filteredData.length > 0 ? (
            <FlatList
              data={filteredData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleItemPress(item)}>
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.details}>
                      <Text style={styles.name}>{item.Name}</Text>
                      <Text>{`From: ${item.from}`}</Text>
                      <Text>{`Phone: ${item.contact}`}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          ) : (
            <View style={styles.noResultContainer}>
              <Text style={styles.noResultText}>No buses available</Text>
            </View>
          )
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 30,
    rowGap: 20,
  },
  input: {
    height: 55,
    marginHorizontal: 16,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderColor: "#FED339",
    borderWidth: 2,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  details: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noResultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  noResultText: {
    fontSize: 18,
    color: 'gray',
  },
  errorMessageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  errorMessageText: {
    fontSize: 18,
    color: 'red',
  },
});

export default Specail;
