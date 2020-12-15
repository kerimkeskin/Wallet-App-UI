import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";
import StatusCard from "../components/StatusCard";
import Transaction from "../components/Transaction";


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"CÜZDANIM"} />
      <BalanceCard />
      <StatusCard />
      <Transaction/>
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
