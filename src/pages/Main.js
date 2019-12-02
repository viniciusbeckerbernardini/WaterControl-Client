import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import Registry from "./Registry";
import Report from "./Report";

const Main = ({navigation}) => {
    let accessToken = navigation.getParam('access_token');
    function registryNavigate() {
        navigation.navigate("Registry",{access_token:accessToken});
    }
    function reportNavigate() {
        navigation.navigate("Report",{access_token:accessToken});
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
            <TouchableOpacity onPress={registryNavigate} style={styles.button}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reportNavigate} style={styles.button}>
                <Text style={styles.buttonText}>Relatório</Text>
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
        fontSize: 18,
        marginBottom:20
    }
});

export default Main;
