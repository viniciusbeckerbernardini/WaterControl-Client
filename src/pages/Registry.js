import React,{useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import api from "../services/api";
const Registry = ({navigation}) => {

    let accessToken = navigation.getParam("access_token");

    let [addressNumber,setAdressNumber] = useState(0);
    let [clientID,setClientID] = useState(0);
    let [watchNumber,setWatchNumber] = useState(0);
    let [readNumber,setReadNumber] = useState(0);

    async function saveRegistry() {
        let dataStructure = {
            "numeroCasaApto": addressNumber,
            "numeroRelogio": watchNumber,
            "codcliente": clientID,
            "numeroleitura": readNumber,
            "dataUltima":new Date().toISOString(),
            "data":new Date().toISOString()
        };

        const response = await api.put(`/cadastros?access_token=${accessToken}`,dataStructure)
            .then(()=>{
                navigation.navigate('Main',{access_token:accessToken});
            })
            .catch(()=>{
                Alert.alert(
                    'Erro',
                    'O cadastro não foi efetuado',
                    [{
                        text:'OK',onPress: () => {
                            username = "";
                            password = "";
                        }
                    }],
                    {cancelable:false}
                );
            })


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
                placeholder="N° Apto/Casa"
                placeholderTextColor="#999"
                onChangeText={(text)=> setAdressNumber(text)}
                style = {styles.input}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="N° CodCliente"
                placeholderTextColor="#999"
                onChangeText={(text)=> setClientID(text)}
                style = {styles.input}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="N° Relógio/Hidrômetro"
                placeholderTextColor="#999"
                onChangeText={(text)=> setWatchNumber(text)}
                style = {styles.input}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="N° Leitura"
                placeholderTextColor="#999"
                onChangeText={(text)=> setReadNumber(text)}
                style = {styles.input}
            />
            <TouchableOpacity onPress={saveRegistry} style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
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

export default Registry;
