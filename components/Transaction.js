import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const Transaction = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            margin: 20,
            justifyContent: "space-between",
            color: "white",
            width: Width * 0.9,
          }}
        >
          <Text style={styles.transactiontext}>GEÇMİŞ İŞLEMLER</Text>
          <Text
            style={[styles.transactiontext, { fontSize: 14, color: "#caea75" }]}
          >
            Hepsini gör
          </Text>
        </View>

        <ScrollView style={styles.container}>
          <View style={styles.cardContainer}>
            <View
              style={{
                width: 55,
                height: 55,
                borderRadius: 70,
                backgroundColor: "white",
              }}
            ></View>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  cardContainer: {
    width: Width * 0.9,
    height: Height * 0.35,
    backgroundColor: "#212b31",
    borderRadius: 15,
    flexDirection: "column",
  },
  transactiontext: {
    fontSize: 17,
    color: "white",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default Transaction;
