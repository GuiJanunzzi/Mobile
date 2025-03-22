import { Image } from "expo-image";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "react-native-vector-icons"

export default function TelaDetalhes({route,navigation}){
    const dados = route.params.item
    console.log(dados)
    return(
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={styles.container}
        >
            <SafeAreaView>
                <View style={{flexDirection:"row"}}>
                    <Ionicons 
                    name="chevron-back" 
                    size={40} 
                    color="white" 
                    onPress={()=>navigation.goBack()}/>
                    <Text style={{fontSize:30,color:'white'}}>Detalhes</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        style={{flex:1}}
                        source={{uri:dados.images.original.url}}
                    />
                </View>

                <View>
                    <Text style={{fontSize:20, color:"white"}}>{dados.title}</Text>
                    <Ionicons name="globe" size={40} color="white"/>
                </View>
            </SafeAreaView>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageContainer:{
        width:"100%",
        height:"50%"
    }
})
