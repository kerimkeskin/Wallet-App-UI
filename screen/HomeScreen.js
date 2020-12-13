import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"CÜZDANIM"} />
      <BalanceCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171f25",
  },
});

export default HomeScreen;
