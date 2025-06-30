import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: { flex: 1,  },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
  },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  content: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginLeft:10,  marginBottom: 8 },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationText: { color: '#666', fontSize: 16 },
  sectionTitle: { fontSize: 20, fontWeight: '600', marginBottom: 6 },
  description: { fontSize: 16, color: '#444', lineHeight: 22 },
  
  reserveButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
   reserveButton: {
  position: 'absolute', // fixe en bas
  bottom: 20,
  left: 20,
  right: 20,
  backgroundColor: '#00aaff',
  padding: 16,
  borderRadius: 40,
  alignItems: 'center',
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
},

});