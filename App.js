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

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={WelcomeScreen} name="Home" />
        <Stack.Screen component={ViewImageScreen} name="Chair" />
      </Stack.Navigator>
    </NavigationContainer>
    // <WelcomeScreen />;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
