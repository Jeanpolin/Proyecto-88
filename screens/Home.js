import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Aplicación</Text>
                    <Text style={styles.titleText}>Estelar</Text>
                </View> 
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Naves espaciales</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard2}>
                    <Text style={styles.routeText2}>Mapa estelar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard3}>
                    <Text style={styles.routeText3}>Imágenes diarias</Text>
                </TouchableOpacity>               
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight :0
    },
    routeCard: {
        flex:0.12,
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        marginLeft:30,
        marginRight:30,
        borderRadius: 100,
        backgroundColor:"cyan"
    },
    routeCard2: {
        flex:0.12,
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        marginLeft:30,
        marginRight:30,
        borderRadius: 100,
        backgroundColor:"brown"
    },
    routeCard3: {
        flex:0.12,
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        marginLeft:30,
        marginRight:30,
        borderRadius: 100,
        backgroundColor:"orange"
    },
    titleBar: {
        flex:0.5,
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        fontSize: 40,
        fontWeight: "bold",
        color:"blue"
    },
    routeText: {
        fontSize: 25,
        fontWeight:"bold",
        color:'black',
        justifyContent:"center",
        alignItems:"center"
    },
    routeText2: {
        fontSize: 25,
        fontWeight:"bold",
        color:'yellow',
        justifyContent:"center",
        alignItems:"center"
    },
    routeText3: {
        fontSize: 25,
        fontWeight:"bold",
        color:'green',
        justifyContent:"center",
        alignItems:"center"
    },
});