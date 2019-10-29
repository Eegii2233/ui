import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Navigation } from "react-native-navigation";

let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

class Free extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessons: []
    };
  }
  componentDidMount() {
    fetch("http://nothink.mn/api/lessons")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          lessons: responseJson
        });
      });
  }
  Video(index) {
    const { lessons } = this.state;
    Navigation.push("TabView", {
      component: {
        name: "VideoPlayer",
        passProps: {
          data: lessons[index]
        },
        options: {
          topBar: {
            visible: true,
            background: {
              color: "#fdbd26"
            },
            title: {
              text: ""
            }
          }
        }
      }
    });
  }
  PDF(index) {
    const { lessons } = this.state;
    Navigation.push("TabView", {
      component: {
        name: "PDF",
        passProps: {
          data: lessons[index]
        },
        options: {
          topBar: {
            visible: true,
            background: {
              color: "#fdbd26"
            },
            title: {
              text: ""
            }
          }
        }
      }
    });
  }
  render() {
    const { lessons } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scroll}>
            {lessons.map((item, i) => (
              <View key={i} style={styles.lesson}>
                <View style={styles.lesson1}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: "http://nothink.mn/storage/" + item.image
                    }}
                  />
                  <View style={styles.title}>
                    <Text style={{ fontSize: scrX * 0.04 }}>{item.title}</Text>
                    <Text style={{ fontSize: scrX * 0.03, marginTop: 8 }}>
                      {item.updated_at}
                    </Text>
                  </View>
                </View>
                <View style={styles.buttons}>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={this.PDF.bind(this)}
                  >
                    <Text style={{ fontSize: scrX * 0.04, color: "#fff" }}>
                      Файл
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button2}
                    onPress={this.Video.bind(this)}
                  >
                    <Text style={{ fontSize: scrX * 0.04, color: "#fff" }}>
                      Үзэх
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: "#eee",
    width: scrX,
    height: scrY
  },
  scroll: {
    width: scrX,
    alignItems: "center",
    height: "100%"
  },
  lesson: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 7,
    backgroundColor: "#fff",
    width: scrX - 20,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 3, height: 3 },
    height: 95,
    paddingRight: 20,
    borderRadius: 3
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: "stretch",
    borderRadius: 32,
    marginLeft: 10
  },
  title: {
    marginLeft: 10
  },
  button1: {
    backgroundColor: "#555",
    width: scrX * 0.2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    height: scrX * 0.07
  },
  button2: {
    backgroundColor: "green",
    width: scrX * 0.2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    height: scrX * 0.07,
    marginTop: 10
  },
  lesson1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Free;
