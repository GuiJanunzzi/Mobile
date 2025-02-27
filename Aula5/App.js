import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import { useState } from 'react';
import ListarAlunos from './src/Components/ListarAlunos';

export default function App() {
  function clicado(){
    console.log("botão clicado")
  }

  const[numero,configNumero]=useState(3)
  
  const[nome,setNome] = useState("")
  const[sobrenome,setSobrenome] = useState("")  
  const[idade,setIdade] = useState("")
  
  return (
    <>
      <Text style={styles.txtG}>Aula Mobile</Text>
      <Text style={styles.txtG}>Aula 05 26/02</Text>
      <Text style={styles.txtG}>{numero}</Text>
      <Button title='Incrementar' onPress={()=>configNumero(numero+1)}/>
      <Button title='Decrementar' onPress={()=>configNumero(numero-1)}/>
      <ListarAlunos/>

      <TextInput
        style={{fontSize:20}}
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={(value)=>setNome(value)}
      />

      <TextInput
        style={{fontSize:20}}
        placeholder='Digite seu sobrenome'
        value={sobrenome}
        onChangeText={(value)=>setSobrenome(value)}
      />

      <TextInput
        style={{fontSize:20}}
        placeholder='Digite sua idade'
        value={idade}
        onChangeText={(value)=>setIdade(value)}
      />
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtG:{
    fontSize:40
  }
});
