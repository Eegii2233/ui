import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  WebView
} from "react-native";
import HTMLView from 'react-native-htmlview';
import { Navigation } from "react-native-navigation";
let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

export default class New extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { move } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scroll}>
            <Image
              style={styles.image}
              source={{ uri: `http://nothink.mn/storage/${move.image}` }}
            />
            <View style={styles.title}>
              <Text>{move.title}</Text>
            </View>
            <View style={styles.short}>
              <HTMLView
                  // originWhitelist={['*']}
                  value={move.short_desc}
              />
              {/*<Text>{move.short_desc}</Text>*/}
            </View>
            <View style={styles.short}>
              <HTMLView
                  // originWhitelist={['*']}
                  value={move.full_desc}
              />
              {/*<Text>{move.full_desc}</Text>*/}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: scrX,
    height: scrY,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 20
  },
  scroll: {
    alignItems: "center"
  },
  title: {
    width: scrX - 20,
    marginTop: 10
  },
  short: {
    width: scrX - 20,
    marginTop: 10
  },
  image: {
    width: scrX,
    height: 200,
    resizeMode: "cover"
  }
});
