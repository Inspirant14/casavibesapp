
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { Redirect, router } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { users, User } from "../../constants/users";

export default function RegisterScreen() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sexe, setSexe] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [created, setCreated] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    const existing = users.find((u) => u.email === email);
    if (existing) {
      setError("Cet email est déjà utilisé.");
      return;
    }

    users.push({
      nom,
      prenom,
      sexe,
      age,
      email,
      password,
    } as User);

    setCreated(true);
  };

  if (created) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Image source={require("../../assets/images/logo.jpg")} style={styles.logo} />
      <Text style={styles.title}>Inscription</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Nom</Text>
          <TextInput style={styles.input} value={nom} onChangeText={setNom} />
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Prénom</Text>
          <TextInput style={styles.input} value={prenom} onChangeText={setPrenom} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Sexe</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={sexe}
              onValueChange={(itemValue) => setSexe(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Sélectionner" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Femelle" value="femelle" />
            </Picker>
          </View>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Âge</Text>
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.fullWidth}>
        <Text style={styles.label}>Adresse mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Confirmer le mot de passe</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.linkText}>
          Vous avez déjà un compte ? <Text style={styles.link}>Connectez-vous</Text>
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF7F0",
    padding: 20,
    paddingBottom: 0,
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0A1F44",
    marginBottom: 20,
  },
  label: {
    fontWeight: "500",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    backgroundColor: "#FEF6EF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#FEF6EF",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    width: "100%",
  },
  column: {
    flex: 1,
  },
  fullWidth: {
    width: "100%",
  },
  error: {
    color: "red",
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  button: {
    backgroundColor: "#0A1F44",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  linkText: {
    marginTop: 15,
    fontSize: 14,
    color: "#333",
  },
  link: {
    color: "#0A1F44",
    fontWeight: "600",
  },
});
