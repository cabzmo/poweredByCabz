import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => console.log("text clicked")}>
        Hello React Native
      </Text>
      <TouchableHighlight onPress={() => console.log("remote image clicked")}>
        <Image
          blurRadius={3}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => console.log("local image clicked")}>
        <Image source={require("./assets/favicon.png")} />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
