import React, {useState} from 'react';
import {View, StyleSheet, Alert,Text} from 'react-native';
import api from "../services/api";

const Report = ({navigation}) => {
    let accessToken = navigation.getParam('access_token');
    let [reportData,setReportData] = useState([]);
    async function loadReports() {
        const response = await api.get(`/cadastros?access_token=${accessToken}`)
            .then((response) => {
                setReportData(response.data);
            }).catch(() => {
                Alert.alert(
                    'Erro',
                    'A listagem não pode ser realizada',
                    [{
                        text: 'OK', onPress: () => {
                            navigation.navigate("Main", {access_token: accessToken});
                        }
                    }],
                    {cancelable: false}
                );
            })
    }

    loadReports();

    return (
        <View>
            <Text>{reportData.length === 0? "Não tem" : "Chegou"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f5f5f5',
        alignItems:'center',
        justifyContent:'center',
        padding:30
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    text: {
        margin: 6
    }
});

export default Report;
