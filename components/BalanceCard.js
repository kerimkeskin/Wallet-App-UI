import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
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

const BalanceCard = () => {
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
        <View style={styles.cardContainer}>
          <View style={{ padding: 30 }}>
            <Text style={styles.balancetext}>Bakiye</Text>
            <Text style={styles.pricetext}>550,27 TL </Text>
          </View>

          <View style={styles.qrcodecontainer}>
            <Image
              style={styles.qrcodeimage}
              source={require("../assets/images/qrcode.png")}
            />
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  cardContainer: {
    width: Width * 0.9,
    height: Height * 0.11,
    backgroundColor: "#212b31",
    marginHorizontal: 50,
    marginVertical: 30,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  qrcodecontainer: {
    flex: 1,
    width: 60,
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    position: "absolute",
    top: (Height * 0.11 - 50) / 2,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  qrcodeimage: {
    width: 35,
    height: 35,
  },
  balancetext: {
    fontSize: 15,
    color: "white",
    marginVertical: 7,
    fontFamily: "Montserrat_700Bold",
  },
  pricetext: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Montserrat_800ExtraBold",
  },
});

export default BalanceCard;
