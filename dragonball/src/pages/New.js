import React, { Component , Fragment} from 'react';
import { View, TextInput, Button , StyleSheet,ScrollView ,ActivityIndicator, Text, Alert,TouchableOpacity, Picker} from 'react-native';
import api from '../services/api';
import { Formik } from 'formik';
import * as yup from 'yup'


export default class New extends Component {
  static navigationOptions = ({navigation})=> ({
    title: "Cadastro de Alternativas",
       }); 

  constructor(props){
    super(props);
    this.state={
      selected:"",
      selected2:""
    }
  }

  render() {
  return (
    <ScrollView style={styles.container}>
<Formik
        initialValues={{ titulo: '', link: '',pergunta:'',alternativa1:'',alternativa2:'',alternativa3:'',alternativa4:'',resposta:'',pontos:'', tipo:'',episodio:'',esfera:'' }}
        onSubmit={values =>  api.post('alternativas', values).then(Alert.alert(
          'Episódio',
          'Adicionado com sucesso',
          [
                          {text: 'OK', onPress: () => this.props.navigation.navigate("Inicial")}         
          ]
        ))}
        validationSchema={yup.object().shape({
          titulo: yup
            .string()
            .min(3)
            .required(),
          link: yup
            .string()
            .url()
            .required(),
            pergunta: yup
            .string()
            .min(3)
            .required(),
            alternativa1: yup
            .string()
            .min(3)
            .required(),
            alternativa2: yup
            .string()
            .min(3)
            .required(),
            alternativa3: yup
            .string()
            .min(3)
            .required(),
            alternativa4: yup
            .string()
            .min(3)
            .required(),
            resposta: yup
            .string()
            .min(3)
            .required(),
            pontos: yup
            .number()
           .required()
           .positive()
           .integer(),
            episodio: yup
            .number()
            .required()
            .positive()
            .integer(),
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit,setFieldValue }) => (
          <Fragment>
            <TextInput style={styles.input}
              value={values.titulo}
              onChangeText={handleChange('titulo')}
              onBlur={() => setFieldTouched('titulo')}
              placeholder="Titulo"
            />
            {touched.titulo && errors.titulo &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.titulo}</Text>
            }
            <TextInput style={styles.input}
              value={values.link}
              onChangeText={handleChange('link')}
              placeholder="Link"
              onBlur={() => setFieldTouched('link')}
            />
            {touched.link && errors.link &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.link}</Text>
            }
            <TextInput style={styles.input}
              value={values.pergunta}
              onChangeText={handleChange('pergunta')}
              placeholder="Pergunta"
              onBlur={() => setFieldTouched('pergunta')}
            />
            {touched.pergunta && errors.pergunta &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.pergunta}</Text>
            }
            <TextInput style={styles.input}
              value={values.alternativa1}
              onChangeText={handleChange('alternativa1')}
              placeholder="Alternativa 1"
              onBlur={() => setFieldTouched('alternativa1')}
            />
            {touched.alternativa1 && errors.alternativa1 &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.alternativa1}</Text>
            }
             <TextInput style={styles.input}
              value={values.alternativa2}
              onChangeText={handleChange('alternativa2')}
              placeholder="Alternativa 2"
              onBlur={() => setFieldTouched('alternativa2')}
            />
            {touched.alternativa2 && errors.alternativa2 &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.alternativa2}</Text>
            }
             <TextInput style={styles.input}
              value={values.alternativa3}
              onChangeText={handleChange('alternativa3')}
              placeholder="Alternativa 3"
              onBlur={() => setFieldTouched('alternativa3')}
            />
            {touched.alternativa3 && errors.alternativa3 &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.alternativa3}</Text>
            }
             <TextInput style={styles.input}
              value={values.alternativa4}
              onChangeText={handleChange('alternativa4')}
              placeholder="Alternativa 4"
              onBlur={() => setFieldTouched('alternativa4')}
            />
            {touched.alternativa4 && errors.alternativa4 &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.alternativa4}</Text>
            }
             <TextInput style={styles.input}
              value={values.resposta}
              onChangeText={handleChange('resposta')}
              placeholder="Resposta"
              onBlur={() => setFieldTouched('resposta')}
            />
            {touched.resposta && errors.resposta &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.resposta}</Text>
            }
             <TextInput style={styles.input}
              value={values.pontos}
              onChangeText={handleChange('pontos')}
              placeholder="Pontos"
              onBlur={() => setFieldTouched('pontos')}
            />
            {touched.pontos && errors.pontos &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.pontos}</Text>
            }
           
           <Picker        style={styles.input}
   selectedValue={this.state.selected}
   onValueChange={(itemValue, itemIndex) => {setFieldValue('tipo', itemValue), this.setState({selected:itemValue})}}>
  <Picker.Item   label="Dragon Ball" value="DRAGONBALL" key={0} />
  <Picker.Item   label="Dragon Ball Z" value="DRAGONBALLZ" key={1}/>
  <Picker.Item   label="Dragon Ball GT" value="DRAGONBALLGT" key={2}/>
  <Picker.Item   label="Dragon Ball Super" value="DRAGONBALLSUPER" key={3}/>
</Picker>

            <TextInput style={styles.input}
              value={values.episodio}
              onChangeText={handleChange('episodio')}
              placeholder="Episódio"
              onBlur={() => setFieldTouched('episodio')}
            />
            {touched.episodio && errors.episodio &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.episodio}</Text>
            }
            <Picker   style={styles.input}  selectedValue={this.state.selected2}
  onValueChange={(itemValue, itemIndex) => {setFieldValue('esfera', itemValue), this.setState({selected2:itemValue})}}>
  <Picker.Item   label="1 estrela" value="1" key={0} />
  <Picker.Item   label="2 estrelas" value="2" key={1}/>
  <Picker.Item   label="3 estrelas" value="3" key={2}/>
  <Picker.Item   label="4 estrelas" value="4" key={3}/>
  <Picker.Item   label="5 estrelas" value="5" key={4}/>
  <Picker.Item   label="6 estrelas" value="6" key={5}/>
  <Picker.Item   label="7 estrelas" value="7" key={6}/>
</Picker>
            <Button
              title='Cadastrar'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </Fragment>
        )}
      </Formik>
      </ScrollView >

  );
}
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: "#000000"
          },
  
  content: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      padding: 30 
  },
  
  input: {
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      height:44,
      paddingHorizontal: 15,
      alignSelf: "stretch",
      marginTop:30,
      backgroundColor:"#FFF"
  },
  button: {
      height: 44,
      alignSelf: "stretch",
      marginTop: 10,
      backgroundColor: "#4BB0EE",
      borderRadius: 5,
      justifyContent: "center",
      alignItems:"center"
  },
  buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
  },
  cadastrarUsuario: {
      color:"#F78100",
      textAlign: "right",
      fontSize: 16,
      fontWeight: "bold",
      padding:15
  },

  butao: {
    paddingTop:15,
    marginTop:30,
    height:150
  },

  bota:{
    height:150
  },

  item:{
    backgroundColor:"#FFF",
    paddingHorizontal: 45,

  }
});


