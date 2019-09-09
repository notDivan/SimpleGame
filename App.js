import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

import Header from "./components/Header";
import StartScreen from "./screens/StartGameScreen";
import StartGameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [useNumber, setUseNumber] = useState();
  const [guessRound, setRoundNumber] = useState(0);

  const gameFinishHandler = () => {
    setRoundNumber(0);
    setUseNumber(null);
  };

  const startGameHandler = selectednumber => {
    setUseNumber(selectednumber);
    setRoundNumber(0);
  };

  const guessGameoverHandler = numberOfRound => {
    setRoundNumber(numberOfRound);
  };

  let content = <StartScreen onStartGame={startGameHandler} />;
  if (useNumber && guessRound <= 0) {
    content = (
      <StartGameScreen
        userChoice={useNumber}
        onGameOver={guessGameoverHandler}
      />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        userNumber={useNumber}
        numRound={guessRound}
        gameHandler={gameFinishHandler}
      />
    );
  }
  return (
    <View>
      <Header title="Geuss a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({});
