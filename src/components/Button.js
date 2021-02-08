import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Styles"; // Our stylesheet.
import { Text, TouchableOpacity, View } from "react-native";

/**
 * Button class that aids in creating new buttons. Their is support for large/small
 * buttons and filled or outline buttons. Overtime, their will could be support for
 * a more comprehensive solution.
 *
 * @param {@code type} can take a value of 'filled' or 'outline'. For 'filled', there
 * is a background color but no border. For 'outline', the button has a border and the
 * background color is transparent.
 * @param {@code title} - the text that gets shown to the user.
 * @param {@code onPress} - the action that is taken when the button is pressed.
 *
 * @requires {@code title} and {@code onPress}.
 */
class Button extends Component {
  render() {
    const { title, onPress, type = "filled", size = "large" } = this.props;
    const buttonStyle =
      type === "filled" ? styles.buttonFilled : styles.buttonOutline;
    const buttonText =
      type === "filled" ? styles.buttonTextFilled : styles.buttonTextOutline;

    return (
      <TouchableOpacity
        style={styles.touchableActive}
        onPress={() => onPress()}
      >
        <View style={[styles.buttonContainer, buttonStyle]}>
          <Text style={[styles.buttonText, buttonText]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

// Set some requirements that must be specified each time the button is used.
Button.propTypes = {
  title: PropTypes.string.isRequired, // The title for the button is required.
  onPress: PropTypes.func.isRequired, // The action for the button is required.
};

export default Button;
