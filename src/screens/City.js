import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  // StatusBar,
  View,
} from "react-native";
import PropTypes from "prop-types";
import moment from "moment";
import IconText from "../components/IconText";

const City = ({ weatherData }) => {
  const {
    container,
    image,
    cityName,
    cityText,
    countryName,
    populationText,
    populationWrapper,
    riseSetText,
    riseSetWrapper,
    rowLayout,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground style={image} source={require("../../assets/city.jpg")}>
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
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
    justifyContent: "center",
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
});

export default City;

City.propTypes = {
  weatherData: PropTypes.object,
};
