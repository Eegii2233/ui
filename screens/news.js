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

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifs: []
    };
  }
  componentDidMount() {
    fetch("http://nothink.mn/api/news")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          notifs: responseJson
        });
      });
  }

  New(index) {
    const { notifs } = this.state;
    Navigation.push("TabView", {
      component: {
        name: "New",
        passProps: {
          move: notifs[index]
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
    const { notifs } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scroll}>
            {notifs.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={styles.news}
                onPress={this.New.bind(this, i)}
              >
                <Image
                  style={styles.image}
                  source={{ uri: `http://nothink.mn/storage/${item.image}` }}
                />
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.date}>{item.updated_at}</Text>
              </TouchableOpacity>
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
    alignItems: "center",
    paddingBottom: 20,
    backgroundColor: "#eee",
    width: scrX,
    height: scrY
  },
  scroll: {
    width: scrX,
    alignItems: "center"
  },
  news: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 8,
    backgroundColor: "#fff",
    width: scrX - 20,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 3, height: 3 },
    height: 260,
    borderRadius: 3,
    marginBottom: 10
  },
  image: {
    width: scrX - 20,
    height: 200,
    resizeMode: "cover",
    borderRadius: 3
  },
  text: {
    marginTop: 5,
    height: 40,
    width: scrX * 0.85
  },
  date: {
    position: "absolute",
    right: 10,
    bottom: 6,
    fontSize: scrX * 0.025
  }
});
export default News;
