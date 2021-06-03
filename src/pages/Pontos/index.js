import React from 'react';

import { Feather } from '@expo/vector-icons';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { useNavigation}  from '@react-navigation/native';

//Importando o mapa
import MapView, { Marker } from 'react-native-maps';

export default function Pontos() {

   navigation = useNavigation();

  //função que retorna para a Home
  function abrirHome(){
    navigation.goBack();
  }

  //funcão que abre a tela de Detalhes
  function abrirDetalhes(){
    navigation.navigate('Detalhes');
  }


  return (
  <>
   <View style={styles.container}>
       
        <TouchableOpacity onPress={abrirHome}>
          <Feather name="arrow-left" size={20} color="#34cb79"/>
        </TouchableOpacity>

        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.description}>Encontre no mapa um ponto de coleta</Text>

        <View style={styles.mapContainer}>
           
            <MapView style={styles.map} initialRegion={{
              latitude: -23.407795179953624, 
              longitude: -46.85671379369661,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014
            }}>

            <Marker
            onPress={abrirDetalhes} 
            style={styles.mapMarker}
            coordinate={{
              latitude: -23.40417185427396,
              longitude:  -46.85585548686774              
            }}>
              
            <View style={styles.mapMarkerContainer}>
              <Image style={styles.mapMarkerImage} source={{uri: 'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg'}} />
              <Text style={styles.mapMarkerTitle}>Donos da Pizza</Text>
            </View>


            </Marker>  


            <Marker 
            onPress={abrirDetalhes} 
            style={styles.mapMarker}
            coordinate={{
              latitude: -23.40775579651802,
              longitude: -46.871004601560706              
            }}>
              
            <View style={styles.mapMarkerContainer}>
              <Image style={styles.mapMarkerImage} source={{uri: 'https://cdn.pixabay.com/photo/2017/02/09/16/48/brazilian-jiu-jitsu-2052829_960_720.jpg'}} />
              <Text style={styles.mapMarkerTitle}>Barão JJ</Text>
            </View>


            </Marker>  


            </MapView>
        </View>
   </View>

   <View style={styles.itemsContainer}>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <TouchableOpacity style={styles.item}>
             <Image width={42} height={42} source={require('../../assets/icones/baterias.png')}/>
             <Text style={styles.itemTitle}>Baterias</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
             <Image width={42} height={42} source={require('../../assets/icones/eletronicos.png')}/>
             <Text style={styles.itemTitle}>Eletrônicos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
             <Image width={42} height={42} source={require('../../assets/icones/lampadas.png')}/>
             <Text style={styles.itemTitle}>Lampadas</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.item}>
             <Image width={42} height={42} source={require('../../assets/icones/oleo.png')}/>
             <Text style={styles.itemTitle}>Óleo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
             <Image width={42} height={42} source={require('../../assets/icones/organicos.png')}/>
             <Text style={styles.itemTitle}>Orgânicos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
             <Image width={42} height={42} source={require('../../assets/icones/papeis-papelao.png')}/>
             <Text style={styles.itemTitle}>Papelão</Text>
          </TouchableOpacity>


          

     </ScrollView>

   </View>

  </>

  );
} // Fecha o componente de Pontos

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 80
    },

    title:{
      fontSize: 20,
      marginTop:24
    },

    description:{
      fontSize:16,
      marginTop:4,
      color: '#6c6c80',
    },

    mapContainer:{
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16,
    },

    map: {
      width: '100%',
      height: '100%',
  },

  itemsContainer:{
    flexDirection: 'row',
    marginTop:16,
    marginBottom:32

  },

  item:{
    backgroundColor: '#DCF9EB',
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',   
  },

  itemTitle:{
    textAlign:'center',
    fontSize:13
  },

  mapMarker:{
    width:90,
    height:80
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: '#34CB79',
    flexDirection: 'column',
    borderRadius: 8,   
    alignItems: 'center'
},

  mapMarkerImage:{
    width:90,
    height:45,
    resizeMode:'cover'
  },

  mapMarkerTitle:{
    flex: 1,
    //  fontFamily: 'Roboto_400Regular',
    color: '#FFF',
    fontSize: 10,
    lineHeight: 23,
  }




});