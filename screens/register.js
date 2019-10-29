import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TextInput
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navigation } from "react-native-navigation";

let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", password: "", passwordAgain: "", phone: "" };
  }
  Registered() {
    alert("Амжилттай бүртгэгдлээ");
  }
  back() {
    Navigation.pop(this.props.componentId);
  }

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
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Text style={styles.text}>Нууц үг</Text>
          <TextInput
            style={styles.mailInput}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Text style={styles.text}>Нууц үгээ давтах</Text>
          <TextInput
            style={styles.mailInput}
            onChangeText={passwordAgain => this.setState({ passwordAgain })}
            secureTextEntry={true}
            value={this.state.passwordAgain}
          />
          <Text style={styles.text}>Утасны дугаар</Text>
          <TextInput
            style={styles.mailInput}
            keyboardType={"numeric"}
            onChangeText={phone => this.setState({ phone })}
            value={this.state.phone}
          />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={this.back.bind(this)}>
              <View style={styles.button1}>
                <Text style={styles.text}>Буцах</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={this.Registered.bind(this)}
            >
              <Text style={styles.text}>Бүртгүүлэх</Text>
            </TouchableOpacity>
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
    width: scrX * 0.3,
    alignItems: "center",
    borderRadius: 3,
    height: 30,
    justifyContent: "center"
  },
  button2: {
    backgroundColor: "green",
    width: scrX * 0.45,
    alignItems: "center",
    borderRadius: 3,
    height: 30,
    justifyContent: "center"
  }
});
