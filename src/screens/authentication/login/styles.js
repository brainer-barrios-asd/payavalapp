import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        //backgroundColor: '#C1E53C',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight + 30,
    },
    scrollViewContainer:{
      width:"100%"
  },
    form:{
        width:'100%', 
        paddingLeft:30, 
        paddingRight:30,
        //backgroundColor: '#0BEF14',
    },
    iniciar_sesion_label:{
        paddingTop: 50,
        paddingBottom: 30,
        color:'#000035',
        fontSize: 20,
        fontWeight: '600',
        fontStyle: 'normal',
    },
    olvide_contraseña_label:{
        paddingTop:10,
        color:'#fa2c46',
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
        fontFamily: 'AvenirNext',
    },
    recordar_contraseña:{
        flexDirection:'row',
        alignItems:'center',
        alignContent: 'center',
        paddingTop:40,
        color:'#fa2c46',
        paddingBottom:40,

    },
    recordar_contraseña_label:{
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',
    },
    login_button: {
        width:'100%',
        height: 56,
        backgroundColor:'#fa2c46',
        borderRadius:4,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent:'center',
        alignItems:'flex-start',
        marginBottom:10,
        paddingLeft:20,
        paddingRight:20,
      },
      login_button_container:{
        flex:1, 
        flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center", 
        width:'100%',
        
      },
      login_button_text: {
        color:'#fff',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',

      }, 
      register_group:{
        paddingTop:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
      },
      register_label_text:{
        color:'#fa2c46',
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
      }
});

export default styles;