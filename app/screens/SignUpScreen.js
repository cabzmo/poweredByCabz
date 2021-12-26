import React from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

import backgroundImage from "../config/backgroundImage";

function SignUpScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.placeholder}>
        <View style={[styles.containers, { backgroundColor: "grey" }]}>
          <View style={[styles.boxes, { backgroundColor: "dodgerblue" }]}>
            <View style={styles.labelHolder}>
              <Text style={styles.labelsText}>Username:</Text>
            </View>
          </View>
          <View style={[styles.boxes, { backgroundColor: "tomato" }]}>
            <View style={styles.labelHolder}>
              <Text style={styles.labelsText}>Password:</Text>
            </View>
          </View>
          <View style={[styles.boxes, { backgroundColor: "gold" }]}>
            <View style={styles.labelHolder}>
              <Text style={styles.labelsText}>Confirm Password:</Text>
            </View>
          </View>
        </View>

        <View style={[{ backgroundColor: "black" }, styles.containers]}>
          <View style={[{ backgroundColor: "dodgerblue" }, styles.boxes]}>
            <View style={[{ backgroundColor: "white" }, styles.textbox]} />
          </View>
          <View style={[{ backgroundColor: "tomato" }, styles.boxes]}>
            <View style={[{ backgroundColor: "white" }, styles.textbox]} />
          </View>
          <View style={[{ backgroundColor: "gold" }, styles.boxes]}>
            <View style={[{ backgroundColor: "white" }, styles.textbox]} />
          </View>
        </View>
      </View>
      <StatusBar style={"auto"} />
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
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  containers: {
    width: 150,
    height: 135,
    justifyContent: "space-evenly",
  },
  labelHolder: {
    width: "90%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  labelsText: {
    fontWeight: "600",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  placeholder: {
    flexDirection: "row",
    top: 50,
  },
  textbox: {
    width: "90%",
    height: "70%",
  },
});

export default SignUpScreen;
