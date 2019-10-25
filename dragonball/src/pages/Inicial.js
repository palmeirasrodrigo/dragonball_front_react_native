import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated , Image, ScrollView, TouchableOpacity,Easing } from "react-native";
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import Videu from './Videu';
import LottieView from 'lottie-react-native';
var Sound = require('react-native-sound');

Sound.setCategory('Playback');
var whoosh = new Sound('inicio.mp3', Sound.MAIN_BUNDLE, (error) => {
  whoosh.play();
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
 });

export default class Inicial extends Component {

  static navigationOptions = ({navigation})=> ({
    title: "Conquiste as esferas do dragão",
       }); 

       
  state = {
    animation: new Animated.Value(0),
    animation2: new Animated.Value(0),
    animation3: new Animated.Value(0),
    animation4: new Animated.Value(0),
    animation5: new Animated.Value(0),
    animation6: new Animated.Value(0),
    animation7: new Animated.Value(0),
  };

  
  handleAirhorn = async () => {
    try {
     
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100,
      }).start();
    } catch (e) {}
  };

  handleAirhorn2 = async () => {
    try {
     
      Animated.timing(this.state.animation2, {
        toValue: 1,
        duration: 100,
      }).start();
    } catch (e) {}
  };

  handleAirhorn3 = async () => {
    try {
     
      Animated.timing(this.state.animation3, {
        toValue: 1,
        duration: 100,
      }).start();
    } catch (e) {}
  };

  handleAirhorn4 = async () => {
    try {
     
      Animated.timing(this.state.animation4, {
        toValue: 1,
        duration: 100,
      }).start();
    } catch (e) {}
  };

  handleAirhorn5 = async () => {
    try {
     
      Animated.timing(this.state.animation5, {
        toValue: 1,
        duration: 100,
      }).start();
    } catch (e) {}
  };

  handleAirhorn6 = async () => {
    try {
     
      Animated.timing(this.state.animation6, {
        toValue: 1,
        duration: 100,
      }).start();
    } catch (e) {}
  };

  handleAirhorn7 = async () => {
    try {
     
      Animated.timing(this.state.animation7, {
        toValue: 1,
        duration: 100,
      }).start();
    } catch (e) {}
  };

  
  handleButtonUp = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 50,
    }).start();
  };

   
  handleButtonUp2 = () => {
    Animated.timing(this.state.animation2, {
      toValue: 0,
      duration: 50,
    }).start();
  };

  handleButtonUp3 = () => {
    Animated.timing(this.state.animation3, {
      toValue: 0,
      duration: 50,
    }).start();
  };

  handleButtonUp4 = () => {
    Animated.timing(this.state.animation4, {
      toValue: 0,
      duration: 50,
    }).start();
  };

  handleButtonUp5 = () => {
    Animated.timing(this.state.animation5, {
      toValue: 0,
      duration: 50,
    }).start();
  };

  handleButtonUp6 = () => {
    Animated.timing(this.state.animation6, {
      toValue: 0,
      duration: 50,
    }).start();
  };

  handleButtonUp7 = () => {
    Animated.timing(this.state.animation7, {
      toValue: 0,
      duration: 50,
    }).start();
  };

  render() {
    const inner = {
      borderRadius: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [12, 96],
      }),
    };


    const heightStyle = {
      marginTop: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-15, 0],
      }),
      paddingBottom: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0],
      }),

      
    };



    const heightStyle2 = {
      marginTop: this.state.animation2.interpolate({
        inputRange: [0, 1],
        outputRange: [-15, 0],
      }),
      paddingBottom: this.state.animation2.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0],
      }),
    };

    const heightStyle3 = {
      marginTop: this.state.animation3.interpolate({
        inputRange: [0, 1],
        outputRange: [-15, 0],
      }),
      paddingBottom: this.state.animation3.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0],
      }),
    };
    
    const heightStyle4 = {
      marginTop: this.state.animation4.interpolate({
        inputRange: [0, 1],
        outputRange: [-15, 0],
      }),
      paddingBottom: this.state.animation4.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0],
      }),
    };

    const heightStyle5 = {
      marginTop: this.state.animation5.interpolate({
        inputRange: [0, 1],
        outputRange: [-15, 0],
      }),
      paddingBottom: this.state.animation5.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0],
      }),
    };

    const heightStyle6 = {
      marginTop: this.state.animation6.interpolate({
        inputRange: [0, 1],
        outputRange: [-15, 0],
      }),
      paddingBottom: this.state.animation6.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0],
      }),
    };

    const heightStyle7 = {
      marginTop: this.state.animation7.interpolate({
        inputRange: [0, 1],
        outputRange: [-15, 0],
      }),
      paddingBottom: this.state.animation7.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0],
      }),
    };

   
    return (
                 <ScrollView style={styles.fundo}>
           <View style={styles.container}>
        <TouchableWithoutFeedback onPressIn={this.handleAirhorn} onPressOut={()=>{this.handleButtonUp, this.props.navigation.navigate("TimeLine", {estrela:1});}}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle]}>
                <Animated.View style={[styles.inner, inner, ] }  style={{width: "100%", height: "100%",   borderRadius: 100}}>
          <Image source={require("../img/esfera1.jpg")} style={{width: "100%", height: "100%",   borderRadius: 100}}></Image>
                </Animated.View>
              </Animated.View>

            </View>
          </View>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback disabled={true} onPressIn={this.handleAirhorn2} onPressOut={()=>{this.handleButtonUp2, this.props.navigation.navigate("TimeLine", {estrela:2});}}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle2]}>
                <Animated.View style={[styles.inner, inner, ] }  style={{width: "100%", height: "100%",   borderRadius: 100}}>
          <Image source={require("../img/esfera2.png")} style={{width: "100%", height: "100%",   borderRadius: 100}}></Image>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback >
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle4]}>
                <Animated.View style={[styles.inner, inner, ] }  style={{width: "100%", height: "100%",   borderRadius: 100}}>
                  <Videu style={styles.button}> style={{width: "100%", height: "100%",   borderRadius: 100}}></Videu>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback  disabled={true} onPressIn={this.handleAirhorn3} onPressOut={()=>{this.handleButtonUp3, this.props.navigation.navigate("TimeLine", {estrela:3});}}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle3]}>
                <Animated.View style={[styles.inner, inner, ] }  style={{width: "100%", height: "100%",   borderRadius: 100}}>
          <Image source={require("../img/esfera3.png")} style={{width: "100%", height: "100%",   borderRadius: 100}}></Image>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback  disabled={true} onPressIn={this.handleAirhorn4} onPressOut={()=>{this.handleButtonUp4, this.props.navigation.navigate("TimeLine", {estrela:4});}}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle4]}>
                <Animated.View style={[styles.inner, inner, ] }  style={{width: "100%", height: "100%",   borderRadius: 100}}>
          <Image source={require("../img/esfera4.png")} style={{width: "100%", height: "100%",   borderRadius: 100}}></Image>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback  disabled={true} onPressIn={this.handleAirhorn5} onPressOut={()=>{this.handleButtonUp5, this.props.navigation.navigate("TimeLine", {estrela:5});}}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle5]}>
                <Animated.View style={[styles.inner, inner, ] }  style={{width: "100%", height: "100%",   borderRadius: 100}}>
          <Image source={require("../img/esfera5.png")} style={{width: "100%", height: "100%",   borderRadius: 100}}></Image>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback  disabled={true} onPressIn={this.handleAirhorn6} onPressOut={()=>{this.handleButtonUp6, this.props.navigation.navigate("TimeLine", {estrela:6});}}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle6]}>
                <Animated.View style={[styles.inner, inner, ] }  style={{width: "100%", height: "100%",   borderRadius: 100}}>
          <Image source={require("../img/esfera6.png")} style={{width: "100%", height: "100%",   borderRadius: 100}}></Image>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback  disabled={true} onPressIn={this.handleAirhorn7} onPressOut={()=>{this.handleButtonUp7, this.props.navigation.navigate("TimeLine", {estrela:7});}}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle7]}>
                <Animated.View style={[styles.inner, inner, ] }  style={{width: "100%", height: "100%",   borderRadius: 100}}>
          <Image source={require("../img/esfera7.png")} style={{width: "100%", height: "100%",   borderRadius: 100}}></Image>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
   // alignItems: "center",
   // justifyContent: "center",
   paddingTop:15,
    flex: 1,
    flexDirection: 'row',
      justifyContent:'space-around',
      flexWrap:'wrap',
  },
  button: {
    height: 125,
    width: 125,
    borderRadius: 100,

  },
  outer: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderRadius: 100,

  },
  height: {
    backgroundColor: "rgba(255, 0, 0, .5)",
    borderRadius: 150,
    position: 'relative'

  },
  inner: {
    borderRadius: 100,
    height: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  white: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
    borderRadius: 100,

  },
  imagem:{
                
    width:110,   height:110, 
    borderRadius:50, 
    borderColor:"yellow",
    flexDirection: 'column',

},
fundo: {
  backgroundColor: "#000000",
},
video:{
  width:"100%",   height:110, 
},
breve:{
            color: "#00EE00",
    position: 'absolute',
    justifyContent: "center",
    alignItems:"center",
    fontSize:22,
    fontWeight: "bold",

}
});