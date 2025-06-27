import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { topActivites, otherActivites, Activite } from '@/constants/data/restaurants';
import { Carte } from '@/components/Carte';
import { styles } from '@/constants/detailsColor';

export default function ActiviteDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const allActivites: Activite[] = [...topActivites, ...otherActivites];
  const activite = allActivites.find(a => a.id === id);

  if (!activite) {
    return (
      <View style={styles.center}>
        <Text>Activité introuvable.</Text>
      </View>
    );
  }

  const { height } = Dimensions.get('window');
  const IMAGE_HEIGHT = height * 0.4;

  const formatDateHeure = () =>
    activite.dateDebut === activite.dateFin
      ? `${activite.dateDebut} de ${activite.heureDebut} à ${activite.heureFin}`
      : `${activite.dateDebut} - ${activite.dateFin} de ${activite.heureDebut} à ${activite.heureFin}`;

  return (
    <View style={styles.container}>
      <ScrollView>
      <ImageBackground
        source={activite.image}
        style={{ margin: 10, width: 390, overflow: 'hidden', borderRadius: 20, height: IMAGE_HEIGHT }}
      >
        <View style={styles.overlay} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Détails</Text>
          <TouchableOpacity onPress={() => alert('Enregistré !')} style={styles.iconButton}>
            <Ionicons name="heart" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>{activite.title}</Text>

        <View style={styles.dateRow}>
          <Ionicons name="calendar-outline" size={20} color="#666" style={{ marginRight: 6 }} />
          <Text style={styles.dateText}>{formatDateHeure()}</Text>
        </View>

        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={20} color="rgb(255,115,0)" style={{ marginRight: 6 }} />
          <Text style={styles.locationText}>{activite.location}</Text>
        </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{activite.description}</Text>

        {activite.tarif && (
          <>
            <Text style={styles.sectionTitle}>Tarif</Text>
            <Text style={styles.description}>{activite.tarif}</Text>
          </>
        )}

        {activite.ageMinimum !== undefined && (
          <>
            <Text style={styles.sectionTitle}>Âge minimum</Text>
            <Text style={styles.description}>{activite.ageMinimum} ans</Text>
          </>
        )}
      </ScrollView>
      <Carte/>
      </ScrollView>

      <TouchableOpacity
        style={styles.reserveButton}
        onPress={() => router.push(`/activites/${id}/reserve`)}
      >
        <Text style={styles.reserveButtonText}>Réservation</Text>
      </TouchableOpacity>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)' },
//   header: {
//     position: 'absolute',
//     top: 40,
//     left: 16,
//     right: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   iconButton: { padding: 8, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 20 },
//   headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   content: { flex: 1, padding: 16 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
//   dateRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
//   dateText: { color: '#666', fontSize: 16 },
//   locationRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
//   locationText: { color: '#666', fontSize: 16 },
//   sectionTitle: { fontSize: 20, fontWeight: '600', marginBottom: 6 },
//   description: { fontSize: 16, color: '#444', lineHeight: 22 },
//   reserveButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   reserveButton: {
//     backgroundColor: '#00aaff',
//     padding: 16,
//     borderRadius: 40,
//     marginBottom: 20,
//     alignItems: 'center',
//     width: '95%',
//     margin: 10,
//     marginTop:5,
//     marginRight:0,
    
//   },
// });
