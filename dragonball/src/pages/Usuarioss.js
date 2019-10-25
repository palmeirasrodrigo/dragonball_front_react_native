import React , {Component} from 'react';

//import socket from 'socket.io-client';

import {FlatList,View, StyleSheet, Text,    TouchableWithoutFeedback
} from 'react-native';

import api from '../services/api';
import axios from 'axios';

import Alternativas from '../components/Alternativas';
import Usuario from '../components/Usuario';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class QuestaoPequeno extends Component {

    handlePontos = () => {
        const {codigo} = this.props.pontos;

        api.put(`${codigo}/pontos`);
    };


    state={
        usuario:[]
    };

    async  componentDidMount(){
       // this.subscribeToEvents();
        const response =  await api.get("usuario");
        this.setState({usuario:response.data});
            }

            
   
    /*subscribeToEvents  = () => {
        const io  = socket('http://10.0.2.2:8080');

        io.on('tweet', data =>{
            this.setState({tweets: [data, ...this.state.tweets]})
        });

        io.on('like', data=>{
            this.setState({tweets: this.state.tweets.map(tweet=>
                tweet._id === data._id ? data : tweet
                )})
        });
    };
*/


    render() {


        return (
        <View  style={styles.container}>
           <FlatList                     
                
            data={this.state.usuario}
            keyExtractor={usuario => usuario.codigo}
            renderItem={({item}) => 
            <Alternativas usuario={item}/>
        }               
                  
                />
             
                                  
        </View>
        );

        
    }
  

    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"#FFF"
        }
    });