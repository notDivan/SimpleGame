import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Cards from "../components/cards";
import Colour from "../constants/colors";
const GameOverScreen = props => {
  return (
    <View style={Styles.screen}>
      <Text style={Styles.Title}>Game over</Text>

      <Image
        source={require("../assets/new.jpg")}
        style={Styles.image}
        resizeMode="cover"
      />
      <Cards>
        <Text>Number was:{props.userNumber}</Text>
        <Text>Number Of Round:{props.numRound}</Text>
        <View style={Styles.button}>
          <Button
            title="NEW GAME"
            onPress={props.gameHandler}
            color={Colour.accent}
          />
        </View>
      </Cards>
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center"
  },
  image: {
    width: "80%",
    height: 300
  },
  button: {
    padding: 20
  },
  Title: {
    color: "black",
    fontSize: 50
  }
});

export default GameOverScreen;
