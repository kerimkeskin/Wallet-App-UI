import React from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const CircularProgress = (props) => {
  return (
    <View>
      <AnimatedCircularProgress {...props} />
    </View>
  );
};

export default CircularProgress;
