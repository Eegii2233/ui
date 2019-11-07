import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import IconM from "react-native-vector-icons/FontAwesome";
import { Navigation } from "react-native-navigation";
import { TextInput } from "react-native-gesture-handler";

let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "ХАЙЛТ...", name: null, token: null };
  }
  componentDidMount() {
    if(this.state.name === null) {
      AsyncStorage.getItem("name").then((name) => {
        AsyncStorage.getItem("token").then((token) => {
          this.setState({name, token})
        })
        // if(token !== '') {
        //   fetch("http://nothink.mn/api/me", {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       "token": token
        //     })
        //   }).then(response => response.json()).then(jsonResponse => {
        //     this.setState({name: jsonResponse.name});
        //     console.log("State changed")
        //   })
        // }
      });
    }
  }

  handleSetState = (state) => {
    this.setState({...state});
  };
  handleClick = (view, background) => {
    Navigation.push(`TabView`, {
      component: {
        passProps: {
          name: this.state.name,
          token: this.state.token,
          handleSetState: this.handleSetState
        },
        name: view,
        options: {
          topBar: {
            drawBehind: "false",
            visible: "true",
            animate: "false",
            background: {
              color: background
            },
            backButton: {
              color: 'black'
            }

          }
        }
      }
    });
  };

  handleLogout = () => {
    AsyncStorage.removeItem("token").then(() => {
      AsyncStorage.removeItem("name").then(() => {
        this.setState({
          name: null,
          token: null
        })
      })
    })
  };

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
                  source={{ uri: "https://252radio.com/wp-content/uploads/2016/11/default-user-image-300x300.png" }}
              />
              {this.state.name !== null
                  ? <View style={styles.info}>
                    <Text style={styles.text}>{this.state.name}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleLogout()}>
                      <Text style={{ fontSize: 10 }}>Гарах</Text>
                    </TouchableOpacity>
                  </View>
                  : <View style={styles.info}>
                      <Text style={styles.text}></Text>
                      <TouchableOpacity style={styles.button} onPress={() => this.handleClick("Login", "#fdbd24")}>
                        <Text style={{ fontSize: 16 }}>НЭВТРЭХ</Text>
                      </TouchableOpacity>
                  </View>}


            </View>
            <View style={styles.menu}>
              {this.state.name !== null &&
              <View >
                {/*<TouchableOpacity style={styles.list}>*/}
                {/*  <Text style={styles.text}>ЭХЛЭЛ</Text>*/}
                {/*/!*</TouchableOpacity>*!/*/}
                {/*<TouchableOpacity style={styles.list} onPress={()=>this.handleClick('NewWords', '#fdbd24')}>*/}
                {/*  <Text style={styles.text}>ЗУУН ШИНЭ ҮГ</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity style={styles.list}>*/}
                {/*  <Text style={styles.text}>ТОЛЬ</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity style={styles.list} onPress={()=>this.handleClick('Profile', '#fdbd24')}>
                  <Text style={styles.text}>ПРОФАЙЛ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.list} onPress={()=>this.handleClick('Qpay', '#ffffff')}>
                  <Text style={styles.text}>ТӨЛБӨРИЙН МЭДЭЭЛЭЛ</Text>
                </TouchableOpacity>
              </View>
              }

            </View>
          </View>
      )

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
    borderRadius: scrX * 0.075,
    marginRight: 5
  },
  info: {
    paddingTop: 5
  },
  button: {
    // width: "100%",
    backgroundColor: "#fdbd26",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
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
