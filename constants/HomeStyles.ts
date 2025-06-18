
import { StyleSheet } from 'react-native';
// const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'gray',
    
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  
  
  categoryBox: {
    backgroundColor: '#ececec',
    padding: 15,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
  },
  carouselImage: {
    width: 10,
    height: 150,
    borderRadius: 15,
    marginRight: 10,
  },
  staticImage: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 15,
  },
});
