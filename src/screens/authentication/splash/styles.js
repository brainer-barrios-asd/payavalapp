import { StyleSheet } from 'react-native';

const styles = StyleSheet.create( {
    container:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:'#fff',
        width:'100%',
        //marginTop: StatusBar.currentHeight,
    },
    header_content:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingRight: 20,
        // backgroundColor: '#2196F3',
    },
    content:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop:73,
        paddingLeft: 39,
        paddingRight: 38,
        // backgroundColor: '#8BC34A',
    },
    logo:{
        marginTop:39,
        marginBottom:22,
        // backgroundColor: '#e3aa1a',
    },
    triangulo_superior:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
    },
    triangulo_inferior:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',

    },
    footer_content:{
        paddingTop:50,
        flex:1,        
        justifyContent:'flex-end',
        alignContent: 'center',
        // backgroundColor: '#e3aa1a',

    },
    footer_content_image_container:{
        width: '100%', 
        flexDirection:'row', 
        justifyContent:'flex-end', 
        alignItems:'flex-end' ,  
    },
    footer_content_image:{
        width: 150, 
        height: 207,  
        opacity: .2,
    },
   
    button_group: {
        justifyContent:'flex-end',
        alignContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor:'#fff',
        paddingLeft:30,
        paddingRight:30,
        paddingBottom: 30,
        position:'absolute',
        width: '100%',
    },
    login_button: {
        width:'100%',
        height: 56,
        backgroundColor:'#fa2c46',
        borderRadius:4,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
      },
      login_text: {       
        color:'#ffffff',
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
      }, 
      register_button: {
        width:'100%',
        height: 56,
        borderRadius:4,
        borderWidth: 2,
        borderColor: '#000035',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',

        
      },
      register_text: {       
        color:'#000035',
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
      },
      loading:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
      },
});

export default styles;