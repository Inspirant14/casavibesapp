import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';


const categories = [
  { id: '1', title: 'Restaurant' },
  { id: '2', title: 'Concert' },
  { id: '3', title: 'Activités' },
];

export function Categorie (){
    return(
// {/* Catégories */}
      <View style={styles.categories}>
        {categories.map(cat => (
          <TouchableOpacity key={cat.id} style={styles.categoryBox}>
            <Text style={styles.categoryText}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      )
}

const styles = StyleSheet.create({

    categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

})
