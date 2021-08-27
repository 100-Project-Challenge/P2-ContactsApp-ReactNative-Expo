import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Home from "./screens/home";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello this is Abeeeeeeer's World =D</Text> */}
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5D0F5",
    marginTop: Constants.statusBarHeight,
    // flexDirection: 'row',
    // alignItems: "center",
    // justifyContent: "center",
  },
});