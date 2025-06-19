// components/SearchBar.tsx
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export function SearchBar() {
  return (
    <TextInput
      placeholder="Rechercher..."
      style={styles.searchBar}
      underlineColorAndroid="transparent" // Désactive la bordure native sur Android
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    // backgroundColor: 'red',
    // width:'90%',
    margin:10,
    padding: 10,
    borderRadius: 20,
    marginBottom: 0,
    borderWidth: 1,            // 🟦 largeur de la bordure
    borderColor: '#ccc',       // 🟦 couleur de la bordure
  },
});
