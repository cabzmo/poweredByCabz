import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

function SignUpScreen(props) {
  const [form, onChangeForm] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const updateUsername = (newUsername) => {
    onChangeForm((previousState) => {
      return { ...previousState, username: newUsername };
    });
  };

  const updatePassword = (newPassword) => {
    onChangeForm((previousState) => {
      return { ...previousState, password: newPassword };
    });
  };

  const updateConfirmPassword = (newConfirmPassword) => {
    onChangeForm((previousState) => {
      return { ...previousState, confirmPassword: newConfirmPassword };
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/background.jpg")}
        >
          <StatusBar style={"auto"} />
          {/* Logo and text */}
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/logo-red.png")}
            />
            <Text style={styles.logoText}>Sell What You Don't Need</Text>
          </View>

          {/* Form */}
          <View style={styles.placeholder}>
            {/* Left side */}
            <View style={styles.containers}>
              <View style={styles.boxes}>
                <View style={styles.labelHolder}>
                  <Text style={styles.labelsText}>Username:</Text>
                </View>
              </View>
              <View style={styles.boxes}>
                <View style={styles.labelHolder}>
                  <Text style={styles.labelsText}>Password:</Text>
                </View>
              </View>
              <View style={styles.boxes}>
                <View style={styles.labelHolder}>
                  <Text style={styles.labelsText}>Confirm Password:</Text>
                </View>
              </View>
            </View>

            {/* Right side */}
            <View style={[styles.containers, { backgroundColor: "black" }]}>
              <View style={styles.boxes}>
                <TouchableHighlight style={styles.touchable}>
                  <TextInput
                    style={styles.textInput}
                    value={form.username}
                    onChangeText={updateUsername}
                  ></TextInput>
                </TouchableHighlight>
              </View>
              <View style={styles.boxes}>
                <TouchableHighlight style={styles.touchable}>
                  <TextInput
                    style={styles.textInput}
                    value={form.password}
                    onChangeText={updatePassword}
                  ></TextInput>
                </TouchableHighlight>
              </View>
              <View style={styles.boxes}>
                <TouchableHighlight style={styles.touchable}>
                  <TextInput
                    style={styles.textInput}
                    value={form.confirmPassword}
                    onChangeText={updateConfirmPassword}
                  ></TextInput>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    flex: 1,
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
    borderWidth: 5,
    flexDirection: "row",
    top: 60,
  },
  textbox: {
    backgroundColor: "white",
    width: "90%",
    height: "70%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textInput: {
    backgroundColor: "white",
    width: "90%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  touchable: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

export default SignUpScreen;
