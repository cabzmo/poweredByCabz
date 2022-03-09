import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  Platform,
  Image,
  SafeAreaView,
  View,
  TouchableHighlight,
  Button,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./app/screens/SignUpScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={WelcomeScreen}
          name="Home"
          options={{ title: "Home" }}
        />
        <Stack.Screen
          component={ViewImageScreen}
          name="Chair"
          options={{
            title: "Chair",
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info >"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen
          component={SignUpScreen}
          name="Sign Up"
          options={{ title: "Sign Up" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <SignUpScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
