import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const SendButton = ({ onPress}) => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttontext}>GÖNDER</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: (Height * 0.2) / 3,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "60%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#caea75",
  },
  buttontext: {
    textAlign: "center",
    fontSize: 18,
    color: "#2e361b",
    letterSpacing: 1,
    fontFamily: "Montserrat_700Bold",
  },
});

export default SendButton;
