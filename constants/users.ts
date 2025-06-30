// users.ts

export interface User {
  email: string;
  password: string;
}

export const users: User[] = [
  {
    email: "test@example.com",
    password: "password123",
  },
  // tu peux ajouter d'autres comptes si tu veux
];
