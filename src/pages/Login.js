import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import api from "../services/api";
const Login = ({navigation}) => {

    let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');

    async function handleLogin() {

        const response = await api.post('/Users/login',{
            username: username,
            password: password
        })
            .then((response)=>{
                navigation.navigate('Main',{access_token:response.data.id});
            })
            .catch(()=>{
                loginAlert();
            });
    }

    function loginAlert(){
        Alert.alert(
            'Erro',
            'Login ou senha inválidos',
            [{
                text:'OK',onPress: () => {
                    username = "";
                    password = "";
                }
            }],
            {cancelable:false}
        );
    }
    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === 'ios'}
            style = { styles.container }
        >
            <Text style={styles.title}>
                Water Control
            </Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="usuário"
                placeholderTextColor="#999"
                onChangeText={(text)=> setUsername(text)}
                style = {styles.input}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="senha"
                placeholderTextColor="#999"
                onChangeText={(text)=> setPassword(text)}
                secureTextEntry={true}
                style = {styles.input}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f5f5f5',
        alignItems:'center',
        justifyContent:'center',
        padding:30
    },

    input:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:4,
        marginTop:20,
        paddingHorizontal: 15
    },

    button:{
        height: 46,
        alignSelf:'stretch',
        backgroundColor:'#1E4F5A',
        borderRadius:4,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },

    buttonText:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:16
    },

    title:{
        fontSize: 18
    }
});

export default Login;
