import React, { Component } from "react";
// import QRCode from 'react-native-qrcode-svg';
import { StyleSheet, View, Text, Image, AsyncStorage } from "react-native";
import {Navigation} from "react-native-navigation";

export default class Qpay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: null,
            deadline: null
        }
    }
    componentDidMount() {
        AsyncStorage.getItem("token").then(token => {
            console.log(token);
            fetch("http://nothink.mn/api/qpay", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "token": token
                })
            }).then((res) => res.json()).then(result => {
                this.setState({
                    ...result
                })
            })
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textRow}>
                    <Text style={styles.text} />
                    <View style={styles.imageColumn}>
                       <Image source={require("../images/qr.png")}/>
                        <Text style={styles.amount}>4,9000₮</Text>
                        <View style={styles.text3Stack}>
                            <Text style={styles.text3}>АНГИЛАЛЫН ХУГАЦАА : 2 сар}</Text>
                            <Text style={styles.text5}>
                                Та тухайн QRCODE -ийг уншуулан худалдан авах боломжтой. Эсвэл
                                доор байрлах банк дээр дарж худалдан авалт хийнэ үү.
                            </Text>
                        </View>
                        <View style={styles.image2Row}>
                            <Image
                                source={require("../images/khan_bank.png")}
                                resizeMode="contain"
                                style={styles.image2}
                            />
                            <Text style={styles.text6}>Хаан Банк</Text>
                            <Image
                                source={require("../images/tbd_bank.png")}
                                resizeMode="contain"
                                style={styles.image4}
                            />
                            <Text style={styles.text13}>Худалдаа Хөгжлийн Банк</Text>
                        </View>
                        <View style={styles.image3Row}>
                            <Image
                                source={require("../images/turiin_bank.png")}
                                resizeMode="contain"
                                style={styles.image3}
                            />
                            <Text style={styles.text11}>Төрийн Банк</Text>
                            <Image
                                source={require("../images/khas_bank.png")}
                                resizeMode="contain"
                                style={styles.image5}
                            />
                            <Text style={styles.text14}>Хас Банк</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        width: 250,
        height: 394,
        color: "#121212",
        marginTop: 14
    },
    text3: {

    },
    amount: {
        fontWeight: 'bold',
        color: '#fdbd24'
    },
    text5: {
        top: 43,
        left: 0,
        color: "#121212",
        position: "absolute",
    },
    text3Stack: {
        width: 361,
        height: 87,
        marginTop: 22
    },
    image2: {
        width: 30,
        height: 30
    },
    text6: {
        width: 98,
        height: 20,
        color: "#121212",
        marginLeft: 10,
        marginTop: 5
    },
    image4: {
        width: 30,
        height: 30,
        marginLeft: 9
    },
    text13: {
        width: 170,
        height: 20,
        color: "#121212",
        marginLeft: 8,
        marginTop: 5
    },
    image2Row: {
        height: 30,
        flexDirection: "row",
        marginTop: 37,
        marginRight: 6
    },
    image3: {
        width: 30,
        height: 30
    },
    text11: {
        width: 98,
        height: 20,
        color: "#121212",
        marginLeft: 10,
        marginTop: 10
    },
    image5: {
        width: 30,
        height: 30,
        marginLeft: 9,
        marginTop: 5
    },
    text14: {
        width: 98,
        height: 20,
        color: "#121212",
        marginLeft: 8,
        marginTop: 10
    },
    image3Row: {
        height: 35,
        flexDirection: "row",
        marginTop: 10,
        marginRight: 78
    },
    imageColumn: {
        alignItems: 'center',
        width: 361,
        marginLeft: 203,
        paddingBottom: 70
    },
    textRow: {
        height: 421,
        flexDirection: "row",
        marginTop: 140,
        marginLeft: -439
    },
    image6: {
        width: 30,
        height: 30
    },
    text12: {
        width: 98,
        height: 20,
        color: "#121212",
        marginLeft: 10,
        marginTop: 6
    },
    image6Row: {
        height: 30,
        flexDirection: "row",
        marginTop: 12,
        marginLeft: 14,
        marginRight: 223
    }
});




