import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Pdf from "react-native-pdf";

let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

export default class Pdfview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const source = {
      uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
      cache: true
    };
    return (
      <View style={styles.container}>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          style={styles.pdf}
        />
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
    backgroundColor: "#fff"
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width
  }
});
