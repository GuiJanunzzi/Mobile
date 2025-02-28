import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import { useState } from 'react';
import Renderinfo from './components/Renderinfo';

export default function App() {
  const[nomeAluno, setNomeAluno] =useState("")
  const[emailAluno, setEmailAluno]=useState("")
  const[enviar, setEnviar]=useState("")
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logofiap.png')}
        style={styles.imagem}
      />
      <TextInput 
        style={styles.input}
        placeholder='Digite seu nome'
        maxLength={10}
        keyboardType='default'
        value={nomeAluno}
        onChangeText={(valor)=>setNomeAluno(valor)}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite seu e-mail'
        maxLength={30}
        keyboardType='email-address'
        value={emailAluno}
        onChangeText={(valor)=>setEmailAluno(valor)}
      />

      <Button title='Enviar 'onPress={()=>{setEnviar(nomeAluno + '\n' + emailAluno)}}/>
      <Button title='Enviar console'onPress={()=>console.log(nomeAluno,emailAluno)}/>

      <Text>{enviar}</Text>

      <Renderinfo nameAluno ={nomeAluno} eAluno={emailAluno}/>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap:5
  },
  imagem:{
    resizeMode:'center',
    width:200,
    height:250//opcional
  },
  input:{
    backgroundColor:'white',
    width:300,
    borderRadius:5,
    paddingLeft:10,
    borderWidth:2,
    borderColor:'#a069cc',
  }
});
