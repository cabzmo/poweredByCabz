import React from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.containter}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 35,
    height: 35,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  containter: {
    backgroundColor: "#000000",
    flex: 1,
  },
  deleteIcon: {
    width: 35,
    height: 35,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
