import React, { Component, version } from "react";
import { SafeAreaView, View } from "react-native";
import List from "../components/List";
import styles from "../styles/Styles";
import menu_config from "../data/menu.json";
import Disclaimer from "../components/Disclaimer";

/**
 * The landing page for the App. We render an expandable list that has individual
 * items that expand to list the subsytems. The client will then select the sub-
 * system that they want to run from the list of available subsystems for the given
 * system. Each time the app restarts, the client will need to accept a disclaimer
 * due to health care laws.
 */
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Grab the menu so that we can determine the available systems.
      menu: menu_config.menu,
    };
  }

  /**
   * Here we render the list of Systems to be shown on the main page.
   */
  renderList = () => {
    const systems = [];
    this.state.menu.map((system) =>
      systems.push(
        <List
          title={system.title}
          key={system.title}
          data={system.data}
          navigation={this.props.navigation}
        />
      )
    );
    return systems;
  };

  /**
   * Rendering the homescreen here as a list of Systems that each have their own list of
   * subsystems.
   */
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Disclaimer />{/* Shows the disclaimer popup each time the homescreen is launched. */}
        <View style={styles.mainContainer}>{this.renderList()}</View>
      </SafeAreaView>
    );
  }
}
