import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { firebaseAuth } from "../FirebaseConfig";
import { signOut, deleteUser } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [userEmail, setUserEmail] = useState(null);
  const navigation = useNavigation();


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
  useEffect(() => {
    const user = firebaseAuth.currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const user = firebaseAuth.currentUser;
      if (user) {
        await deleteUser(user);
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Error deleting account:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logged in as: {userEmail}</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
      <Button title="Delete Account" onPress={handleDeleteAccount} color="red" />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
