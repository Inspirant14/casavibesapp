import { StyleSheet, TextInput } from 'react-native';

{/* Barre de recherche */}
  export function SearchBar(){
    return(
        <TextInput placeholder="Rechercher..." style={styles.searchBar} />

    )
  }
  
  const styles= StyleSheet.create({
    searchBar: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: ,
  },
  })