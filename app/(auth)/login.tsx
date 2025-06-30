
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
import { useRouter } from "expo-router";
import { users } from "../../constants/users";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const found = users.find((u) => u.email === email && u.password === password);
    if (found) {
      router.replace("/(tabs)");
    } else {
      setError("Identifiants incorrects.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../../assets/images/logo.jpg")} style={styles.logo} />
      <Text style={styles.title}>Connexion</Text>

      <Text style={styles.label}>Adresse mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Mot de passe</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Connexion</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(auth)/register")}>
        <Text style={styles.linkText}>
          Vous n’avez pas de compte ? <Text style={styles.link}>Créer un compte</Text>
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF7F0",
    padding: 20,
    paddingBottom: 50,
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
    alignSelf: "flex-start",
  },
  input: {
    backgroundColor: "#FEF6EF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
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
