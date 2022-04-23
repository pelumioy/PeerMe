import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/peerme.png")} />
        <Text style={styles.tagline} >The best teachers are your peers</Text>
        <Image style={styles.logoo} source={require("../assets/bgg.png")} />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login") } />
        <AppButton title="Register" color="secondary" onPress={() => navigation.navigate("Register") }/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 340,
    height: 100,
  },
  logoo: {
    width: 500,
    height: 600,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 15,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;