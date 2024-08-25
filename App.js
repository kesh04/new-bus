import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screen/homeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MapScreen from "./screen/MapScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./custom/TabNavigation";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Splash from "./screen/Splash";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
           behavior={Platform.OS === "ios" ? "padding": "height"}
           keyboardVerticalOffset={Platform.OS ==="ios" ? -64:0 }
          style={{flex:1}}>
            <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash}  options={{ headerShown: false }} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen   options={{ headerShown: false }} name="Signup" component={Signup} />
            <Stack.Screen options={{ headerShown: false }} name="TabNavigation" component={TabNavigation} />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen options={{ headerShown: false }} name="MapScreen" component={MapScreen} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
