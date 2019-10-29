import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";

let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

class Mirror extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "ҮГ ХАЙХ..." };
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            clearTextOnFocus={true}
          ></TextInput>
        </View>
        <ScrollView style={styles.words}>
          <View style={styles.word}>
            <Text>LOREM IPSUM</Text>
          </View>
          <View style={styles.word}>
            <Text>LOREM IPSUM</Text>
          </View>
          <View style={styles.word}>
            <Text>LOREM IPSUM</Text>
          </View>
          <View style={styles.word}>
            <Text>LOREM IPSUM</Text>
          </View>
          <View style={styles.word}>
            <Text>LOREM IPSUM</Text>
          </View>
          <View style={styles.word}>
            <Text>LOREM IPSUM</Text>
          </View>
          <View style={styles.word}>
            <Text>LOREM IPSUM</Text>
          </View>
          <View style={styles.word}>
            <Text>LOREM IPSUM</Text>
          </View>
          <View style={styles.word}>
            <Text>LOREM IPSUM</Text>
          </View>
          <View style={styles.word}>
            <Text>LOREM IPSUM</Text>
          </View>
          <View style={styles.word}>
            <Text>LOREM IPSUM</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa"
  },
  input: {
    textAlign: "center",
    justifyContent: "center",
    width: scrX,
    height: 40,
    backgroundColor: "#fff",
    marginBottom: 3
  },
  word: {
    width: scrX,
    justifyContent: "center",
    height: 40,
    backgroundColor: "#fff",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingLeft: 5
  }
});
export default Mirror;
