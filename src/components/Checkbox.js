import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Styles"; // Our stylesheet.
import CheckBox from "react-native-community";
import { Text, TouchableOpacity, View } from "react-native";
import { render } from "react-dom";

const Checkbox = props => (
    <input type="checkbox" {...props}/>
)

class Checkbox extends Component {
    state = { checked: false }

handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

    render() {
        return (
            <div>
                <label>
                    <CheckBox
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />
                    <span>Label Text</span>
                </label>
            </div>
        )
    }
}