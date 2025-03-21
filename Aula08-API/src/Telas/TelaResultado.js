import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import {Ionicons} from 'react-native-vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import axios from 'axios';
import API_KEY from "../API_KEY"
import FastImage from 'react-native-fast-image'

export default function TelaResultado({route,navigation}) {
  const escolha = route.params.escolha
  const link = `https://api.giphy.com/v1/${escolha}/search` 
  const[textoPesquisa, setTextPesquisa] = useState("")
  const[dados, setDados] = useState([])
  
  
  const solicitarDados = async (textPesquisa)  => {
    try{
      const resultado = await axios.get(link,{
        params:{
          api_key:API_KEY,
          q:textPesquisa,
          lang:"pt"
        }
      })
      //console.log(resultado.data.data)
      setDados(resultado.data.data)

    }catch(err){
      console.log(err)
    }
    
  }

  return (
    <ImageBackground
      source={require("../../assets/BG.png")}
      style={styles.container}
    >
      <SafeAreaView style={{flexDirection:'row', justifyContent:"space-between"}}>
        <Ionicons 
        name="chevron-back" 
        size={40} 
        color="white"
        onPress={()=> navigation.goBack()}
        />
        <TextInput 
        placeholder='Digite sua pesquisa' 
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={textoPesquisa}
        onChangeText={(value)=>setTextPesquisa(value)}
        />
        <Ionicons name="search" size={40} color="white" onPress={()=>solicitarDados(textoPesquisa)}/>
      </SafeAreaView>
      
      <FlatList 
        data={dados}
        renderItem={({item})=>{
          console.log(item.images)
          return(
            <Image 
              style={{width:250,height:250}}
              source={{uri:item.images.original.url}}
              resizeMode={FastImage.resizeMode.contain}
            />
          )
        }}
      />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  input: {
    flex:1,
    backgroundColor:"white",
    borderRadius:10
  }
});
