import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
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
import SendButton from "../components/SendButton";
import { Modal, Portal, Provider } from "react-native-paper";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const SendScreen = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

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
          <Text style={styles.balancetext}>550,27 TL </Text>
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

        <View>
          <InputBox title={"Açıklama"} />
          <InputBox title={"Tutar"} />
          <InputBox title={"Alıcı Kart Numarası"} />
        </View>

        <SendButton onPress={showModal} />

        <Provider>
          <Portal theme={{ colors: { backdrop: "#FFFFFF90",background:'red' }, }}>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={styles.modal}
            >
              <TouchableOpacity onPress={hideModal} style={styles.icon}>
                <MaterialIcons name="cancel" size={32} color="#c1c4c6" />
              </TouchableOpacity>
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 5,
                  paddingTop: 20,
                }}
              >
                <MaterialCommunityIcons
                  style={{ marginTop: 25 }}
                  name="checkbox-marked-circle-outline"
                  size={48}
                  color="#caea75"
                />
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Montserrat_700Bold",
                    padding: 10,
                  }}
                >
                  İşlem Başarılı
                </Text>
              </View>
              <View style={styles.buttoncontainer}>
                <TouchableOpacity onPress={hideModal} style={styles.button}>
                  <Text style={styles.buttontext}>Geri Dön</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </Portal>
        </Provider>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    height: 220,
    borderRadius: 20,
    backgroundColor: "#171f25",
    padding: 10,
    width: 270,
    margin: 73,
  },
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
  icon: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  buttoncontainer: {
    margin: 20,
    height: (Height * 0.2) / 3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#caea75",
  },
  buttontext: {
    textAlign: "center",
    fontSize: 18,
    color: "#2e361b",
    letterSpacing: 1,
    fontFamily: "Montserrat_700Bold",
  },
});

export default SendScreen;
