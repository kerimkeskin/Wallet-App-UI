import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { Entypo } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const StatusCard = () => {
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
          <View
            style={{
              padding: 30,
              height: 90,
              justifyContent: "center",
            }}
          >
            <Text style={styles.statustext}>Durum</Text>
            <Text style={styles.datetext}>Bu hafta, 10-17 Aralık </Text>
            <View style={styles.timezonecontainer}>
              <Text
                style={{
                  fontFamily: "Montserrat_600SemiBold",
                  letterSpacing: 1,
                  color: "#caea75",
                }}
              >
                Haftalık
              </Text>
              <TouchableOpacity>
                <Entypo name="chevron-down" size={24} color="#caea75" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.percentagebarcontainer}>
            <AnimatedCircularProgress
              style={styles.percentagebar}
              size={150}
              width={15}
              fill={60}
              backgroundWidth={10}
              rotation={0 - 10}
              tintColor="#caea75"
              backgroundColor="#636b6f"
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
    height: Height * 0.35,
    backgroundColor: "#212b31",
    borderRadius: 20,
    flexDirection: "column",
  },
  timezonecontainer: {
    flex: 1,
    width: 110,
    height: 40,
    backgroundColor: "#212b31",
    borderWidth: 3,
    borderColor: "#caea75",
    borderRadius: 10,
    position: "absolute",
    right: 0,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  statustext: {
    fontSize: 15,
    color: "white",
    marginVertical: 7,
    fontFamily: "Montserrat_700Bold",
  },
  datetext: {
    fontSize: 12,
    color: "#636b6f",
    letterSpacing: 1,
    fontFamily: "Montserrat_800ExtraBold",
  },
  percentagebarcontainer: {
    width: "100%",
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  percentagebar: {
    borderRadius: 50,
  },
});

export default StatusCard;
