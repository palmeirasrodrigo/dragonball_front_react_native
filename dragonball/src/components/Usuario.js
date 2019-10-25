import React, { Component } from 'react';
import {
   StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  Animated, 
  FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
export default class Usuario extends Component {

 

  state= {
    
  }


  
  render() {
    
    const {usuario} = this.props;
    return (
      <View style={styles.container}>
      
                <Text style={styles.titulo}>{usuario.nome}</Text>

            </View>      

           
    );

}
}


const styles = StyleSheet.create({
opcoes:{
  color: "#FFF",
  fontSize: 22,
  fontWeight: "bold",
  fontStyle: "italic",
},
button: {
  height: 44,
  alignSelf: "stretch",
  marginTop: 10,
  backgroundColor: "#00F5FF",
  borderRadius: 5,
  justifyContent: "center",
  alignItems:"center",
  opacity:0.5
},

pergunta: {
    fontSize:20,
    fontWeight: "900",
    color: "#00FF00",
    marginLeft:10
        },

        buttonTitulo:{
          height: 44,
          marginTop: 10,
          alignSelf: "stretch",
          borderRadius: 5,
          justifyContent: "center",
          alignItems:"center",
        },

        titulo:{
         
          fontSize:25,
          color: "#FFF",
          fontWeight: "bold",
          paddingTop:10
        },

        container: {
          flex: 1,
          backgroundColor: "#000000",
          opacity:1
        },
        controls: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          height: 48,
          left: 0,
          bottom: 0,
          right: 0,
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingHorizontal: 10,
        },
        mainButton: {
          marginRight: 15,
        },
        duration: {
          color: "#FFF",
          marginLeft: 15,
        },
       
        iconRow: {
          flexDirection: 'row',
          alignSelf: 'stretch',
          marginTop: 10,
          paddingVertical: 5,
          paddingHorizontal: 15,
        },
        heartIcon: {
          width: 20,
          height: 20,
        },
        overlay: {
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
        overlayHeart: {
          tintColor: '#00FF7F',
        },
        overlayHeart2: {
          tintColor: '#FF4040',
        },
      
        
});