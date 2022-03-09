import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";

import backgroundImage from "../config/backgroundImage";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <StatusBar style={"auto"} />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}>
        <Button
          color={"black"}
          title="View Chair"
          onPress={() => navigation.navigate("Chair")}
        />
      </View>
      <View style={styles.registerButton}>
        <Button
          color={"black"}
          title="Sign Up"
          onPress={() => navigation.navigate("Sign Up")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: backgroundImage,
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
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
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
  },
});

export default WelcomeScreen;
