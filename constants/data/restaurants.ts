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
  latitude: number;
  longitude: number;
  
}

// topRestaurants
export const topRestaurants: Restaurant[] = [
  {
    id: '1',
    title: 'Cabestant',
    location: 'Centre‑ville, Casablanca',
    rating: 4.8,
    image: require('../../assets/images/r1.jpg'),
    description: 'Superbe ambiance, cuisine traditionnelle raffinée, service impeccable…',
    type: 'Restaurant',
    latitude: 33.5902,
    longitude: -7.6110,
  },
  {
    id: '2',
    title: 'Yo TI TAM|TONY',
    location: 'Maarif, Casablanca',
    rating: 4.6,
    image: require('../../assets/images/r2.jpeg'),
    description: 'Ambiance moderne, saveurs variées, et personnel attentionné.',
    type: 'Restaurant',
    latitude: 33.5864,
    longitude: -7.6242,
  },
  {
    id: '3',
    title: 'Le Patio',
    location: 'Anfa, Casablanca',
    rating: 4.9,
    image: require('../../assets/images/r3.jpg'),
    description: 'Cadre chic, plats revisités, parfait pour un repas en amoureux.',
    type: 'Restaurant',
    latitude: 33.5888,
    longitude: -7.6385,
  },
];

// otherRestaurants
export const otherRestaurants: Restaurant[] = [
  {
    id: '4',
    title: 'Room 21 coffee',
    location: 'Maarif, Casablanca',
    rating: 4.4,
    image: require('../../assets/images/r4.jpg'),
    description: 'Cuisine fusion, déco cosy et ambiance feutrée.',
    type: 'Restaurant',
    latitude: 33.5871,
    longitude: -7.6260,
  },
  {
    id: '5',
    title: 'Le Marché',
    location: 'Gauthier, Casablanca',
    rating: 4.5,
    image: require('../../assets/images/r5.jpeg'),
    description: 'Variété internationale, parfait pour groupes.',
    type: 'Restaurant',
    latitude: 33.5880,
    longitude: -7.6205,
  },
];




export interface EventBase {
  id: string;
  title: string;
  location: string;
  rating: number;
  image: any;
  description: string;
  type: Type;
  latitude: number;
  longitude: number;
}

export interface Concert extends EventBase {
  type: 'Concert';
  dateDebut: string;  // ex: '2025-07-01'
  dateFin: string;    // ex: '2025-07-03'
  heureDebut: string; // ex: '19:00'
  heureFin: string;   // ex: '23:00'
  artistes?: string[]; // artistes principaux
  latitude: number;
  longitude: number;
}

export interface Activite extends EventBase {
  type: 'Activités';
  dateDebut: string;
  dateFin: string;
  heureDebut: string;
  heureFin: string;
  tarif?: string;
  ageMinimum?: number;
  latitude: number;
  longitude: number;
}

// Top Concerts
export const topConcerts: Concert[] = [
  {
    id: 'c1',
    title: 'Festival Jazz Casablanca',
    location: 'Parc de la Ligue Arabe, Casablanca',
    rating: 4.9,
    image: require('../../assets/images/c1.jpg'),
    description: 'Un festival incontournable pour les amoureux du jazz.',
    type: 'Concert',
    dateDebut: '2025-07-01',
    dateFin: '2025-07-03',
    heureDebut: '19:00',
    heureFin: '23:00',
    artistes: ['Jazz Band A', 'Saxophone Star'],
    latitude: 33.5895,
    longitude: -7.6195,
  },
  {
    id: 'c2',
    title: 'Rock Night',
    location: 'Stade Mohammed V, Casablanca',
    rating: 4.7,
    image: require('../../assets/images/c2.jpeg'),
    description: 'Soirée rock avec plusieurs groupes locaux.',
    type: 'Concert',
    dateDebut: '2025-08-15',
    dateFin: '2025-08-15',
    heureDebut: '20:00',
    heureFin: '01:00',
    artistes: ['Rockers United', 'The Loud'],
    latitude: 33.5882,
    longitude: -7.6201,
  },
  {
    id: 'c3',
    title: 'Concert Classique au Théâtre',
    location: 'Théâtre Royal, Casablanca',
    rating: 4.8,
    image: require('../../assets/images/c3.jpeg'),
    description: 'Une soirée de musique classique avec orchestre symphonique.',
    type: 'Concert',
    dateDebut: '2025-09-10',
    dateFin: '2025-09-10',
    heureDebut: '18:30',
    heureFin: '21:00',
    artistes: ['Orchestre Symphonique de Casablanca'],
    latitude: 33.5950,
    longitude: -7.6155,
  },
];

export const otherConcerts: Concert[] = [
  {
    id: 'c4',
    title: 'Concert Pop Urbain',
    location: 'Centre Culturel, Casablanca',
    rating: 4.5,
    image: require('../../assets/images/c4.png'),
    description: 'Concert pop avec artistes émergents.',
    type: 'Concert',
    dateDebut: '2025-10-05',
    dateFin: '2025-10-05',
    heureDebut: '20:00',
    heureFin: '23:00',
    artistes: ['Pop Star X', 'DJ Mix'],
    latitude: 33.5903,
    longitude: -7.6130,
  },
  {
    id: 'c5',
    title: 'Soirée Electro',
    location: 'Club Neon, Casablanca',
    rating: 4.3,
    image: require('../../assets/images/c5.jpg'),
    description: 'Soirée electro jusqu\'au petit matin.',
    type: 'Concert',
    dateDebut: '2025-11-12',
    dateFin: '2025-11-12',
    heureDebut: '22:00',
    heureFin: '04:00',
    artistes: ['Electro Masters'],
    latitude: 33.5912,
    longitude: -7.6125,
  },
];


// Top Activités
export const topActivites: Activite[] = [
  {
    id: 'a1',
    title: 'Randonnée en Montagne',
    location: 'Atlas, Maroc',
    rating: 4.9,
    image: require('../../assets/images/a1.jpeg'),
    description: 'Une aventure nature guidée pour tous les niveaux.',
    type: 'Activités',
    dateDebut: '2025-07-05',
    dateFin: '2025-07-05',
    heureDebut: '08:00',
    heureFin: '17:00',
    tarif: '200 MAD',
    ageMinimum: 12,
    latitude: 31.0576,
    longitude: -7.9131,
  },
  {
    id: 'a2',
    title: 'Atelier de Cuisine Marocaine',
    location: 'Casablanca Centre',
    rating: 4.8,
    image: require('../../assets/images/a2.jpeg'),
    description: 'Apprenez à cuisiner les plats traditionnels marocains.',
    type: 'Activités',
    dateDebut: '2025-07-20',
    dateFin: '2025-07-20',
    heureDebut: '10:00',
    heureFin: '14:00',
    tarif: '350 MAD',
    ageMinimum: 10,
    latitude: 33.5910,
    longitude: -7.6140,
  },
  {
    id: 'a3',
    title: 'Yoga en Plein Air',
    location: 'Parc Lalla Meryem, Casablanca',
    rating: 4.7,
    image: require('../../assets/images/a3.jpeg'),
    description: 'Séance de yoga matinale en plein air.',
    type: 'Activités',
    dateDebut: '2025-07-15',
    dateFin: '2025-07-15',
    heureDebut: '07:00',
    heureFin: '08:30',
    tarif: '150 MAD',
    ageMinimum: 0,
    latitude: 33.5890,
    longitude: -7.6200,
  },
];

// Autres Activités
export const otherActivites: Activite[] = [
  {
    id: 'a4',
    title: 'Cours de Danse Moderne',
    location: 'Centre Culturel, Casablanca',
    rating: 4.4,
    image: require('../../assets/images/a4.jpeg'),
    description: 'Apprenez les bases de la danse moderne.',
    type: 'Activités',
    dateDebut: '2025-08-10',
    dateFin: '2025-08-10',
    heureDebut: '18:00',
    heureFin: '20:00',
    tarif: '250 MAD',
    ageMinimum: 8,
    latitude: 33.5905,
    longitude: -7.6130,
  },
  {
    id: 'a5',
    title: 'Atelier Photographie',
    location: 'Studio Photo, Casablanca',
    rating: 4.6,
    image: require('../../assets/images/a5.jpg'),
    description: 'Découvrez les techniques de base en photographie.',
    type: 'Activités',
    dateDebut: '2025-09-01',
    dateFin: '2025-09-01',
    heureDebut: '14:00',
    heureFin: '17:00',
    tarif: '300 MAD',
    ageMinimum: 12,
    latitude: 33.5898,
    longitude: -7.6120,
  },
];


export const allRestaurantsConcertsActivites = [...topRestaurants, ...topConcerts, ...topActivites];
  
  // const allNoRestaurants = [...topRestaurants, ...otherRestaurants];

  export const allRestaurants = [...topRestaurants, ...otherRestaurants];
  export const allConcerts = [...topConcerts, ...otherConcerts];
  export const allActivites = [...topActivites, ...otherActivites];


  

