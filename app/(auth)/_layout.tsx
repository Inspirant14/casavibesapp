// app/(auth)/_layout.tsx
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // 👈 cela enlève la barre de titre automatiquement
      }}
    />
  );
}
