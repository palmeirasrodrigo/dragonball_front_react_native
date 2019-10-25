import React , {Component} from 'react';

import {View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView,Text} from 'react-native';


export default class EpisodiosSuper extends Component {
    static navigationOptions = ({})=> ({
        title: "Episódios Dragon Ball Z",
           });

           state={
                esferas: "",
            };

           async  componentDidMount(){
                const  esfera = this.props.navigation.state.params.estrela ;

                this.setState({esferas: esfera});
            }
           
           
   

    render() {
        return (
            <ScrollView style={styles.fundo}>
            <View style={styles.container}>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:1, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/1.gif")}  style={styles.imagem}/>
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:2, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/2.gif")}  style={styles.imagem} />
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:3, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/3.gif")}  style={styles.imagem}/>
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:4, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/4.gif")}  style={styles.imagem} />
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:5, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/5.gif")}  style={styles.imagem} />
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:6, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/6.gif")}  style={styles.imagem}/>
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:7, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/7.gif")}  style={styles.imagem} />
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:8, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/8.gif")}  style={styles.imagem} />
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:9, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/9.gif")}  style={styles.imagem} />
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:10, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/10.gif")}  style={styles.imagem}/>
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:11, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/11.gif")}  style={styles.imagem} />
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:12, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/12.gif")}  style={styles.imagem}/>
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:13, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/13.gif")}  style={styles.imagem} />
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:14, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/14.gif")}  style={styles.imagem} />
            </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QuestaoPequeno", {serie: "DRAGONBALLZ",episodio:15, estrela:this.state.esferas});}}>
                    <Image source={require("../img/numeros/15.gif")}  style={styles.imagem}/>
            </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
        fundo: {
                backgroundColor: "#000000",
            },
            container: {
              flex: 1,
              flexDirection: 'row',
                justifyContent:'space-around',
                flexWrap:'wrap',
            },
            box: { 
                marginTop:15,
                width:110,   height:110, 
                borderRadius:50, 
                borderColor:"yellow",
            },
            imagem:{
                
                width:110,   height:110, 
                borderRadius:50, 
                flexDirection: 'column',
                 
            }, 
           
     });