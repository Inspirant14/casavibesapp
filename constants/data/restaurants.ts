// data/restaurants.ts
export interface Restaurant {
  id: string;
  title: string;
  location: string;
  rating: number;
  image: any;
  description: string;
}

export const topRestaurants: Restaurant[] = [
  {
    id: '1',
    title: 'Le Gourmet',
    location: 'Centre‑ville, Casablanca',
    rating: 4.8,
    image: require('../../assets/images/tof.jpg'),
    description: 'Superbe ambiance, cuisine traditionnelle raffinée, service impeccable…',
  },
  {
    id: '2',
    title: 'Casa Délices',
    location: 'Maarif, Casablanca',
    rating: 4.6,
    image: require('../../assets/images/tof.jpg'),
    description: 'Ambiance moderne, saveurs variées, et personnel attentionné.',
  },
  {
    id: '3',
    title: 'Le Patio',
    location: 'Anfa, Casablanca',
    rating: 4.9,
    image: require('../../assets/images/tof.jpg'),
    description: 'Cadre chic, plats revisités, parfait pour un repas en amoureux.',
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
  },
  {
    id: '5',
    title: 'Le Marché',
    location: 'Gauthier, Casablanca',
    rating: 4.5,
    image: require('../../assets/images/tof.jpg'),
    description: 'Varieté internationale, parfait pour groupes.',
  },
  {
    id: '6',
    title: 'Ocean View',
    location: 'Ain Diab, Casablanca',
    rating: 4.7,
    image: require('../../assets/images/tof.jpg'),
    description: 'Vue mer, fruits de mer frais, ambiance chill.',
  },
  {
    id: '7',
    title: 'La Terrasse',
    location: 'Anfa, Casablanca',
    rating: 4.3,
    image: require('../../assets/images/tof.jpg'),
    description: 'Terrasse arborée, cocktails, soirée détendue.',
  },
  {
    id: '8',
    title: 'Petit Resto',
    location: 'Bourgogne, Casablanca',
    rating: 4.2,
    image: require('../../assets/images/tof.jpg'),
    description: 'Cuisine de quartier, plats simples et savoureux.',
  },
];
