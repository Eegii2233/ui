import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { Navigation } from "react-native-navigation";

let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: props.name, password: "" };
  }

  toRegister() {
    Navigation.push(this.props.componentId, {
      component: {
        name: "Register",
        passProps: {
          text: ""
        },
        options: {
          topBar: {
            background: {
              color: "#fdbd24"
            },
            drawBehind: "false",
            visible: "true",
            animate: "false",
            title: {
              text: ""
            }
          }
        }
      }
    });
  }
  // goBack() {
  //   Navigation.push(this.props.componentId, {
  //     component: {
  //       name: "Welcome",
  //       passProps: {
  //         text: ""
  //       },
  //       options: {
  //         topBar: {
  //           background: {
  //             color: "#fdbd24"
  //           },
  //           drawBehind: "false",
  //           visible: "true",
  //           animate: "false",
  //           title: {
  //             text: ""
  //           }
  //         }
  //       }
  //     }
  //   });
  // }
  handleSubmit = () => {
    console.log("Submit clicked");
    fetch("http://nothink.mn/api/login", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then(loginRes => loginRes.json()).then((result) => {
      if(result.error === undefined) {
        AsyncStorage.setItem("token", result.access_token).then(() =>
            fetch("http://nothink.mn/api/me", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "token": result.access_token
              })
            }).then(response => response.json()).then(jsonResponse => {
              AsyncStorage.setItem("name", jsonResponse.name).then(() => {
                this.props.handleSetState({
                  name: jsonResponse.name,
                  token: result.access_token
                });
                Navigation.pop(this.props.componentId);
              })
            })
        );
      }

      // try {
      //   await AsyncStorage.setItem('token', result.access_token);
      // } catch (error) {
        // Error saving data
      // }

    });

  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagelogo}
          source={{ uri: "https://logo.clearbit.com/cinemaqualidade.to" }}
        />
        <View style={styles.input}>
          <Text style={styles.text}>Мэйл хаяг</Text>
          <TextInput
            style={styles.mailInput}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <Text style={styles.text}>Нууц үг</Text>
          <TextInput
            style={styles.mailInput}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={this.handleSubmit.bind(this)}
              style={styles.button1}
            >
              <Text style={styles.text}>Нэвтрэх</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.toRegister.bind(this)}
              style={styles.button2}
            >
              <Text style={styles.text}>Бүртгүүлэх</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forgot}>
            <Text style={styles.text}>Нууц үгээ мартсан уу?</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: scrX,
    height: scrY,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdbd26"
  },
  forgot: {
    width: "100%",
    alignItems: "center",
    marginTop: 20
  },
  imagelogo: {
    width: scrX * 0.2,
    height: scrY * 0.1,
    marginBottom: 10,
    resizeMode: "contain"
  },
  text: {
    color: "#fff",
    fontSize: scrX * 0.043
  },
  input: {
    width: scrX * 0.8
  },
  mailInput: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 3,
    height: 30,
    paddingLeft: 5,
    marginVertical: 10
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  button1: {
    backgroundColor: "#555",
    width: "38%",
    alignItems: "center",
    borderRadius: 3,
    height: 30,
    justifyContent: "center"
  },
  button2: {
    backgroundColor: "green",
    width: "58%",
    alignItems: "center",
    borderRadius: 3,
    height: 30,
    justifyContent: "center"
  }
});
