import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconColor, iconName, bodyText, bodyTextStyles } = props;
  const { container, textTheme } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textTheme: {
    fontWeight: "bold",
  },
});

export default IconText;

IconText.propTypes = {
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  bodyText: PropTypes.string,
  bodyTextStyles: PropTypes.object,
};
