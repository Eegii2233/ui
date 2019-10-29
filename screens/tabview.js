import * as React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Home from "./home";
import Free from "./free";
import News from "./news";
import Mirror from "./mirror";
import IconM from "react-native-vector-icons/Foundation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navigation } from "react-native-navigation";

let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

const FirstRoute = () => <Home />;
const SecondRoute = () => <Free />;
const ThirdRoute = () => <News />;
const FourthRoute = () => <Mirror />;

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Нүүр" },
      { key: "second", title: "Үнэгүй" },
      { key: "third", title: "Мэдээ" },
      { key: "fourth", title: "Толь" }
    ]
  };

  Login() {
    Navigation.push(this.props.componentId, {
      component: {
        name: "Login",
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

  Welcome() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          enable: true,
          visible: true
        }
      }
    });
  }
  render() {
    return (
      <View style={{ height: scrY }}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image
              style={styles.imagelogo}
              source={require("../images/logo.png")}
            />
          </View>
          <View
            style={{
              width: scrX * 0.1
            }}
          >
            <TouchableOpacity
              onPress={this.Welcome.bind(this)}
              style={styles.list}
            >
              <IconM color="#fff" name="list" size={scrX * 0.07} />
            </TouchableOpacity>
          </View>
        </View>
        <TabView
          style={{ backgroundColor: "#fdbd26" }}
          swipeEnabled={false}
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
            fourth: FourthRoute
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: scrX }}
          renderTabBar={props => (
            <TabBar
              {...props}
              tabStyle={styles.tab}
              indicatorStyle={{ backgroundColor: "#fdbd26" }}
              labelStyle={styles.label}
              style={{
                height: scrY * 0.08,
                backgroundColor: "#fdbd26",
                marginLeft: scrX * 0.05,
                justifyContent: "center"
              }}
              titleStyle={styles.title}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  tab: {
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fdbd26",
    justifyContent: "center"
  },
  list: {
    width: scrX * 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdbd26",
    marginLeft: 5
  },
  label: {
    color: "#fff",
    fontSize: scrX * 0.03,
    textAlign: "center"
  },
  imagelogo: {
    width: scrX * 0.2,
    height: scrY * 0.1,
    marginTop: scrY * 0.17,
    resizeMode: "contain"
  },
  logo: {
    width: scrX,
    alignItems: "center"
  },
  header: {
    width: scrX,
    height: scrY * 0.18,
    backgroundColor: "#fdbd26",
    justifyContent: "center",
    zIndex: 1
  }
});
