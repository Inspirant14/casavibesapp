// components/ActiviteList.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { otherActivites } from '../constants/data/restaurants';

export const ActiviteList: React.FC = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState<string[]>([]);

  const handlePress = (id: string) => {
    router.push(`../activites/${id}/details`);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const formatDateHeure = (a: typeof otherActivites[0]) =>
    a.dateDebut === a.dateFin
      ? `${a.dateDebut} de ${a.heureDebut} à ${a.heureFin}`
      : `${a.dateDebut} - ${a.dateFin} de ${a.heureDebut} à ${a.heureFin}`;

  return (
    <FlatList
      data={otherActivites}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        const isFav = favorites.includes(item.id);
        return (
          <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.dateHeure}>{formatDateHeure(item)}</Text>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.description}>{item.description}</Text>
              {item.tarif && <Text style={styles.tarif}>Tarif : {item.tarif}</Text>}
              {item.ageMinimum !== undefined && (
                <Text style={styles.ageMin}>Âge min : {item.ageMinimum}</Text>
              )}
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteIcon}>
              <Ionicons
                name={isFav ? 'heart' : 'heart-outline'}
                size={24}
                color={isFav ? 'red' : '#666'}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        );
      }}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
  },
  image: { width: 100, height: 100, borderRadius: 10 },
  textBox: { flex: 1, marginLeft: 10 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  dateHeure: { fontSize: 13, color: '#444', marginBottom: 4 },
  location: { color: '#666', fontSize: 14, marginBottom: 4 },
  description: { fontSize: 12, color: '#666' },
  tarif: { fontSize: 12, color: '#444', marginTop: 4, fontWeight: '600' },
  ageMin: { fontSize: 12, color: '#444', marginTop: 2 },
  favoriteIcon: { padding: 8 },
});