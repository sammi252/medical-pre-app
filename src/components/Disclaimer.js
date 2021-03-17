import React, { useState } from "react";
import { Modal, ScrollView, Text, View } from "react-native";
import styles from "../styles/Styles";
import Button from "../components/Button";
import disclaimer from "../data/disclaimer.json";

/**
 * Adds a disclaimer popup to the page where it is called from. You can update the
 * disclaimer.json to make updates to the popup.
 */
const Disclaimer = () => {
  const [modalVisible = true, setModalVisible] = useState(true);
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>{disclaimer.title}</Text>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.modalText}>{disclaimer.header[0]}</Text>
            <Text style={styles.modalText}>{disclaimer.header[1]}</Text>

            <Text style={styles.modalText}>{disclaimer.body[0]}</Text>
            <Text style={styles.modalText}>{disclaimer.body[1]}</Text>
            <Text style={styles.modalText}>{disclaimer.body[2]}</Text>
            <Text style={styles.modalText}>{disclaimer.body[3]}</Text>
            <Text style={styles.modalText}>{disclaimer.body[4]}</Text>
            <Text style={styles.modalText}>{disclaimer.body[5]}</Text>
            <Text style={styles.modalText}>{disclaimer.body[6]}</Text>
          </ScrollView>
          <Button
            size="large"
            type="filled"
            title="I AGREE TO THE TERMS OF USE"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Disclaimer;
