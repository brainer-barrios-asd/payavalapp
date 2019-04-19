import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBar} from 'react-native';
import Login from '../Login';


class Layout extends Component{
    render(){
        return(
            <View style={styles.container}>
               <Login/>         
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent : 'flex-start',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight +20,
    },
});

export default Layout;