// app/(tabs)/_layout.tsx — ou ton fichier Layout actuel
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import LogoHeader from '../../components/LogoHeader';

export default function Layout() {
  return (
    <>
      <LogoHeader />

      <Tabs
        screenOptions={{
          headerShown: false,
          sceneStyle: { backgroundColor: '#D7DCE1' },  // ✅ fond des écrans
          tabBarStyle: { backgroundColor: 'white' },   // ✅ fond de la barre d’onglets
          tabBarActiveTintColor: 'rgb(255,115,0)',
          
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Reservation',
            tabBarIcon: ({ color }) => (
              <Ionicons name="calendar" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favoris"
          options={{
            title: 'Favoris',
            tabBarIcon: ({ color }) => (
              <Ionicons name="heart" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
