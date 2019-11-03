import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: ''
        };
    }

    handleChange = (value, name) => {
        this.setState({
            [name]: value
        })
    };

    handleSubmit = () => {
        this.setState({
            firstName: '',
            lastName: '',
            phoneNumber: ''
        })
    };

    render() {
        const {firstName, lastName, phoneNumber} = this.state;
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View>
                    <Text style={{fontSize: 18}}>Овог</Text>
                    <TextInput value={firstName} onChange={(value) => this.handleChange(value, 'firstName')}  style={styles.textInput}></TextInput>
                    <Text style={{fontSize: 18}}>Нэр</Text>
                    <TextInput value={lastName} onChange={(value) => this.handleChange(value, 'lastName')} style={styles.textInput}></TextInput>
                    <Text style={{fontSize: 18}}>Утасны дугаар</Text>
                    <TextInput value={phoneNumber} onChange={(value) => this.handleChange(value, 'phoneNumber')} style={styles.textInput}></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={this.handleSubmit}><Text style={{color: 'white',fontSize: 23}}>Хадгалах</Text></TouchableOpacity>
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