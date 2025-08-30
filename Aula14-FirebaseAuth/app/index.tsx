import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';
import { useTheme } from '../src/context/ThemeContext';

export default function LoginScreen() {
  const {theme,colors} = useTheme()//Vai acessar os valores do tema
  // Estados para armazenar os valores digitados
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter()//Hook de navegação

  useEffect(()=>{
    const verificarusuarioLogado = async()=>{
      try{
        const usuarioSalvo = await AsyncStorage.getItem("@user")
        if(usuarioSalvo){
          router.push('/HomeScreen')//Redireciona para a tela HomeScreen(Usuario logado)
        }

      }catch(error){
        console.log("Erro ao verificar login", error)        
      }
    }
    verificarusuarioLogado()//chama a função
  },[])

  // Função para simular o envio do formulário
  const handleLogin= () => {
    if ( !email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }
    //Backend do login
    signInWithEmailAndPassword(auth, email, senha)
      .then(async(userCredential) => {
 
        const user = userCredential.user;
        await AsyncStorage.setItem('@user',JSON.stringify(user))
        router.push('/HomeScreen')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error: ", errorMessage);
        if(error.code==="auth/invalid-credential"){
          Alert.alert("Atenção","E-Mail ou Senha incorreto!")
        }
      });
  };

  const esqueceuSenha = () =>{
    if(!email){
      alert("Digite o e-mail para recuperar a senha")
      return
    }
    sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert("Email de recuperação enviado")
      })
      .catch((error)=>{
        console.log("Error",error.message)
        alert("Erro ao enviar e-mail de reset de senha")
      })

  }
  return (
    <View style={[styles.container,{backgroundColor:colors.background}]}>
      <Text style={[styles.titulo,{color:colors.text}]}>Realizar login</Text>


      {/* Campo Email */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão */}
      <TouchableOpacity style={[styles.botao,{backgroundColor:colors.button}]} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>

      <Link href="CadastrarScreen" style={{marginTop:20,color:colors.text,marginLeft:150,fontWeight:600}}>Cadastre-se</Link>
      
      <Text style={{marginTop:20,color:colors.text,marginLeft:130,fontWeight:600}} onPress={esqueceuSenha}>Esqueceu a senha</Text>
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  botao: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
