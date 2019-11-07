import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import {Navigation} from "react-native-navigation";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
            token: props.token
        };
    }

    componentDidMount() {
        // AsyncStorage.getItem("token").then(token => {
            // this.setState({firstname: token});
            fetch("http://nothink.mn/api/me", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "token": this.props.token
                })
            }).then(res => res.json()).then(jsonRes => {
                this.setState({firstname: jsonRes.firstname, lastname: jsonRes.lastname, phone: jsonRes.phone, token: this.state.token})
            })
        // })
    }

    handleChange = (value, name) => {
        this.setState({
            [name]: value
        })
    };

    handleSubmit = () => {
        fetch("http://nothink.mn/api/update", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "token": this.state.token,
                "firstname": this.state.firstname,
                "lastname": this.state.lastname,
                "name": this.state.firstname,
                "phone": this.state.phone
            })
        }).then(() => {
            alert("Амжилттай бүртгэгдлээ");
            Navigation.pop(this);
        })
    };

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View>
                    <Text style={{fontSize: 18}}>Овог</Text>
                    <TextInput value={this.state.firstname} onChangeText={firstname => this.setState({ firstname })}  style={styles.textInput}></TextInput>
                    <Text style={{fontSize: 18}}>Нэр {this.state.lastname}</Text>
                    <TextInput value={this.state.lastname} onChangeText={(lastname) => this.setState({ lastname })} style={styles.textInput}></TextInput>
                    <Text style={{fontSize: 18}}>Утасны дугаар</Text>
                    <TextInput value={this.state.phone} onChangeText={(phone) => this.setState({phone})} style={styles.textInput}></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={()=>this.handleSubmit()}><Text style={{color: 'white',fontSize: 23}}>Хадгалах</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'white',
        marginBottom: 30
    },

    textInput: {
        alignSelf: 'stretch',
        padding: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 15
    },
    btn:{
        alignSelf: 'stretch',
        backgroundColor: '#fdbd24',
        padding: 15,
        alignItems: 'center'
    }
});