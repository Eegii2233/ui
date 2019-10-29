import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Video from "react-native-video";
let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { data } = this.props;
    const url = "https://your-url.com/video.mp4";

    return (
      <View style={styles.container}>
        <Video
          source={{
            uri:
              "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4?fbclid=IwAR0wurN5PUmKe_iK7xGkTlp73beFyC6Y3WkCio-r8VXD911MU9ErJS348WY"
          }} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError}
          volume={1.0}
          repeat={false}
          controls={true}
          style={styles.backgroundVideo}
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
  backgroundVideo: {
    width: scrX,
    height: scrY * 0.9,
    zIndex: 2
  }
});
