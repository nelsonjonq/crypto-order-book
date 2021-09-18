import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import WebSocketConnection from "./services/websocket";

const websocket = new WebSocketConnection();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});