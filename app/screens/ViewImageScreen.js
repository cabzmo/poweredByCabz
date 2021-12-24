import React from "react";
import { StyleSheet, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.background}>
      <View
        style={{ backgroundColor: "dodgerblue", width: 50, height: 50 }}
      ></View>
      <View
        style={{ backgroundColor: "dodgerblue", width: 50, height: 50 }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#000000",
    width: "100%",
    height: 100,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ViewImageScreen;
