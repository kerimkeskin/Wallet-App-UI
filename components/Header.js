import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View style={styles.headerleft}>
          <TouchableOpacity>
            <Ionicons
              style={{ marginHorizontal: 10 }}
              name="chevron-back-outline"
              size={34}
              color="white"
            />
          </TouchableOpacity>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.headerright}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              style={{ marginHorizontal: 10 }}
              name="bell-alert"
              size={29}
              color="#caea75"
            />
          </TouchableOpacity>
          <View style={styles.pp}></View>
          <TouchableOpacity>
            <FontAwesome5
              style={{ marginHorizontal: 10 }}
              name="caret-down"
              size={16}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  headercontainer: {
    width: Width,
    height: Height * 0.08,
    flexDirection: "row",
    alignItems: "center",
  },
  headerleft: {
    width: Width * 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerright: {
    width: Width * 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  pp: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderRadius: 99,
  },
});
