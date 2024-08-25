import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) {
  return (
    <View style={style.container}>
      <TextInput 
      value={value} 
      onChangeText={setValue}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    height: 50,
    borderColor: "#e8e8e8",
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
});