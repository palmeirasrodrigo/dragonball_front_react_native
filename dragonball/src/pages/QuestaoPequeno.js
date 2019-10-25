import React , {Component} from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';


import {FlatList,View, StyleSheet, Text, Image
} from 'react-native';

import api from '../services/api';

import Alternativas from '../components/Alternativas';
import EpisodiosPequeno from '../pages/EpisodiosPequeno';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

export default class QuestaoPequeno extends Component {

    state={
        alternativas:[],
       visivel: true,
       
    };

    async  componentDidMount(){
        const  episodioPequeno = this.props.navigation.state.params.episodio ;
        const  esfera = this.props.navigation.state.params.estrela ;
        const serie = this.props.navigation.state.params.serie;
        const response =  await api.get("alternativas/pesquisar?serie="+serie+"&episodio=" + episodioPequeno + "&esfera="+esfera);
        this.setState({alternativas: response.data});
        this.setState({visivel:false})
    }
   
    
    render() {

        return (
        <View  style={styles.container}>          
             
             <OrientationLoadingOverlay
          visible={this.state.visivel}>
<View>
            <Image
              source={require('../img/tenor.gif')}
              />
          </View>
          </OrientationLoadingOverlay>
          
          
                   <FlatList                     
                data={this.state.alternativas}
                keyExtractor={alternativas => alternativas.codigo}

                renderItem={({item}) => 
                <Alternativas alternativas={item}/>
            }
            />
            
             
               
        </View>
        );

        
    }
  

    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"#000"
        },
        nome:{
            color:"#FFF"
        },

    });