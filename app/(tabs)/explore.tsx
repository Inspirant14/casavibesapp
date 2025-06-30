import { Categorie } from '../../components/Categorie';
import { HorizontalActiviteSlider } from '../../components/HorizontalActiviteSlider';
import { HorizontalConcertSlider } from '../../components/HorizontalConcertSlider';
import { SearchBar } from '../../components/SearchBar';
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { ActivitePreview } from '../../components/ActivitePreview';
import { ConcertPreview } from '../../components/ConcertPreview';
import { HorizontalMixedSlider } from '../../components/HorizontalMixedSlider';
import { RestaurantPreview } from '../../components/RestaurantPreview';
import { HorizontalRestaurantSlider } from '../../components/HorizontalRestaurantSlider';
import { styles } from '../../constants/HomeStyles';
import {
  otherActivites,
  otherConcerts,
  otherRestaurants,
  topActivites,
  topConcerts,
  topRestaurants
} from '../../constants/data/restaurants';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Tout');
  
  const allRestaurantsConcertsActivites = [...topRestaurants, ...topConcerts, ...topActivites];

  const allRestaurants = [...topRestaurants, ...otherRestaurants];
  const allConcerts = [...topConcerts, ...otherConcerts];
  const allActivites = [...topActivites, ...otherActivites];
  const [searchTerm, setSearchTerm] = useState('');

const lowerSearch = searchTerm.toLowerCase();

const matchesSearch = (item: { title: string; }) =>
  item.title.toLowerCase().includes(lowerSearch) 
  // item.location.toLowerCase().includes(lowerSearch);

const filteredRestaurants = selectedCategory === 'Restaurant'
  ? allRestaurants.filter(matchesSearch)
  : [];

const filteredConcerts = selectedCategory === 'Concert'
  ? allConcerts.filter(matchesSearch)
  : [];

const filteredActivites = selectedCategory === 'Activités'
  ? allActivites.filter(matchesSearch)
  : [];

const filteredRestaurantsConcertsActivites = selectedCategory === 'Tout'
  ? allRestaurantsConcertsActivites.filter(matchesSearch)
  : [];

const filteredNoRestaurants = selectedCategory === 'Tout'
  ? allRestaurants.filter(matchesSearch)
  : [];

const filteredNoConcerts = selectedCategory === 'Tout'
  ? allConcerts.filter(matchesSearch)
  : [];

const filteredNoActivites = selectedCategory === 'Tout'
  ? allActivites.filter(matchesSearch)
  : [];



  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 16 }}>
        Profitez de nos offres
      </Text>
      <SearchBar onSearch={setSearchTerm} />

      <Categorie onFilter={setSelectedCategory} />
      <Text style={styles.minititle}>Evenement à la une</Text>
     

      {selectedCategory === 'Tout' && (
        <>
          <HorizontalMixedSlider data={filteredRestaurantsConcertsActivites} />
           {/* <Text style={{ fontSize: 18, fontWeight: '600', margin: 16 }}>
              Localisation
           </Text>
           <Carte /> */}
          <RestaurantPreview restaurants={filteredNoRestaurants.slice(0, 3)} />
          <ConcertPreview concerts={filteredNoConcerts.slice(0, 3)} />
          <ActivitePreview activites={filteredNoActivites.slice(0, 3)} />
        </>
      )}


      {selectedCategory === 'Restaurant' && (
        <>
          <HorizontalRestaurantSlider data={filteredRestaurants} />
          <RestaurantPreview restaurants={filteredRestaurants} />
        </>
      )}

      {selectedCategory === 'Concert' && (
        <><HorizontalConcertSlider data={filteredConcerts} />
          <ConcertPreview concerts={filteredConcerts} /></>
        
      )}

      {selectedCategory === 'Activités' && (
        <>
          <HorizontalActiviteSlider data={filteredActivites} />
          <ActivitePreview activites={filteredActivites} />
        </>
        
      )}

      
      
    </ScrollView>
  );
}
