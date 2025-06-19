import { Text, View } from 'react-native';
import { SearchBar } from '@/components/SearchBar';
import { Categorie } from '@/components/Categorie';
import { RestaurantList } from '@/components/RestaurantList';
import { styles } from '@/constants/HomeStyles';

export default function HomeScreen() {
  return (
    <View style={{ justifyContent: 'center' }}>
      <SearchBar/>
      <Categorie/>
      <Text style={styles.title} >RESTAURANTS</Text>
      <RestaurantList/>
      <Text>Bienvenue sur Explore !</Text>
    </View>
  );
}
