import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Checkbox  } from 'react-native-paper';


const input = (props) => {
    let template = null;

    switch(props.type){
        case "textinput":
            template = 
                <TextInput
                    {...props}
                    style={[styles.input, props.overrideStyle]}>
                </TextInput>
            break;
        case "checkbox":
            template = 
                <Checkbox
                    {...props}
                    style={[styles.check, props.overrideStyle]}>
                </Checkbox>
            break;
        default:
            return template;

    }

    return template;
}


const styles = StyleSheet.create({
    input:{
        width: "100%",
        fontSize: 18,
        padding: 5,
        marginTop:10
    },
    check:{
        width: "100%",
        fontSize: 18,
        padding: 5,
        marginTop:10
    }
});

export default input;