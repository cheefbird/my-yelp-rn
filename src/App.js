import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.placeholder}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  placeholder: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
