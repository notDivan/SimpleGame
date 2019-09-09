import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import NumberContainer from "../components/Numbercontainer";
import Card from "../components/cards";
import Colour from "../constants/colors";
const generateNumber = (min, max, excluded) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === excluded) {
    return generateNumber(min, max, excluded);
  } else {
    return randomNum;
  }
};

const StartGameScreen = props => {
  const [currentGuess, setCurreuntGuess] = useState(
    generateNumber(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentHigh = useRef(100);
  const currentLower = useRef(1);
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const guessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "high" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Liar!", "You Know You are lying!!!", [
        { text: "sorry", style: "cancel" }
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLower.current = currentGuess;
    }

    const nextNumber = generateNumber(
      currentLower.current,
      currentHigh.current,
      currentGuess
    );
    setCurreuntGuess(nextNumber);
    setRounds(currtRound => currtRound + 1);
  };

  return (
    <View style={styles.Screen}>
      <Text> Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={guessHandler.bind(this, "lower")}
          color={Colour.accent}
        />
        <Button
          title="GREATER"
          onPress={guessHandler.bind(this, "high")}
          color={Colour.primary}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  Screen: {
    padding: 10,
    alignItems: "center",
    marginTop: 60
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: 200,
    maxWidth: "80%",
    paddingHorizontal: 15,
    alignItems: "center"
  }
});

export default StartGameScreen;
