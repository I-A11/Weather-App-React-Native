import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/city-background.jpg")}
      >
        <Text style={[styles.cityName, styles.cityText]}>Sydney</Text>
        <Text style={[styles.countryName, styles.cityText]}>Australia</Text>
        <View style={styles.populationWrapper}>
          <Feather name="user" size={50} color="red" />
          <Text style={styles.populationText}>8000</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name="sunrise" size={50} color="white" />
          <Text style={styles.riseSetText}>10:46:58am</Text>
          <Feather name="sunset" size={50} color="white" />
          <Text style={styles.riseSetText}>17:28:15pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default City;