import { useFocusEffect } from '@react-navigation/native';
import React, { useRef, useState, useCallback } from 'react';
import { Animated, ScrollView, Text, View } from 'react-native';

import { HorizontalMixedSlider } from '../../components/HorizontalMixedSlider';
import { Carte } from '../../components/Carte';
import { styles } from '../../constants/HomeStyles';
import { Ionicons } from '@expo/vector-icons';

import {
  otherActivites,
  otherConcerts,
  otherRestaurants,
  topActivites,
  topConcerts,
  topRestaurants,
} from '../../constants/data/restaurants';

export default function HomeScreen() {
  const [selectedCategory] = useState<string | null>('Tout');

  const message = 'Bienvenue';
  const letters = message.split('');
  const animations = useRef(letters.map(() => new Animated.Value(0))).current;

  useFocusEffect(
    useCallback(() => {
      animations.forEach(anim => anim.setValue(0));

      const sequence = animations.map((anim, i) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 200,
          delay: i * 100,
          useNativeDriver: true,
        })
      );
      Animated.stagger(50, sequence).start();

      return () => {};
    }, [])
  );

  const allRestaurantsConcertsActivites = [...topRestaurants, ...topConcerts, ...topActivites];
  const allRestaurants = [...topRestaurants, ...otherRestaurants];
  const allConcerts = [...topConcerts, ...otherConcerts];
  const allActivites = [...topActivites, ...otherActivites];

  const filteredRestaurantsConcertsActivites = selectedCategory === 'Tout' ? allRestaurantsConcertsActivites : [];

  const points = allRestaurantsConcertsActivites.map((item) => ({
    id: item.id,
    latitude: item.latitude,
    longitude: item.longitude,
    title: item.title,
    description: item.description,
  }));

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 5, marginBottom: 10 }}>
        {letters.map((letter, index) => (
          <Animated.Text
            key={index}
            style={[
              styles.title,
              {
                opacity: animations[index],
                transform: [
                  {
                    translateY: animations[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [100, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            {letter}
          </Animated.Text>
        ))}
      </View>

      {selectedCategory === 'Tout' && (
        <>
          <HorizontalMixedSlider data={filteredRestaurantsConcertsActivites} />
          <Text style={styles.minititle}>Localisation</Text>
          <Carte points={points} />
        </>
      )}

      {/* tu peux remettre les autres sections plus tard si besoin */}

      <View
  style={{
    backgroundColor: 'white',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
  }}
>
  <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 6 }}>
    CasaVibes
  </Text>
  <Text style={{ fontSize: 14, color: '#666', fontStyle: 'italic', marginBottom: 8 }}>
    “Vivez Casablanca comme jamais”
  </Text>
  <Text style={{ fontSize: 14, color: '#333' }}>
    Site web:{' '}
    <Text
      style={{ color: '#007aff' }}
      onPress={() => {
        // Ouvrir le site
        window.open('https://casavibes.me', '_blank');
      }}
    >
      casavibes.me
    </Text>
  </Text>
  <Text style={{ fontSize: 14, color: '#333' }}>
    Email:{' '}
    <Text
      style={{ color: '#007aff' }}
      onPress={() => {
        window.open('mailto:contact@casavibes.me');
      }}
    >
      contact@casavibes.me
    </Text>
  </Text>
  <Text style={{ fontSize: 14, color: '#333' }}>
    Téléphone: +212 6 12 34 56 78
  </Text>
  <Text style={{ fontSize: 14, color: '#333', marginTop: 4 }}>
    Horaires: Lun-Dim 09h - 22h
  </Text>

  {/* Réseaux sociaux */}
  <View style={{ flexDirection: 'row', marginTop: 10 }}>
    <Ionicons
      name="logo-instagram"
      size={24}
      color="#e1306c"
      style={{ marginHorizontal: 8 }}
    />
    <Ionicons
      name="logo-facebook"
      size={24}
      color="#3b5998"
      style={{ marginHorizontal: 8 }}
    />
    <Ionicons
      name="logo-twitter"
      size={24}
      color="#1da1f2"
      style={{ marginHorizontal: 8 }}
    />
  </View>

  <Text style={{ fontSize: 12, color: '#999', marginTop: 10 }}>
    Made with ❤️ in Casablanca
  </Text>
  <Text style={{ fontSize: 12, color: '#999', marginTop: 4 }}>
    © 2025 CasaVibes. Tous droits réservés.
  </Text>
</View>

    </ScrollView>
  );
}
