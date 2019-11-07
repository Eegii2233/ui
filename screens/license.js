import * as React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
import Pdf from "react-native-pdf";
import {Navigation} from "react-native-navigation";

let scrX = Dimensions.get("window").width;
let scrY = Dimensions.get("window").height;

export default class License extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {

        return (
            <View style={styles.container}>
                <Pdf
                    source={require("../images/license.pdf")}
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
        backgroundColor: "#fff",

    },
    pdf: {
        flex: 1,
        width: Dimensions.get("window").width
    },

});
