import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import backgroundImage from "../config/backgroundImage";

function SignUpScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={[{ backgroundColor: "white" }, styles.containers]}>
        <View style={[{ backgroundColor: "dodgerblue" }, styles.boxes]}>
          <Text>Label</Text>
        </View>
        <View style={[{ backgroundColor: "tomato" }, styles.boxes]} />
        <View style={[{ backgroundColor: "gold" }, styles.boxes]} />
      </View>

      <View style={[{ backgroundColor: "black" }, styles.containers]}>
        <View style={[{ backgroundColor: "dodgerblue" }, styles.boxes]}>
          <Text>TextBox</Text>
        </View>
        <View style={[{ backgroundColor: "tomato" }, styles.boxes]} />
        <View style={[{ backgroundColor: "gold" }, styles.boxes]} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  boxes: {
    width: 150,
    height: 30,
  },
  containers: {
    width: 150,
    height: 135,
    justifyContent: "space-evenly",
  },
});

export default SignUpScreen;
