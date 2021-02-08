import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  LayoutAnimation,
  Modal,
} from "react-native";
import { Colors } from "../styles/Colors";
import styles from "../styles/Styles";
import Icon from "react-native-vector-icons/MaterialIcons";

/**
 * Single collapsible list.
 */
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };
  }

  /**
   * Expands the subsytem list item that was clicked.
   * @param {*} index - the list item that was clicked on.
   */
  onClick = (index) => {
    const temp = this.state.data.slice();
    temp[index].value = !temp[index].value;
    this.setState({ data: temp });
  };

  // We collapse the list if it is already expanded and expand it if
  // it is collapsed. This requires the use of a state variable, as
  // of 11/11/2020, that gets created during the iniitialization phase.
  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <View>
        <View
          style={this.state.expanded ? styles.listRowExpanded : styles.listRow}
        >
          <Text style={[styles.listTitle]}>{this.props.title}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon
              name={"star-border"}
              size={30}
              color={Colors.PRIMARY}
              style={styles.iconStyle}
            />
            <TouchableOpacity onPress={() => <Modal></Modal>}>
              <Icon
                name={"info-outline"}
                size={30}
                color={Colors.BLUE}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.toggleExpand()}>
              <Icon
                name={this.state.expanded ? "clear" : "keyboard-arrow-up"}
                size={30}
                color={this.state.expanded ? Colors.PRIMARY : Colors.DARKGRAY}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        {this.state.expanded && (
          <View style={styles.nestedListContainer}>
            <FlatList
              data={this.state.data}
              numColumns={1}
              scrollEnabled={false}
              renderItem={({ item, index }) => (
                <View>
                  {index > 0 ? (
                    <View style={styles.childHorizontalRule} />
                  ) : (
                    <View />
                  )}
                  <TouchableOpacity
                    key={item.proc_name}
                    style={[styles.nestedListRow]}
                    onPress={() =>
                      this.props.navigation.navigate("Systems", {
                        subsystem: item.proc_name,
                      })
                    }
                  >
                    <Text style={[styles.nestedListTitle]}>{item.key}</Text>
                    <Icon name={"launch"} size={24} color={Colors.PRIMARY} />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
      </View>
    );
  }
}
