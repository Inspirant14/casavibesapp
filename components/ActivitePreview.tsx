
// components/ActivitePreview.tsx
import { styles } from '../constants/previewColor';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Activite } from '../constants/data/restaurants';
import { useFavorites } from '../hooks/useFavorites';


interface Props {
  activites: Activite[];
}

export const ActivitePreview: React.FC<Props> = ({ activites }) => {
  const router = useRouter();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const toggleFavorite = (id: string) => {
    favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
  };

  const formatDateHeure = (a: Activite) =>
    a.dateDebut === a.dateFin
      ? `${a.dateDebut} de ${a.heureDebut} à ${a.heureFin}`
      : `${a.dateDebut} - ${a.dateFin} de ${a.heureDebut} à ${a.heureFin}`;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Activités</Text>

      {activites.map(item => {
        const isFav = favorites.includes(item.id);
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => router.push(`../../activites/${item.id}/details`)}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              {/* <Text style={styles.dateHeure}>{formatDateHeure(item)}</Text> */}
              <View >
              
              <Text style={styles.location}><Ionicons name='location' size={12} ></Ionicons>{item.location}</Text>
              </View>
              {/* <Text style={styles.description}>{item.description}</Text> */}
              {/* {item.tarif && <Text style={styles.tarif}>Tarif : {item.tarif}</Text>}
              {item.ageMinimum !== undefined && <Text style={styles.ageMin}>Âge min : {item.ageMinimum}</Text>} */}
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
              <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={24} color={isFav ? 'red' : '#666'} />
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity onPress={() => router.push('/AllActivites')} style={styles.seeMore}>
        <Text style={styles.seeMoreText}>Voir plus</Text>
      </TouchableOpacity>
    </View>
  );
};

