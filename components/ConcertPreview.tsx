// components/ConcertPreview.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFavorites } from '../hooks/useFavorites';
import { Concert } from '../constants/data/restaurants';
import { styles } from '../constants/previewColor';

interface Props {
  concerts: Concert[];
}

export const ConcertPreview: React.FC<Props> = ({ concerts }) => {
  const router = useRouter();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const toggleFavorite = (id: string) => {
    favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
  };

  const formatDateHeure = (c: Concert) =>
    c.dateDebut === c.dateFin
      ? `${c.dateDebut} de ${c.heureDebut} à ${c.heureFin}`
      : `${c.dateDebut} - ${c.dateFin} de ${c.heureDebut} à ${c.heureFin}`;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Concerts</Text>

      {concerts.map(item => {
        const isFav = favorites.includes(item.id);
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => router.push(`../../concerts/${item.id}/details`)}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              {/* <Text style={styles.dateHeure}>{formatDateHeure(item)}</Text> */}
              <Text style={styles.location}> <Ionicons name='location'></Ionicons> {item.location}</Text>
              <Text style={styles.artistes}>Artistes : {item.artistes?.join(', ') || 'Non spécifié'}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
              <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={24} color={isFav ? 'red' : '#666'} />
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity onPress={() => router.push('/AllConcerts')} style={styles.seeMore}>
        <Text style={styles.seeMoreText}>Voir plus</Text>
      </TouchableOpacity>
    </View>
  );
};

