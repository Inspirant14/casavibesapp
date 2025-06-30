import { useFocusEffect } from '@react-navigation/native';
import React, { useRef, useState, useCallback } from 'react';
import { Animated, ScrollView, Text, View } from 'react-native';

import { HorizontalActiviteSlider } from '../../components/HorizontalActiviteSlider';
import { HorizontalConcertSlider } from '../../components/HorizontalConcertSlider';
import { HorizontalMixedSlider } from '../../components/HorizontalMixedSlider';
import { HorizontalRestaurantSlider } from '../../components/HorizontalRestaurantSlider';
import { ActivitePreview } from '../../components/ActivitePreview';
import { Carte } from '../../components/Carte';
import { ConcertPreview } from '../../components/ConcertPreview';
import { RestaurantPreview } from '../../components/RestaurantPreview';
import { styles } from '../../constants/HomeStyles';

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

  // ➤ Déclenche l’animation à chaque fois qu’on entre sur la page
  useFocusEffect(
    useCallback(() => {
      // Réinitialise les valeurs
      animations.forEach(anim => anim.setValue(0));

      // Lance l’animation
      const sequence = animations.map((anim, i) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 200,
          delay: i * 100,
          useNativeDriver: true,
        })
      );
      Animated.stagger(50, sequence).start();

      return () => {}; // Nettoyage (optionnel ici)
    }, [])
  );

  const allRestaurantsConcertsActivites = [...topRestaurants, ...topConcerts, ...topActivites];
  const allRestaurants = [...topRestaurants, ...otherRestaurants];
  const allConcerts = [...topConcerts, ...otherConcerts];
  const allActivites = [...topActivites, ...otherActivites];

  const filteredRestaurantsConcertsActivites = selectedCategory === 'Tout' ? allRestaurantsConcertsActivites : [];
  const filteredNoRestaurants = selectedCategory === 'Tout' ? allRestaurants : [];
  const filteredNoConcerts = selectedCategory === 'Tout' ? allConcerts : [];
  const filteredNoActivites = selectedCategory === 'Tout' ? allActivites : [];

  const filteredRestaurants = selectedCategory === 'Restaurant' ? allRestaurants : [];
  const filteredConcerts = selectedCategory === 'Concert' ? allConcerts : [];
  const filteredActivites = selectedCategory === 'Activités' ? allActivites : [];

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 5, marginBottom:10, }}>
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

      {/* <Text style={styles.minititleleft}>A la une</Text> */}

      {selectedCategory === 'Tout' && (
        <>
          <HorizontalMixedSlider data={filteredRestaurantsConcertsActivites} />
          <Text style={styles.minititle}>Localisation</Text>
          <Carte />
          <RestaurantPreview restaurants={filteredNoRestaurants.slice(0, 3)} />
          <ConcertPreview concerts={filteredNoConcerts.slice(0, 3)} />
          <ActivitePreview activites={filteredNoActivites.slice(0, 3)} />
        </>
      )}

      {selectedCategory === 'Restaurant' && (
        <>
          <HorizontalRestaurantSlider data={filteredRestaurants} />
          <RestaurantPreview restaurants={filteredRestaurants.slice(0, 3)} />
        </>
      )}

      {selectedCategory === 'Concert' && (
        <>
          <HorizontalConcertSlider data={filteredConcerts} />
          <ConcertPreview concerts={filteredConcerts.slice(0, 3)} />
        </>
      )}

      {selectedCategory === 'Activités' && (
        <>
          <HorizontalActiviteSlider data={filteredActivites} />
          <ActivitePreview activites={filteredActivites.slice(0, 3)} />
        </>
      )}
    </ScrollView>
  );
}
