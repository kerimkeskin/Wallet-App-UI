import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  TextInput,
} from "react-native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const InputBox = ({ title }) => {
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
        <View style={styles.box}>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.inputcontainer}>
            <TextInput selectionColor={"white"} style={styles.textinput} />
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {},
  inputcontainer: {
    alignItems: "center",
    margin: 15,
  },
  box: {
    height: Height * 0.12,
    padding: 20,
  },
  text: {
    color: "white",
    fontFamily: "Montserrat_700Bold",
    fontSize: 15,
  },
  textinput: {
    paddingHorizontal: 30,
    color: "white",
    backgroundColor: "#212b31",
    width: Width * 0.9,
    height: (Height * 0.12) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});

export default InputBox;
