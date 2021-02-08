import React from 'react';
// import { Text, Dimensions, TouchableOpacity, View } from "react-native";

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    // alignItems: 'right',
    // justifyContent: 'center',
  },
});

export default class Info extends React.Component {
  render() {
    return (
        
        
      <View style={styles.infoContainer}>
      <TouchableOpacity
        // style={styles.button}
        onPress={this.props.onPress}
        >
        <Image
         // onPress={this.props.onPress}
          style={{ 
            backgroundColor: '#000000',
            width: 22, 
            height: 22,
        }}
          // resizeMode="contain"
          source={require('../info.png')}
        />
        </TouchableOpacity>
      </View>
    );
  }
}