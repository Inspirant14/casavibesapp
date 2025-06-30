// app/profile.tsx
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  const [name, setName] = useState('Younes Belmadani');
  const [phone, setPhone] = useState('+212 600-123456');
  const [email, setEmail] = useState('test@example.com');
  const [editingField, setEditingField] = useState<string | null>(null);
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const handleSave = () => {
    setEditingField(null);
    Alert.alert('Succès', 'Profil mis à jour !');
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled) {
      setAvatarUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Contenu principal */}
      <View style={{ flex: 1 }}>
        <Text style={styles.heading}>Profil</Text>

        <TouchableOpacity onPress={pickImage}>
          <Image
            source={
              avatarUri
                ? { uri: avatarUri }
                : require('../../assets/images/tof.jpg')
            }
            style={styles.avatar}
          />
          <Text style={styles.changePhoto}>Modifier la photo</Text>
        </TouchableOpacity>

        {[{ label: 'Nom', value: name, setter: setName, type: 'name' },
          { label: 'Téléphone', value: phone, setter: setPhone, type: 'phone', keyboard: 'phone-pad' },
          { label: 'Email', value: email, setter: setEmail, type: 'email', keyboard: 'email-address' }
        ].map(field => (
          <View key={field.type} style={styles.row}>
            <Text style={styles.label}>{field.label} :</Text>
            {editingField === field.type ? (
              <TextInput
                style={styles.input}
                value={field.value}
                onChangeText={field.setter}
                keyboardType={field.keyboard as any}
              />
            ) : (
              <Text style={styles.value}>{field.value}</Text>
            )}
            <TouchableOpacity onPress={() => setEditingField(field.type)}>
              <Ionicons name="pencil" size={20} color="rgb(204, 96, 7)" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Footer avec boutons */}
      <View style={styles.footer}>
        {editingField && (
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Enregistrer</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => router.push('/(tabs)')}
        >
          <Text style={styles.homeButtonText}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity
  style={[styles.homeButton, { backgroundColor: '#cc0000', marginTop: 5 }]}
  onPress={() => {
    // Ici tu "déconnectes" en resetant la variable locale
    // et tu rediriges
    router.replace('/(auth)/login');
  }}
>
  <Text style={styles.homeButtonText}>Se déconnecter</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#D7DCE1', // 👉 fond gris clair
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
  },
  changePhoto: {
    color: 'rgb(204, 96, 7)',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  label: {
    width: 90,
    fontWeight: 'bold',
    
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(252, 117, 7, 1)',
    paddingVertical: 2,
    fontSize: 16,
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  saveButton: {
    backgroundColor: '#00aa88',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  homeButton: {
    backgroundColor: '#00aaff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
