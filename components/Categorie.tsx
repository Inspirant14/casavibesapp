import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const categories = [
  { id: '1', title: 'Restaurant' },
  { id: '2', title: 'Concert' },
  { id: '3', title: 'Activités' },
];

export function Categorie() {
  return (
    <View style={styles.container}>
      {categories.map(cat => (
        <TouchableOpacity key={cat.id} style={styles.categoryBox}>
          <Text style={styles.categoryText}>{cat.title}</Text>
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
    borderRadius: 12,
    // backgroundColor: 'green',
    width: '100%',
  },
  categoryBox: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 2,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});

