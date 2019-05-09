import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './header';
import FlightList from './flightList';
import ProceedAction from './proceedAction';



export default class FlightScreen extends Component {
    render() {
        return (
            <View >
                <Header>
                    {/* Will contains flight search information */}
                </Header>
                <FlightList>
                    {/* Will contains flight results */}
                </FlightList>
                <ProceedAction>
                    {/* Will contains proceed button */}
                </ProceedAction>
            </View>
        )
    }
}


const styles = StyleSheet.create({

});