import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

const RowText = (props) => {
  const {
    messageOne,
    messageTwo,
    containerStyles,
    messageOneStyle,
    messageTwoStyle,
  } = props;
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}> {messageTwo}</Text>
    </View>
  );
};

export default RowText;

RowText.propTypes = {
  messageOne: PropTypes.string,
  messageTwo: PropTypes.string,
  containerStyles: PropTypes.object,
  messageOneStyle: PropTypes.object,
  messageTwoStyle: PropTypes.object,
};
