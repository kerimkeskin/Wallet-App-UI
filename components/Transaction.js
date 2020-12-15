import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import TransactionDetail from "../components/TransactionDetail";
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
        <View style={styles.transactionheader}>
          <TouchableOpacity>
            <Text style={styles.transactiontext}>GEÇMİŞ İŞLEMLER</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.transactiontext,
                { fontSize: 14, color: "#caea75" },
              ]}
            >
              Hepsini gör
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.container}>
          <View style={styles.pastTransactionContainer}>
            <TransactionDetail
              info={"Market"}
              date={"15/12/2020"}
              price={"-30,00 TL"}
            />
            <TransactionDetail
              info={"Para Çekme"}
              date={"13/12/2020"}
              price={"-50,00 TL"}
            />
            <TransactionDetail
              info={"Para Yatırma"}
              date={"12/12/2020"}
              price={"+240,00 TL"}
            />
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
  pastTransactionContainer: {
    width: Width * 0.9,
    height: Height * 0.35,
  },
  transactionheader: {
    flexDirection: "row",
    margin: 15,
    justifyContent: "space-between",
    width: Width * 0.9,
  },
  transactiontext: {
    fontSize: 17,
    color: "white",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default Transaction;
