import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Slideshow from "react-native-image-slider-show";
import { Navigation } from "react-native-navigation";

let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifs: [],
      position: 1,
      interval: null,
      dataSource: [],
      loading: false,
      lessons: []
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1
        });
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    let array = [];
    fetch("http://nothink.mn/api/category1")
      .then(response => response.json())
      .then(responseJson => {
        fetch("http://nothink.mn/api/banner")
          .then(response => response.json())
          .then(responseJson2 => {
            console.log(responseJson2[0].image.replace("\\", "/"));
            responseJson2.map((item, i) => {
              let obj = {
                url: `http://nothink.mn/storage/${item.image}`
              };
              array.push(obj);
            });
            this.setState({
              notifs: responseJson,
              dataSource: array,
              loading: false
            });
          });
      });

    fetch("http://nothink.mn/api/category2")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          lessons: responseJson
        });
      });
  }
  Lesson(index) {
    const { notifs } = this.state;
    Navigation.push("TabView", {
      component: {
        name: "Lesson",
        passProps: {
          data: notifs[index]
        },
        options: {
          topBar: {
            visible: true,
            background: {
              color: "#fdbd26"
            },
            title: {
              text: "Англи хэлний хичээл"
            }
          }
        }
      }
    });
  }
  LessonEng(index) {
    const { lessons } = this.state;
    Navigation.push("TabView", {
      component: {
        name: "Lesson",
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
              text: "Англи хэлний хичээл"
            }
          }
        }
      }
    });
  }
  state = {};

  render() {
    const { notifs, loading, lessons } = this.state;
    console.log(notifs);
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <ScrollView>
            <View style={styles.scroll}>
              {!loading ? (
                <Slideshow
                  height={scrY * 0.2}
                  titleStyle={styles.color}
                  dataSource={this.state.dataSource}
                  arrowSize={0}
                  onPositionChanged={position => this.setState({ position })}
                />
              ) : null}
              <View style={styles.title}>
                <Text
                  style={{
                    fontSize: scrX * 0.03,
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                >
                  ЕРӨНХИЙ БОЛОВСРОЛ
                </Text>
                <Text
                  style={{
                    fontSize: scrX * 0.03,
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                >
                  АНГЛИ ХЭЛНИЙ ХИЧЭЭЛ
                </Text>
              </View>
              <View style={styles.lesson}>
                <View style={styles.ebs}>
                  {notifs.map((item, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={this.Lesson.bind(this, i)}
                    >
                      <View style={styles.category}>
                        <Image
                          style={styles.image}
                          source={{
                            uri: `http://nothink.mn/storage/${item.image}`
                          }}
                        />
                        <View style={styles.angilal}>
                          <Text style={{ fontWeight: "bold", fontSize: 10 }}>
                            {item.title}
                          </Text>
                          <Text
                            style={{
                              color: "#fdbd26",
                              fontSize: 10,
                              marginVertical: 5
                            }}
                          >
                            {item.price}₮
                          </Text>
                          <Text
                            style={{
                              fontSize: scrX * 0.03,
                              width: scrX * 0.18,
                              height: scrY * 0.03
                            }}
                          >
                            {item.updated_at}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.english}>
                  {lessons.map((item, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={this.LessonEng.bind(this, i)}
                    >
                      <View style={styles.category}>
                        <Image
                          style={styles.image}
                          source={{
                            uri: `http://nothink.mn/storage/${item.image}`
                          }}
                        />
                        <View style={styles.angilal}>
                          <Text
                            style={{
                              fontWeight: "bold",
                              fontSize: 10,
                              height: 25,
                              width: scrX * 0.25
                            }}
                          >
                            {item.title}
                          </Text>
                          <Text
                            style={{
                              color: "#fdbd26",
                              fontSize: 10,
                              marginVertical: 5
                            }}
                          >
                            {item.price}₮
                          </Text>
                          <Text
                            style={{
                              fontSize: scrX * 0.03,
                              width: scrX * 0.18,
                              height: scrY * 0.03
                            }}
                          >
                            {item.updated_at}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View></View>
              <View style={styles.footer}>
                <Text>example@example.com</Text>
                <Text>7777-7777</Text>
              </View>
            </View>
          </ScrollView>
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
    backgroundColor: "#eee"
  },
  imagelogo: {
    width: scrX * 0.2,
    height: scrY * 0.1,
    marginBottom: 10,
    resizeMode: "contain"
  },
  scroll: {
    backgroundColor: "#eee",
    height: "100%"
  },
  menu: {
    flexDirection: "row",
    width: scrX,
    paddingHorizontal: scrX / 12,
    justifyContent: "space-between"
  },
  main: {
    height: scrY * 0.74,
    width: scrX,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  lesson: {
    flexDirection: "row",
    paddingTop: 10
  },
  ebs: {
    width: scrX / 2,
    alignItems: "center"
  },
  english: {
    width: scrX / 2,
    alignItems: "center"
  },
  title: {
    marginTop: 5,
    backgroundColor: "#fdbd26",
    width: scrX,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 15
  },
  category: {
    paddingLeft: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#fff",
    width: scrX * 0.465,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 3, height: 3 },
    height: 70
  },
  angilal: {
    width: scrX * 0.28,
    marginLeft: 5
  },
  image: {
    width: scrX * 0.15,
    height: scrX * 0.15,
    resizeMode: "cover",
    borderRadius: scrX * 0.075
  },
  color: {
    color: "white"
  },
  footer: {
    width: scrX,
    height: scrX * 0.15,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  }
});
