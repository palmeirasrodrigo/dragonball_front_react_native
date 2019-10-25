import React, { Component } from 'react';
import {
   StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  Animated, 
} from 'react-native';
import Video from 'react-native-video';
import ProgressBar from 'react-native-progress/Bar';
import Icon from 'react-native-vector-icons/FontAwesome';
var Sound = require('react-native-sound');

const w = Dimensions.get('window');

function secondsToTime(time) {
  return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
}


// Enable playback in silence mode
//Sound.setCategory('Playback');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
var whoosh1 = new Sound('fracassado_vegeta.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
 });
 var whoosh2 = new Sound('retardado.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
 });
 var whoosh3 = new Sound('verme.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
 });
 var whoosh4 = new Sound('genio.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
  var whoosh5 = new Sound('saco.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });



export default class Alternativas extends Component {

 

  state= {
    paused: true,
    progress:0,
    duration:0,
    progressAnimado: new Animated.Value(0),
  }


  animatedValue = new Animated.Value(0);
  animatedValue2 = new Animated.Value(0);

   
  renderOverlay = () => {
    const imageStyles = [
      styles.overlayHeart,
      {
        opacity: this.animatedValue,
        transform: [
          {
            scale: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0.7, 1.7],
            }),
          },
        ],
      },
    ];

    return (
      <View style={styles.overlay}>
        <Animated.Image
          source={require('../img/heartc.png')}
          style={imageStyles}
        />
      </View>
    );
  }  

  renderOverlay2 = () => {
    const imageStyles = [
      styles.overlayHeart2,
      {
        opacity: this.animatedValue2,
        transform: [
          {
            scale: this.animatedValue2.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1.5],
            }),
          },
        ],
      },
    ];

    return (
      <View style={styles.overlay}>
        <Animated.Image
          source={require('../img/vegeta.png')}
          style={imageStyles}
        />
      </View>
    );
  }  

 

  handleMainButtonTouch = () => {
    if (this.state.progress >= 1) {
      this.player.seek(0);
    }

    this.setState(state => {
      return {
        paused: !state.paused,
      };
    });
  };

  handleProgressPress = e => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 250) * this.state.duration;
    const isPlaying = !this.state.paused;

    this.player.seek(progress);
  };


  handleProgress = progress => {
    this.setState({
      progress: progress.currentTime / this.state.duration,
    });
  };

  handleEnd = () => {
    this.setState({ paused: true });
  };
  
  
    
 verificarResposta1 = async () => {
  const {alternativas} = this.props;
  const respostas  = alternativas.resposta;
  const alternativa1 = alternativas.alternativa1;
  
               if(alternativa1==respostas){
                Animated.sequence([
                  Animated.spring(this.animatedValue, { toValue: 1 }),
                  Animated.spring(this.animatedValue, { toValue: 0 }),
                ]).start();
                whoosh4.play();
                                                            }else{
                                                              Animated.sequence([
                                                                Animated.spring(this.animatedValue2, { toValue: 1 }),
                                                                Animated.spring(this.animatedValue2, { toValue: 0 }),
                                                              ]).start();       
                                                              whoosh1.play();
                                                            }
                };


 verificarResposta2 = () => {
  const {alternativas} = this.props;
const respostas  = alternativas.resposta;
const alternativa2 = alternativas.alternativa2;
if(alternativa2==respostas){
  Animated.sequence([
    Animated.spring(this.animatedValue, { toValue: 1 }),
    Animated.spring(this.animatedValue, { toValue: 0 }),
  ]).start();
  whoosh4.play();
                                              }else{
                                                Animated.sequence([
                                                  Animated.spring(this.animatedValue2, { toValue: 1 }),
                                                  Animated.spring(this.animatedValue2, { toValue: 0 }),
                                                ]).start();          
                                                whoosh2.play();
                                              }
       };


       verificarResposta3 = () => {
        const {alternativas} = this.props;
    const respostas  = alternativas.resposta;
    const alternativa3 = alternativas.alternativa3;
    if(alternativa3==respostas){
      Animated.sequence([
        Animated.spring(this.animatedValue, { toValue: 1 }),
        Animated.spring(this.animatedValue, { toValue: 0 }),
      ]).start();
      whoosh4.play();
                                                  }else{
                                                    Animated.sequence([
                                                      Animated.spring(this.animatedValue2, { toValue: 1 }),
                                                      Animated.spring(this.animatedValue2, { toValue: 0 }),
                                                    ]).start();             
                                                    whoosh3.play();
                                                  }
             };

             
  verificarResposta4 = () => {
    const {alternativas} = this.props;
const respostas  = alternativas.resposta;
const alternativa4 = alternativas.alternativa4;
if(alternativa4==respostas){
  Animated.sequence([
    Animated.spring(this.animatedValue, { toValue: 1 }),
    Animated.spring(this.animatedValue, { toValue: 0 }),
  ]).start();
  whoosh4.play();
                                              }else{
                                                Animated.sequence([
                                                  Animated.spring(this.animatedValue2, { toValue: 1 }),
                                                  Animated.spring(this.animatedValue2, { toValue: 0 }),
                                                ]).start();            
                                                whoosh5.play();
                                              }
         };

         

  handleLoad = meta => {
    this.setState({
      duration: meta.duration,
    });
  };

 

  render() {
    const { width } = Dimensions.get("window");
    const height = width * 0.5625;


    const {alternativas} = this.props;
    //const {usuario} = this.props;
    
    return (

      <View style={styles.container}>
     
                             <TouchableOpacity  style = {styles.buttonTitulo}> 
           <Text style={styles.titulo}>{alternativas.titulo}</Text>

                                        </TouchableOpacity>
        <Video 
            source={{uri: alternativas.link}}
           paused={this.state.paused}
           //source={alternativas.link}
            style={{width: "100%", height,   
          }}         
           resizeMode="contain"
           onLoad={this.handleLoad}
           onProgress={this.handleProgress}
            onEnd={this.handleEnd}
            ref={ref =>  this.player = ref}
          />



          <View style={styles.controls}>
            <TouchableWithoutFeedback onPress={this.handleMainButtonTouch}>
              <Icon name={!this.state.paused ? "pause" : "play"} size={30} color="#FFF" />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.handleProgressPress}>
              <View>
                <ProgressBar
                  progress={this.state.progress}
                  color="#FFF"
                  unfilledColor="rgba(255,255,255,.5)"
                  borderColor="#FFF"
                  width={250}
                  height={20}
                />
              </View>
            </TouchableWithoutFeedback>

            <Text style={styles.duration}>
              {secondsToTime(Math.floor(this.state.progress * this.state.duration))}
            </Text>
                    
        </View>
        {this.renderOverlay()}
        {this.renderOverlay2()}
        
          <View   >
                   <Text style={styles.pergunta}>{alternativas.pergunta}</Text>
            <TouchableOpacity onPress={this.verificarResposta1} style = {styles.button}> 
            <Text style={styles.opcoes} >{alternativas.alternativa1}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.verificarResposta2} style = {styles.button}> 
            <Text style={styles.opcoes}  >{alternativas.alternativa2}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.verificarResposta3} style = {styles.button}> 
            <Text style={styles.opcoes}>{alternativas.alternativa3}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.verificarResposta4}  style = {styles.button}> 
            <Text style={styles.opcoes} >{alternativas.alternativa4}</Text>
            </TouchableOpacity>
            </View>      

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
      
        
}) ;