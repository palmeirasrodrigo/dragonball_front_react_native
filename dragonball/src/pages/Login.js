import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//colors 
import { COLOR_PINK, COLOR_PINK_LIGHT, COLOR_FACEBOOK, COLOR_PINK_MEDIUM } from './myColors';
//Login Facebook
import { LoginManager } from "react-native-fbsdk";
import {createSwitchNavigator} from 'react-navigation'


export default class Login extends Component{
  static navigationOptions = ({navigation})=> ({
    title: "Aprenda se divertindo...!",
       });

       state  = { 
        username: "",
        senha: "",
    };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      //Disable "back" button on Android
      return true;

    });

  }
  componentWillUnmount() {
    this.backHandler.remove();

  }
  
  handleInputChange = (username) => {
    this.setState({username});
};

handleInputChangeSenha = (senha) => {
    this.setState({senha});
};
  
   loginFacebook = async () => {
    // alert("1234")

    try {
      let result = await LoginManager.logInWithReadPermissions(['public_profile']);
      if (result.isCancelled) {
        alert('Login foi cancelado');
      } else {
    this.props.navigation.navigate("Inicial");
  }
    } catch (error) {
      alert('Login falhou com o erro: ' + error)      
    }    
  }

  loginNormal = async () => {
    const {username} = this.state;
    const {senha} = this.state;

    if(!username.length || !senha.length) return;
    if(username==="rodrigo"&&senha==="mago10"){
        this.props.navigation.navigate("Inicial2");
    }else{
        return;
    }
    
};
  
  render() {


    
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
      </View>

    }
    return (
      //Donot dismis Keyboard when click outside of TextInput
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View style={styles.container}>
          <View style={styles.up}>
            <Ionicons
              name="ios-speedometer"
              size={100}
              color={COLOR_PINK}>
            </Ionicons>
            <Text style={styles.title}>
              Curso de Inglês do Dragon Ball
            </Text>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType='emailAddress'
                keyboardType='email-address'
                placeholder="Email"
                value = {this.state.username}
                onChangeText={this.handleInputChange}
                onSubmitEditing = {this.loginNormal}
              >
              </TextInput>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Senha"
                secureTextEntry={true}
                value = {this.state.senha}
                onChangeText={this.handleInputChangeSenha}
                onSubmitEditing = {this.loginNormal}
              >
              </TextInput>
            </View>
            <TouchableOpacity    onPress={this.loginNormal} style={styles.loginButton} >
              <Text style={styles.loginButtonTitle}>LOGIN</Text>
            </TouchableOpacity>
            <Divider style={styles.divider}></Divider>
            <FontAwesome.Button 
              style={styles.facebookButton}
              name="facebook"
              onPress={this.loginFacebook}
              backgroundColor={COLOR_FACEBOOK}
            >
              <Text style={styles.loginButtonTitle}>Login com Facebook</Text>
            </FontAwesome.Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: COLOR_PINK_LIGHT
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,//70% of column
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    color: COLOR_PINK_MEDIUM,
    textAlign: 'center',
    width: 400,
    fontSize: 23
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.2)'//a = alpha = opacity
  },
  textInput: {
    width: 280,
    height: 45
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PINK
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
  facebookButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black'
  },
  textOR: {
    flex: 1,
    textAlign: 'center'
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  }
})