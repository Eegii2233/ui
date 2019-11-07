import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  Dimensions,
  StatusBar,
  ActivityIndicator, AsyncStorage
} from "react-native";
import { Navigation } from "react-native-navigation";



let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.2,
      data: [],
      loading: false
    };
  }
  componentDidMount() {

    this.setState({
      loading: true
    });

    fetch("http://nothink.mn/api/lessons")
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            loading: false
          });
          Navigation.setStackRoot(this.props.componentId, {
            component: {
              id: "TabView",
              name: "TabView",
              passProps: {
                data: responseJson
              },
              options: {
                animations: {
                  setStackRoot: {
                    enable: true
                  }
                },
                topBar: {
                  visible: false,
                  drawBehind: false,
                  title: {
                    text: "",
                    color: "#fff"
                  }
                }
              },
              statusBar: {
                visible: true,
                style: "#fdbd24"
              }
            }
          });
        });
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fdbd24",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <StatusBar backgroundColor="#fdb424" barStyle="light-content" />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: scrX * 0.2,
              height: scrY * 0.1,
              marginTop: scrY * 0.05,
              resizeMode: "contain"
            }}
            source={require("./images/logo.png")}
          />
          {this.state.loading ? (
            <ActivityIndicator style={{ marginTop: 10 }} />
          ) : null}
        </View>
      </View>
    );
  }
}
