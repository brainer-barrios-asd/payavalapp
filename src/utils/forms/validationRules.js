const validation = (value, rules, form) =>{
    let valid = true;

    for(let rule in rules){
        switch(rule){
            case "isRequired":
                valid = valid && validateRequired(value);
                break;
            case "isEmail":
                valid = valid && validateEmail(value);
                break;  
            case "minLength":
                valid = valid && validateMinLength(value, rules[rule]);
                break;  
            case "confirmPass":
                valid = valid && validateConfirmPass(value, form[rules.confirmPass].value );
                break;              
            default:
                valid = true;    
        }
    }

    return valid;
}

const validateRequired = ( value ) =>{

    return value !== '';
}

const validateEmail = ( email ) =>{
    const expression = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
    
    return expression.test(String(email).toLowerCase());
}

const validateMinLength = ( value, ruleValue ) =>{

    return value.length >= ruleValue;
}

const validateConfirmPass = ( confirmPass, pass ) =>{
   
    return confirmPass === pass;
}
export default validation;