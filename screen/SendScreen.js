import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Header from "../components/Header";
import CircularProgress from "../components/CircularProgress";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import InputBox from "../components/InputBox";
import { TextInput } from "react-native-gesture-handler";

const SendScreen = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Header title={"PARA GÖNDER"} />
        <View style={styles.barcontainer}>
          <CircularProgress
            size={150}
            width={12}
            fill={60}
            backgroundWidth={10}
            rotation={0 - 225}
            tintColor="#caea75"
            lineCap={"round"}
            backgroundColor="#636b6f"
          />
          <Text style={styles.balancetext}>500 TL </Text>
          <Text
            style={[
              styles.balancetext,
              {
                top: "55%",
                fontSize: 10,
                fontFamily: "Montserrat_600SemiBold",
              },
            ]}
          >
            Kalan Bakiye
          </Text>
        </View>

        <View style={styles.inputcontainer}>
          <InputBox title={"Açıklama"} />
          <InputBox title={"Tutar"} />
          <InputBox title={"Alıcı Kart Numarası"} />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171f25",
  },
  barcontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  balancetext: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
  credittext: {},
});

export default SendScreen;
