import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/AppText.js";
import AppButton from "../components/AppButton";

function DemoScreen(props) {
  return (
    <View style={styles.container}>
      <AppButton title="Login " onPress={() => alert("hello")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  demo: {
    backgroundColor: "dodgerblue",
    height: 100,
    width: 100,
    elevation: 20,
  },
});

export default DemoScreen;
