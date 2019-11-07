import React from 'react';
import { StyleSheet, View, Text, Image, AsyncStorage } from "react-native";

export default class LectureInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lectures: []
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.item_name}>1-р ангийн хичээл</Text>
                    <View style={styles.item_info}>
                        <Text style={styles.item_state}>ТӨЛӨГДСӨН</Text>
                        <Text style={styles.item_date}>2019-09-21</Text>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginHorizontal: 20
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 8,
        alignItems: 'center'
    },
    item_name: {
        fontSize: 16,
        alignSelf: 'center'
    },
    item_info: {
        textAlign: 'center',
        flexDirection: 'column',
    },
    item_state: {
        textAlign: 'center',
        backgroundColor: '#fdbd24',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
        color: '#ffffff',
        fontSize: 12,
        overflow: "hidden"
    },
    item_date: {
        textAlign: 'center',
        marginTop: 4,
        fontSize: 12
    }
});