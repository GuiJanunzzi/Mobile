import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import {Ionicons} from 'react-native-vector-icons';

let textoPesquisado = ""
export default function Cabecalho({navigation,text,setText,solicitarDados}){
    return(
      <View>
        <SafeAreaView style={styles.cabecalho}>
          <Ionicons
            name="chevron-back"
            size={40}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Digite sua pesquisa'
            autoCapitalize='none'
            autoCorrect={false}
            value={text}
            onChangeText={(value) => setText(value)}
            onSubmitEditing={() => {
              solicitarDados(text)
              textoPesquisado = text
            }}
          />
          <Ionicons
            name="search"
            size={40}
            color='white'
            onPress={() => {
              solicitarDados(text)
              textoPesquisado = text
            }}
          />
        </SafeAreaView>
        {textoPesquisado!==""?<Text style={styles.white}>Mostrando resultado para: <Text style={styles.whiteBold}>{textoPesquisado}</Text></Text>:null}
      </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 30
    },
    textInput: {
      flex: 1,
      backgroundColor: "white",
      borderRadius: 10,
      paddingLeft: 10
    },
    white:{
      fontSize:16,
      color:"white",
      marginLeft:10,
      marginTop:15
    },
    whiteBold:{
      fontSize:16,
      color:"white",
      fontWeight: "bold"
    }
  });