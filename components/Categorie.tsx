import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const categories = [
  { id: '1', title: 'Tout' },
  { id: '2', title: 'Restaurant' },
  { id: '3', title: 'Concert' },
  { id: '4', title: 'Activités' },
];

export function Categorie({ onFilter }: { onFilter: (title: string) => void }) {
  const [active, setActive] = useState<string | null>('Tout');

  const handlePress = (title: string) => {
    setActive(title);
    onFilter(title); // Exécute le filtre dans le composant parent
  };

  return (
    <View style={styles.container}>
      {categories.map(cat => (
        <TouchableOpacity
          key={cat.id}
          style={[
            styles.categoryBox,
            active === cat.title && styles.activeCategory,
          ]}
          onPress={() => handlePress(cat.title)}
        >
          <Text
            style={[
              styles.categoryText,
              active === cat.title && styles.activeText,
            ]}
          >
            {cat.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
  },
  categoryBox: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
    marginHorizontal:5,
    
  },
  activeCategory: {
    backgroundColor: 'rgb(255, 115, 0)',
    
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  activeText: {
    color: '#fff',
  },
});
