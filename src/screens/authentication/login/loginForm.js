import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import Input from '../../../utils/forms/inputs';
import Styles from './styles';
import I18n from '../../../i18n';
import ValidationRules from '../../../utils/forms/validationRules';
import { setTokens, getTokens } from '../../../utils/misc';
import { connect } from 'react-redux';
import { signUp, signIn } from '../../../store/actions/user_actions';
import { bindActionCreators } from 'redux';


class LoginForm extends Component{
    state = {
        hasErrors:false,
        form:{
            email:{
                value:"brabame@hotmail.com",
                valid:false,
                error:false,
                type:"textinput",
                rules: {
                    isRequired:true,
                    isEmail:true,
                }
            },
            password:{
                value:"123456",
                valid:false,
                error:false,
                type:"textinput",
                rules: {
                    isRequired:true,
                    minLength:6,
                }
            },
            rememberPassword:{
                value:false,
                valid:true,
                error:false,
                type:"checkbox",
                rules: {
                    
                }
            },
            // confirmPassword:{
            //     value:"",
            //     valid:false,
            //     type:"textinput",
            //     rules: {
            //         confirmPass:"password",
            //     }
            // }
        }
    }

    updateInput = (name, value) => {
    
        this.setState({
            hasErrors:false
        });

        let formCopy = this.state.form;

        formCopy[name].value = value;

        let rules = formCopy[name].rules;
        let valid = ValidationRules(value,rules);

        formCopy[name].valid = valid;
        formCopy[name].error = !valid;


        this.setState({
            form:formCopy
        });

    }

    validateForm = () =>{
        this.setState({
            hasErrors:false
        });

        let formCopy = this.state.form;

        for(let key in formCopy){
            let rules = formCopy[key].rules;
            let valid = ValidationRules(formCopy[key].value,rules);
            formCopy[key].valid = valid;
            formCopy[key].error = !valid;
        }

        this.setState({
            form:formCopy
        });
    }

    manageAccess = () =>{
        if(!this.props.User.userData.token){
            this.setState({
                hasErrors: true
            })
        } else {
            setTokens(this.props.User.userData, () => {
                this.setState({
                    hasErrors: false
                })
                //this.props.navigation
            })
        }
    }

    submitUser = () => {
        
        this.validateForm();

        let isFormValid = true;
        let formToSubmit = {};
        const formCopy = this.state.form;

        for(let key in formCopy){
            isFormValid = isFormValid && formCopy[key].valid;
            formToSubmit[key] = formCopy[key].value;
        }

        if(isFormValid){
            this.props.signUp(formToSubmit).then(() => {
                this.manageAccess();
            });
        } else {
            this.setState({
                hasErrors:true
            });
        }

        Keyboard.dismiss();
    }

    componentDidMount(){
        getTokens( (values) =>{
            //console.log(values);
        })
    }

    render(){

        return(
            <View style={Styles.form}>

                <Input
                    label={I18n.t('screens.loginScreen.email_label')}
                    mode='outlined' 
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    keyboardType="email-address"
                    autoCapitalize={"none"}
                    error={this.state.form.email.error}
                    onChangeText={ value => {this.updateInput("email",value)}}/>
                
                <Input
                    label={I18n.t('screens.loginScreen.password_label')}
                    mode='outlined'
                    type={this.state.form.password.type}
                    value={this.state.form.password.value}
                    error={this.state.form.password.error}
                    secureTextEntry
                    onChangeText={ value => {this.updateInput("password",value)}}/>                

                <View>
                    <Text style={Styles.olvide_contraseña_label}>{I18n.t('screens.loginScreen.forgot_password_label')}</Text>
                </View>

                <View style={Styles.recordar_contraseña}>                        
                    <Input
                        style={Styles.recordar_contraseña_label}
                        type={this.state.form.rememberPassword.type}
                        status={this.state.form.rememberPassword.value ? 'checked' : 'unchecked'}                        
                        color='#fa2c46'
                        label={I18n.t('screens.loginScreen.remember_password_label')}
                        onPress={ () => {this.updateInput("rememberPassword", !this.state.form.rememberPassword.value)}}/>
                    
                    <View>
                        <Text style={Styles.login_label_text}>{I18n.t('screens.loginScreen.remember_password_label')}</Text> 
                    </View>
                </View>

                <View>
                    <TouchableOpacity
                        style={Styles.login_button}
                        onPress={this.submitUser}>
                        <Text style={Styles.login_button_text}> {I18n.t('screens.loginScreen.continue_label')} </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={Styles.register_group}>
                    <Text style={Styles.register_label_text}>{I18n.t('screens.loginScreen.register_label')}</Text> 
                </View>
                        
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        User: state.User
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({signUp, signIn},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
