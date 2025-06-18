// import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, ScrollView } from 'react-native';
import { Carte } from '../../components/Carte';
import { RestaurantCard } from '../../components/RestaurantCard';
import { styles } from '../../constants/HomeStyles';
import { RestaurantPreview } from '../../components/RestaurantPreview';
import { SearchBar } from '@/components/searchBar';
import { Categorie } from '@/components/Categorie';
import { HorizontalRestaurantSlider } from '../../components/HorizontalRestaurantSlider';








export default function HomeScreen() {
  
  return (
    <ScrollView style={styles.container}>
      

      {/* Texte d'accueil */}
      <Text style={styles.title}>Que voulez-vous faire today ?</Text>
      <SearchBar/>
      <Categorie/>
      
    <HorizontalRestaurantSlider/>



      {/* Image fixe */}
      <Text style={styles.title} >Localisation</Text>
      <Carte />
      <RestaurantPreview/>
      <Image source={require('../../assets/images/tof.jpg')} style={styles.staticImage} />
      <Image source={require('../../assets/images/tof.jpg')} style={styles.staticImage} />
      <Image source={require('../../assets/images/tof.jpg')} style={styles.staticImage} />

    </ScrollView>
    
  );
}
