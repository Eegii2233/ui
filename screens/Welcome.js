import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import IconM from "react-native-vector-icons/FontAwesome";
import { Navigation } from "react-native-navigation";
import { TextInput } from "react-native-gesture-handler";

let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "ХАЙЛТ..." };
  }
  render() {
    return (
      <View style={styles.cont}>
        <View style={styles.header}>
          <View style={styles.input}>
            <IconM color="#888" name="search" size={scrX * 0.07} />
            <TextInput
              style={styles.inputmethod}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              clearTextOnFocus={true}
            ></TextInput>
          </View>
        </View>
        <View style={styles.user}>
          <Image
            style={styles.userImage}
            source={{ uri: "http://placeimg.com/640/480/any" }}
          />
          <View style={styles.info}>
            <Text style={styles.text}>UserName</Text>
            <View style={styles.button}>
              <Text style={{ fontSize: scrX * 0.03 }}>Гарах</Text>
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <View style={styles.list}>
            <Text style={styles.text}>Lorem IPSUM</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.text}>Lorem IPSUM</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.text}>Lorem IPSUM</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.text}>Lorem IPSUM</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "flex-start",
    width: scrX * 0.7
  },
  text: {
    color: "#fff"
  },
  header: {
    backgroundColor: "#fdbd26",
    width: "100%",
    height: scrY * 0.26,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "85%",
    height: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 5,
    flexDirection: "row"
  },
  inputmethod: {
    color: "#888",
    marginLeft: 5
  },
  user: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "8%",
    paddingRight: "30%"
  },
  userImage: {
    width: scrX * 0.15,
    height: scrX * 0.15,
    resizeMode: "cover",
    borderRadius: scrX * 0.075
  },
  info: {
    paddingTop: 5
  },
  button: {
    width: "100%",
    backgroundColor: "#fdbd26",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  menu: {
    marginTop: 20,
    backgroundColor: "#aaa",
    width: "100%"
  },
  list: {
    height: 30,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingLeft: 5
  }
});

export default Welcome;
