import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colours from "../constants/colors";
const NumberContainer = props => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 2,
    borderColor: Colours.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignContent: "center",
    justifyContent: "center"
  },
  number: {
    fontSize: 30,
    color: Colours.primary
  }
});

export default NumberContainer;
