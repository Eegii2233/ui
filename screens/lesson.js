import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Navigation } from "react-native-navigation";
let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

export default class Lesson extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  Video() {
    Navigation.push("TabView", {
      component: {
        name: "VideoPlayer",
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
  PDF() {
    Navigation.push("TabView", {
      component: {
        name: "PDF",
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
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scroll}>
            <View style={styles.head}>
              <View>
                <Image
                  style={styles.image}
                  source={{ uri: `http://nothink.mn/storage/${data.image}` }}
                />
              </View>
              <View style={styles.maintext}>
                <Text style={styles.bold}>{data.title}</Text>
                <Text>{data.description}</Text>
              </View>
            </View>
            {data.lesson.map((item, i) => (
              <View key={i} style={styles.lesson}>
                <View style={styles.lesson1}>
                  <Image
                    style={styles.image1}
                    source={{
                      uri: `http://nothink.mn/storage/${item.image}`
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
                    onPress={this.Video.bind(this)}
                    style={styles.button2}
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
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  container: {
    width: scrX,
    height: scrY,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  scroll: {
    alignItems: "center"
  },
  head: {
    width: scrX,
    height: scrX * 0.5,
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: 15,
    paddingLeft: 10
  },
  image: {
    width: scrX * 0.35,
    height: scrX * 0.4,
    resizeMode: "stretch",
    borderRadius: 5
  },
  maintext: {
    width: scrX / 2,
    marginLeft: 20
  },
  bold: {
    fontWeight: "bold"
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
    shadowOffset: { width: 1, height: 1 },
    height: 95,
    paddingRight: 20,
    borderRadius: 3
  },
  image1: {
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
