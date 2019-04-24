import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Modal } from 'react-native';

class Modal extends Component {
    state = {
        modal:false
    }

    handleModal = () =>{
        this.setState({
            modal:!this.state.modal ? true : false
        })
    }

    render(){
        return(
            <View style={{width:'100%'}}>
                <Button 
                title="Open Modal"
                onPress={this.handleModal}/>

                <Modal 
                    visible={this.state.modal}
                    anymationType='slide'>

                    <View style={{marginTop: 20, backgroundColor:'red'}}>
                        <Text>My Modal Component</Text>
                    </View>

                    <Button 
                        title="Close Modal"
                        onPress={this.handleModal}/>

                </Modal>
            </View>

            
        )
    }
}

export default Modal;