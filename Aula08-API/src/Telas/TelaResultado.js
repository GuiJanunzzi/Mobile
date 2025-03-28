import { FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Keyboard} from 'react-native';
import { Image } from 'expo-image'; 
import { useState } from 'react';
import TextoInfo from '../Components/TextoInfo';
import Loading from '../Components/Loading';
import Error from '../Components/Error';

import Cabecalho from '../Components/Cabecalho';
import axios from 'axios';
import API_KEY from "../API_KEY"
const{width,height}=Dimensions.get("window")
const IMAGE_WIDTH = width

export default function TelaResultado({route,navigation}) {
  const escolha = route.params.escolha
  const link = `http://api.giphy.com/v1/${escolha}/search` 

  const[textoPesquisa, setTextPesquisa] = useState("")
  const[dados, setDados] = useState([])
  const[showMessage, setShowMessage] = useState(true)
  const[isLoading, setIsLoading] = useState(false)
  const[showError, setShowError] = useState(false)
  
  
  const solicitarDados = async (textPesquisa)  => {
    Keyboard.dismiss()
    setIsLoading(true)
    try{
      const resultado = await axios.get(link,{
        params:{
          api_key:API_KEY,
          q:textPesquisa,
        }
      })
      setShowMessage(false)
      setIsLoading(false)
      setDados(resultado.data.data)
    }catch(err){
      console.log(err)
      setShowMessage(false)
      setIsLoading(false)
      setShowError(true)
    }
    
  }

  return (
    <ImageBackground
      source={require("../../assets/BG.png")}
      style={styles.container}
    >
      <Cabecalho
        navigation={navigation}
        text={textoPesquisa}
        setText = {setTextPesquisa}
        solicitarDados={solicitarDados}
      />
      
      <FlatList
        data={dados}
        numColumns={2}
        ListHeaderComponent={
          <>
            <TextoInfo showMessage={showMessage}/>
            <Loading isLoading={isLoading}/>
            <Error showError={showError}/>
          </>
        }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate("TelaDetalhes",{item:item})}>
              <Image
                style={styles.image}
                source={{ uri: item.images.preview_gif.url }} />
            </TouchableOpacity>
          )
        }}
      />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: IMAGE_WIDTH/2.3,
    height: IMAGE_WIDTH/2.3,
    margin:IMAGE_WIDTH*0.03,
    borderRadius: 10
  },
  input: {
    flex:1,
    backgroundColor:"white",
    borderRadius:10
  }
});
