// data/restaurants.ts
export type Type = 'Restaurant' | 'Concert' | 'Activités';
export type EventItem = Restaurant | Concert | Activite;


export interface Restaurant {
  id: string;
  title: string;
  location: string;
  rating: number;
  image: any;
  description: string;
  type: Type;  // ← nouveau champ
}

export const topRestaurants: Restaurant[] = [
  {
    id: '1',
    title: 'Le Gourmet',
    location: 'Centre‑ville, Casablanca',
    rating: 4.8,
    image: require('../../assets/images/tof.jpg'),
    description: 'Superbe ambiance, cuisine traditionnelle raffinée, service impeccable…',
    type: 'Restaurant',
  },
  {
    id: '2',
    title: 'Casa Délices',
    location: 'Maarif, Casablanca',
    rating: 4.6,
    image: require('../../assets/images/tof.jpg'),
    description: 'Ambiance moderne, saveurs variées, et personnel attentionné.',
    type: 'Restaurant',
  },
  {
    id: '3',
    title: 'Le Patio',
    location: 'Anfa, Casablanca',
    rating: 4.9,
    image: require('../../assets/images/tof.jpg'),
    description: 'Cadre chic, plats revisités, parfait pour un repas en amoureux.',
    type: 'Restaurant',
  },
];

export const otherRestaurants: Restaurant[] = [
  {
    id: '4',
    title: 'Bistro Zen',
    location: 'Maarif, Casablanca',
    rating: 4.4,
    image: require('../../assets/images/tof.jpg'),
    description: 'Cuisine fusion, déco cosy et ambiance feutrée.',
    type: 'Restaurant',
  },
  {
    id: '5',
    title: 'Le Marché',
    location: 'Gauthier, Casablanca',
    rating: 4.5,
    image: require('../../assets/images/tof.jpg'),
    description: 'Variété internationale, parfait pour groupes.',
    type: 'Restaurant',
  },
  // ... mêmes autres items
];



export interface EventBase {
  id: string;
  title: string;
  location: string;
  rating: number;
  image: any;
  description: string;
  type: Type;
}

export interface Concert extends EventBase {
  type: 'Concert';
  dateDebut: string;  // ex: '2025-07-01'
  dateFin: string;    // ex: '2025-07-03'
  heureDebut: string; // ex: '19:00'
  heureFin: string;   // ex: '23:00'
  artistes?: string[]; // artistes principaux
}

export interface Activite extends EventBase {
  type: 'Activités';
  dateDebut: string;
  dateFin: string;
  heureDebut: string;
  heureFin: string;
  tarif?: string;
  ageMinimum?: number;
}

// Top Concerts
export const topConcerts: Concert[] = [
  {
    id: 'c1',
    title: 'Festival Jazz Casablanca',
    location: 'Parc de la Ligue Arabe, Casablanca',
    rating: 4.9,
    image: require('../../assets/images/tof.jpg'),
    description: 'Un festival incontournable pour les amoureux du jazz.',
    type: 'Concert',
    dateDebut: '2025-07-01',
    dateFin: '2025-07-03',
    heureDebut: '19:00',
    heureFin: '23:00',
    artistes: ['Jazz Band A', 'Saxophone Star'],
  },
  {
    id: 'c2',
    title: 'Rock Night',
    location: 'Stade Mohammed V, Casablanca',
    rating: 4.7,
    image: require('../../assets/images/tof.jpg'),
    description: 'Soirée rock avec plusieurs groupes locaux.',
    type: 'Concert',
    dateDebut: '2025-08-15',
    dateFin: '2025-08-15',
    heureDebut: '20:00',
    heureFin: '01:00',
    artistes: ['Rockers United', 'The Loud'],
  },
  {
    id: 'c3',
    title: 'Concert Classique au Théâtre',
    location: 'Théâtre Royal, Casablanca',
    rating: 4.8,
    image: require('../../assets/images/tof.jpg'),
    description: 'Une soirée de musique classique avec orchestre symphonique.',
    type: 'Concert',
    dateDebut: '2025-09-10',
    dateFin: '2025-09-10',
    heureDebut: '18:30',
    heureFin: '21:00',
    artistes: ['Orchestre Symphonique de Casablanca'],
  },
];

// Autres Concerts
export const otherConcerts: Concert[] = [
  {
    id: 'c4',
    title: 'Concert Pop Urbain',
    location: 'Centre Culturel, Casablanca',
    rating: 4.5,
    image: require('../../assets/images/tof.jpg'),
    description: 'Concert pop avec artistes émergents.',
    type: 'Concert',
    dateDebut: '2025-10-05',
    dateFin: '2025-10-05',
    heureDebut: '20:00',
    heureFin: '23:00',
    artistes: ['Pop Star X', 'DJ Mix'],
  },
  {
    id: 'c5',
    title: 'Soirée Electro',
    location: 'Club Neon, Casablanca',
    rating: 4.3,
    image: require('../../assets/images/tof.jpg'),
    description: 'Soirée electro jusqu\'au petit matin.',
    type: 'Concert',
    dateDebut: '2025-11-12',
    dateFin: '2025-11-12',
    heureDebut: '22:00',
    heureFin: '04:00',
    artistes: ['Electro Masters'],
  },
];

// Top Activités
export const topActivites: Activite[] = [
  {
    id: 'a1',
    title: 'Randonnée en Montagne',
    location: 'Atlas, Maroc',
    rating: 4.9,
    image: require('../../assets/images//tof.jpg'),
    description: 'Une aventure nature guidée pour tous les niveaux.',
    type: 'Activités',
    dateDebut: '2025-07-05',
    dateFin: '2025-07-05',
    heureDebut: '08:00',
    heureFin: '17:00',
    tarif: '200 MAD',
    ageMinimum: 12,
  },
  {
    id: 'a2',
    title: 'Atelier de Cuisine Marocaine',
    location: 'Casablanca Centre',
    rating: 4.8,
    image: require('../../assets/images//tof.jpg'),
    description: 'Apprenez à cuisiner les plats traditionnels marocains.',
    type: 'Activités',
    dateDebut: '2025-07-20',
    dateFin: '2025-07-20',
    heureDebut: '10:00',
    heureFin: '14:00',
    tarif: '350 MAD',
    ageMinimum: 10,
  },
  {
    id: 'a3',
    title: 'Yoga en Plein Air',
    location: 'Parc Lalla Meryem, Casablanca',
    rating: 4.7,
    image: require('../../assets/images//tof.jpg'),
    description: 'Séance de yoga matinale en plein air.',
    type: 'Activités',
    dateDebut: '2025-07-15',
    dateFin: '2025-07-15',
    heureDebut: '07:00',
    heureFin: '08:30',
    tarif: '150 MAD',
    ageMinimum: 0,
  },
];

// Autres Activités
export const otherActivites: Activite[] = [
  {
    id: 'a4',
    title: 'Cours de Danse Moderne',
    location: 'Centre Culturel, Casablanca',
    rating: 4.4,
    image: require('../../assets/images//tof.jpg'),
    description: 'Apprenez les bases de la danse moderne.',
    type: 'Activités',
    dateDebut: '2025-08-10',
    dateFin: '2025-08-10',
    heureDebut: '18:00',
    heureFin: '20:00',
    tarif: '250 MAD',
    ageMinimum: 8,
  },
  {
    id: 'a5',
    title: 'Atelier Photographie',
    location: 'Studio Photo, Casablanca',
    rating: 4.6,
    image: require('../../assets/images//tof.jpg'),
    description: 'Découvrez les techniques de base en photographie.',
    type: 'Activités',
    dateDebut: '2025-09-01',
    dateFin: '2025-09-01',
    heureDebut: '14:00',
    heureFin: '17:00',
    tarif: '300 MAD',
    ageMinimum: 12,
  },
];


export const allRestaurantsConcertsActivites = [...topRestaurants, ...topConcerts, ...topActivites];
  
  // const allNoRestaurants = [...topRestaurants, ...otherRestaurants];

  export const allRestaurants = [...topRestaurants, ...otherRestaurants];
  export const allConcerts = [...topConcerts, ...otherConcerts];
  export const allActivites = [...topActivites, ...otherActivites];


  

