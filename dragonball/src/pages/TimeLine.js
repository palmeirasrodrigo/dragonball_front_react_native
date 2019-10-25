import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated , Image, ScrollView, TouchableOpacity} from "react-native";

export default class TimeLine extends Component {
    static navigationOptions = ({navigation})=> ({
        title: "Séries",
            });

  state = {
    animation: new Animated.Value(0),
    animation2: new Animated.Value(0),
    animation3: new Animated.Value(0),
    animation4: new Animated.Value(0),
   estrelas:""
  };

  async  componentDidMount(){
    const  esferas = this.props.navigation.state.params.estrela ;
    this.setState({estrelas: esferas});
}

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

    
    
    return (
      
      <View style={styles.container}>
        <TouchableWithoutFeedback  onPressIn={this.handleAirhorn} onPressOut={()=>{this.handleButtonUp, this.props.navigation.navigate("EpisodiosPequeno", {estrela:this.state.estrelas});}}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle]}>
                <Animated.View style={[styles.inner, inner, ] }  >
          <Image source={require("../img/pequeno.jpg")} style={{width: "100%", height: "100%",   borderRadius: 16}}></Image>
                </Animated.View>
              </Animated.View>

            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPressIn={this.handleAirhorn2} onPressOut={()=>{this.handleButtonUp2, this.props.navigation.navigate("EpisodiosZ", {estrela:this.state.estrelas});}}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle2]}>
                <Animated.View style={[styles.inner, inner, ] } >
          <Image source={require("../img/z.jpg")} style={{width: "100%", height: "100%",   borderRadius: 16}}></Image>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPressIn={this.handleAirhorn3} onPressOut={()=>{this.handleButtonUp3, this.props.navigation.navigate("EpisodiosGt", {estrela:this.state.estrelas});}}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle3]}>
                <Animated.View style={[styles.inner, inner, ] } >
          <Image source={require("../img/gt.jpg")} style={{width: "100%", height: "100%",   borderRadius: 16}}></Image>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPressIn={this.handleAirhorn4} onPressOut={()=>{this.handleButtonUp4, this.props.navigation.navigate("EpisodiosSuper", {estrela:this.state.estrelas});}}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle4]}>
                <Animated.View style={[styles.inner, inner, ] }>
          <Image source={require("../img/super.jpg")} style={{width: "100%", height: "100%",   borderRadius: 16, }}></Image>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   alignItems: "center",
    justifyContent: "center",
   paddingTop:15,
    flex: 1,
    flexDirection: 'column',
      justifyContent:'space-around',
      flexWrap:'wrap',
  },
  button: {
    flex:0.25,
    height: "100%",
    width: "95%",
    paddingTop:20
  },
  outer: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderRadius: 14,
  },
  height: {
    backgroundColor: "rgba(255, 0, 0, .5)",
    borderRadius: 16,
  },
  inner: {
    height: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  white: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },

  

});