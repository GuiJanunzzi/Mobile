import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native';
import MapView,{Marker,Polyline} from 'react-native-maps';


//Função para converter graus em radianos 
function deg2rad(deg){
  return deg*(Math.PI/180)
}

//Cálculo de distência entre dois pontos
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2){
  const R = 6371 //Raio médio da terra em KM
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a = 
    Math.sin(dLat/2)*Math.sin(dLat/2)+
    Math.cos(deg2rad(lat1))*
    Math.cos(deg2rad(lat2))*
    Math.sin(dLon/2)*
    Math.sin(dLon/2);
  const c = 2* Math.atan2(Math.sqrt(a),Math.sqrt(1-a))
  return R*c
}


export default function App() {
  //Array de marcadores (cada item é {latitude,longitude})
  const[markers,setMarkers]=useState([])
  //Distância calculada em km
  const[distance,setDistance]=useState(null)

  //Função que será chamado quando o usuário tocar no mapa
  const handleMapPress = (event)=>{
    const{latitude,longitude}=event.nativeEvent.coordinate;

    //Condidição para alertar que há somente dois marcadores
    if(markers.length>=3){
      Alert.alert("Limite de marcadores",
        "Clique em limpar para realizar um novo cálculo")
      return
    }

    //Adiciona novo marcador
    const newMarkers = [...markers,{latitude,longitude}]
    setMarkers(newMarkers)

    //Se for o segundo marcador, ocorrerá o cálculo da distância.
    if(newMarkers.length===2){
      const dist = getDistanceFromLatLonInKm(
        newMarkers[0].latitude,
        newMarkers[0].longitude,
        newMarkers[1].latitude,
        newMarkers[1].longitude
      )
      setDistance(dist.toFixed(2))
    }
    if(newMarkers.length===3){
      const diste = getDistanceFromLatLonInKm(
        newMarkers[1].latitude,
        newMarkers[1].longitude,
        newMarkers[2].latitude,
        newMarkers[2].longitude
      )
      setDistance(diste.toFixed(2))
    }
  }

  //Função para limpar os marcadores e a distância
  const handleClear = () =>{
    setMarkers([])
    setDistance(null)
  }

  //Função para atualizar posição do marcador arrastado
  const handleDragEnd = (index,event)=>{
    const{latitude,longitude} = event.nativeEvent.coordinate;
    const newMarkers = [...markers]
    newMarkers[index] = {latitude,longitude}
    setMarkers(newMarkers)

    if(newMarkers.length===2){
      const dist = getDistanceFromLatLonInKm(
        newMarkers[0].latitude,
        newMarkers[0].longitude,
        newMarkers[1].latitude,
        newMarkers[1].longitude
      )
      setDistance(dist.toFixed(2))
    }
    if(newMarkers.length===3){
      const diste = getDistanceFromLatLonInKm(
        newMarkers[1].latitude,
        newMarkers[1].longitude,
        newMarkers[2].latitude,
        newMarkers[2].longitude
      )
      setDistance(diste.toFixed(2))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        {distance?<Text style={{color:'white'}}>Distância calculada:{distance} KM</Text>:(
          <Text style={{color:'white'}}>Incluar dois marcadores para realização do cálculo</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
        
      </View>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude:-23.5505,
          longitude:-46.6333,
          latitudeDelta:0.05,
          longitudeDelta:0.05
        }}        
      >
        {/* Renderiza uma linha entre os dois marcadores */}
        {markers.length===2&&(
          <Polyline 
            coordinates={markers} 
            strokeColor='blue' 
            strokeWidth={3}/>
        )}

        {/* Renderiza cada marcador que está no array*/}
        {markers.map((m,index)=>(
          <Marker 
            key={index}
            coordinate={m}
            pinColor={index===0?'blue':'red'}
            draggable
            onDragEnd={(e)=>handleDragEnd(index,e)}
          />
        ))}
       </MapView>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    flex:1
  },
  infoBox:{
    position:'absolute',
    top:40,
    left:20,
    right:20,
    backgroundColor:"#000",
    zIndex:1,
    borderRadius:15,
    alignItems:'center'

  },button:{
    backgroundColor:'blue',
    alignSelf:"center",
    paddingHorizontal:20,
    paddingVertical:8,
    borderRadius:10,
    textAlign:'center',
    marginTop:10
  },
  buttonText:{
    color:'white'
  }
});
