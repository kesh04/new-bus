import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Input from "../custom/Input";
import Button from "../custom/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../FirebaseConfig" 
import { useNavigation } from "@react-navigation/native";


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
  const signUpUser = async () => {
    try {
     
      if (password !== confirmPassword) {
        setShowError(true);
        setErrorMessage("Passwords do not match");
        return;
      }

    
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

     
      navigation.navigate("TabNavigation");
    } catch (error) {
      console.error("Error registering user:", error.message);
     
      setShowError(true);
      setErrorMessage(error.message);
    }
  };

  const signIngoogle = ()=>{
    console.warn('Sign in with  google');
  }
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.heading}>Create an account</Text>
          <Input
            placeholder="E-mail"
            value={email}
            setValue={setEmail}
          />
          <Input
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <Input
            placeholder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry={true}
          />
          {showError && <Text style={styles.error}>{errorMessage}</Text>}
          <Button text="Register" onPress={signUpUser} />
          {/* <Button
              text="Sign In with Google"
              bgcolor="#FAE9EA"
              fgcolor="#DD4D44"
              onPress={signIngoogle}
            /> */}
          <Button
            text="Already have an account? Login here"
            onPress={() => navigation.navigate("Login")}
            type="TERITIARY"
          />

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  heading: {
    color: "#052c60",
    fontSize: 24,
    margin: 10,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});