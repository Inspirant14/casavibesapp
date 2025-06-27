import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { padding: 5, margin: 5 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  card: {
    
    flexDirection: 'row',
    marginBottom: 10,
    height: 100,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
    height:130,
  },
  image: { width: 120, height: 110, borderRadius: 8 },
  textBox: { flex: 1, marginLeft: 10 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom:10, },
  location: { fontSize: 14, color: '#555' },
  favoriteButton: { padding: 8 },
  seeMore: { marginTop: 8, alignSelf: 'flex-end' },
  seeMoreText: {
    // backgroundColor: 'rgba(211, 119, 14, 0.35)',
    color: 'rgb(255, 115, 0)',
    // paddingVertical: 12,
    // paddingHorizontal: 24,
    // borderRadius: 8,
    fontSize:18,
    textDecorationLine:'underline',
    marginRight:10,
  },
  dateHeure: { fontSize: 13, color: '#444' },
  description: { fontSize: 12, color: '#666', marginTop: 4 },
  tarif: { fontSize: 12, color: '#444', marginTop: 4, fontWeight: '600' },
  artistes: { fontSize: 12, fontStyle: 'italic', color: '#666' },
  ageMin: { fontSize: 12, color: '#444', marginTop: 2 },
});