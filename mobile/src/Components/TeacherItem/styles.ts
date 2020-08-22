import { StyleSheet } from "react-native";

import nomalize from "react-native-normalize";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden"
  },

  profile: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 24
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee'
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: "Archivo_700Bold",
    color: "#32264d",
    fontSize:20
  },

  subject: {
    fontFamily: "Poppins_400Regular",
    color: '#6a6180',
    fontSize: 12,
    marginTop: 4
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: "Poppins_400Regular",
    color: '#6a6180',
    fontSize: 16,
    lineHeight: 24,
  },

  footer: {
    backgroundColor: '#fafafc',
    padding: 24,
    alignItems: "center",
    marginTop: 24
  },

  price: {
    fontFamily: "Poppins_400Regular",
    color: '#6a6180',
    fontSize: 14
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257e5',
    fontSize: 16
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16
  },

  favoriteButton: {
    backgroundColor: '#8257e5',
    width: 60,
    height: 60,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: 'center',
    marginRight: 8
  },

  contactButton: {
    backgroundColor: '#04d361',
    flex: 1,
    height: 60,
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: 'center',
    marginRight: 8
  },

  favorited: {
    backgroundColor: "#e33d3d"
  },

  contactButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: normalize(16),
    marginLeft: 16
  }
});

export default styles;