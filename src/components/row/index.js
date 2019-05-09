import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';


class Row extends Component {
    render() {
        return (
            <View style={[styles.container, {justifyContent: this.props.justifyContent||'center'}]}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

export default Row;