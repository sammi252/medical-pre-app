import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  Linking,
} from "react-native";
import CustomButton from "../components/Button.js";
import styles from "../styles/Styles.js"; // Our stylesheet.
import parse from "../data/parser";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../styles/Colors";

/**
 * Core system calculator. Takes the file location of a calculator
 * modeled with JSON to generate a decision based on the future.
 */
class System extends Component {
  selectOption(optNum) {
    let cur = this.subsystem[this.state.question_index];
    this.state.hist.push(this.state.question_index);
    this.setState({
      question_index: optNum,
      calc_opts: Array(
        cur.calculator ? cur.calculator.questions.length : 0
      ).fill(false),
      info: false,
    });
  }

  setCalcOption(idx, value) {
    let calc_opts = this.state.calc_opts;
    calc_opts[idx] = value;
    this.setState({
      calc_opts: calc_opts,
    });
  }

  /**
   * Shows additional info about the question when the information icon
   * is clicked.
   */
  showInfo() {
    this.setState({ info: !this.state.info });
  }

  /**
   * Pops the previous question of the stack and updates the view.
   */
  goBack() {
    if (this.state.hist.length == 0) {
      return;
    }


    let optNum = this.state.hist.pop();
    let cur = this.subsystem[this.state.question_index];
    this.setState({
      question_index: optNum,
      calc_opts: Array(
        cur.calculator ? cur.calculator.questions.length : 0
      ).fill(false),
      info: false,
    });
  }

  /**
   * Resets the algorithm to the first question in the assessment. All information
   * for the previous assessment is lost.
   */
  reset() {
    this.setState({ question_index: 0, hist: [], calc_opts: [], info: false });
  }

  constructor(props) {
    super(props);
    this.subsystem = parse(props.route.params.subsystem);
    this.state = { question_index: 0, hist: [], calc_opts: [], info: false };
  }

  render() {
    let cur = this.subsystem[this.state.question_index];
    return (
      <View style={styles.container}>
        {
          // Need a scrollview in case the question is larger than the screen
          // itself. Ideally, if that happens you should consider splitting up
          // the question into two parts.
        }
        <ScrollView style={styles.container} bounces={false}>
          {
            // This gets the title text of each question.
          }

          <View style={{ flexDirection: "column" }}>{
            <Text style={styles.questionTitleText}>When to Give Stress Dose Steroids:</Text>}
            {cur.extern_link && (
            <Text style={{ marginTop: 0, marginBottom: 20, fontSize: 16 }}>
              {cur.extern_link.description}
              <Text
                onPress={() => {
                  Linking.openURL(cur.extern_link.link);
                }}
                style={{
                  color: "#bb0000",
                  fontWeight: "bold",
                  borderColor: "#bb0000",
                  borderWidth: 2,
                }}
              >
                {cur.extern_link.name}
                <Icon name={"launch"} size={16} color={Colors.PRIMARY} />
              </Text>
              .
            </Text>
          )}
            {/*<Text style={styles.questionTitleText}>
              {cur.description}
              {cur.additional_info.length > 0 && (
                <TouchableOpacity
                  onPress={() => this.showInfo()}
                  style={{ paddingLeft: 8, marginBottom: -2 }}
                >
                  <Icon
                    name={"info-outline"}
                    size={18}
                    color={Colors.PRIMARY}
                  />
                </TouchableOpacity>
              )}
            </Text>*/}
          </View>

          {
            // Check to see if there is a calculator in our algorithm.
          }
          {cur.calculator && (
            <View
              style={{
                borderColor: "#bb0000",
                borderWidth: 2,
                borderRadius: 5,
              }}
            >
              <Text style={styles.calculatorTitleText}>
                {cur.calculator.name}
              </Text>

              {cur.calculator.questions.map((c, idx) => (
                <View
                  key={idx}
                  style={{
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  <View
                    style={{
                      padding: 2,
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ width: 275, height: 52 }}>{c.text}</Text>
                    <CheckBox
                      onPress={() => this.setCalcOption(idx, false)}
                      type={this.state.calc_opts[idx] ? "outline" : "filled"}
                      title={"No"}
                    />
                  </View>
                </View>
              ))}
              <Text style={styles.calculatorFooterText}>
                Score is:{" "}
                {
                  cur.calculator.scores[
                    this.state.calc_opts.filter((x) => x).length
                  ]
                }
              </Text>
            </View>
          )}

          {
            // Check to see if there is an external link in our calculator.
          }

          {
              cur.options.map((c, index) => (
              <View key={index} style={styles.seperator}>
              <CustomButton
                onPress={() => this.selectOption(c.id)}
                style={styles.button}
                title={c.text}
              />
            </View>
          ))}

          {cur.additional_info.length > 0 && this.state.info && (
            <View style={styles.explanationContainer}>
              <Text style={styles.infoTitle}>Explanation:</Text>
              <Text style={styles.info}>{cur.additional_info}</Text>
            </View>
          )}
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.footerButtonView}>
            <Button
              onPress={() => {
                this.goBack();
              }}
              disabled={this.state.hist.length == 0}
              title={"Back"}
              size={"Small"}
            />
          </View>
          <View style={styles.footerButtonView}>
            <Button
              onPress={() => {
                this.reset();
              }}
              title={"Restart"}
              type={"outline"}
              size={"small"}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default System;