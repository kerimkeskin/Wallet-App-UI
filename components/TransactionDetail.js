import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { Entypo } from "@expo/vector-icons";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
const TransactionDetail = ({ info, date, price }) => {
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
        <View style={styles.image}>
          <Entypo name="arrow-long-right" size={24} color="green" />
        </View>

        <View style={styles.transactioncontainer}>
          <View>
            <Text style={styles.transactiontext}>{info}</Text>
            <Text
              style={[
                styles.transactiontext,
                { fontSize: 12, color: "#636b6f" },
              ]}
            >
              {date}
            </Text>
          </View>

          <Text style={styles.transactiontext}>{price}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: Width * 0.9,
    height: 55,
    flexDirection: "row",
    margin: 5,
  },
  transactioncontainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 70,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  transactiontext: {
    fontSize: 17,
    color: "white",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default TransactionDetail;
