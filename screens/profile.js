import React from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Navigation} from "react-native-navigation";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {uri: 'https://252radio.com/wp-content/uploads/2016/11/default-user-image-300x300.png'},
            name: 'Burkhan'
        };
    }

    _pickImage = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({photo: response});

            }
        });
    };
    handleReset = () => {

    };

    handleClick = (name, text) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: name,
                passProps: {
                    text: ""
                },
                options: {
                    topBar: {
                        drawBehind: "false",
                        visible: "true",
                        animate: "false",
                        title: {
                            text: text,
                            alignment: "left"
                        },
                        background: {
                            color: "white"
                        },
                        backButton: {
                            color: "#fdbd24",
                        },
                    }
                }
            }
        });
    };

    render() {
        let {photo, name} = this.state;
        return (
            <View style={styles.container}>
                <View style={{flex: 2, alignItems: 'center', marginTop: 50}}>
                    <TouchableOpacity onPress={this._pickImage}>
                        <Image source={{uri: photo.uri}} style={{width: 120, height: 120, borderRadius: 120 / 2}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20, color: '#ffffff'}}>{name.toUpperCase()}</Text>
                    <TouchableOpacity onPress={this.handleReset}>
                        <Text style={{color: '#ffffff'}}>НУУЦ ҮГ СОЛИХ</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 3}}>
                    <TouchableOpacity onPress={() => this.handleClick('ProfileEdit', 'Хэрэглэгчийн мэдээлэл')}>
                        <View style={styles.info}>
                            <MaterialCommunityIcons
                                style={styles.infoIcon}
                                name={'hexagon'}
                                size={18}
                            />
                            <Text style={styles.infoText}>Хэрэглэгчийн мэдээллэл</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleClick('ProfileEdit', 'Хичээлийн мэдээллэл')}>
                        <View style={styles.info}>
                            <MaterialCommunityIcons
                                style={styles.infoIcon}
                                name={'hexagon'}
                                size={18}
                            />
                            <Text style={styles.infoText}>Хичээлийн мэдээллэл</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fdbd24'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
    },
    infoText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ffffff'

    },
    infoIcon: {
        paddingRight: 5,
        color: '#ffffff'

    }
});