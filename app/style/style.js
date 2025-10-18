import { StyleSheet, Platform, StatusBar } from "react-native";



const syTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;


export default StyleSheet.create({
  sTop: {
    top: syTop,
  },
  navbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#4680ff',
    zIndex: 100,
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewBox: {
    padding: 18,
    top: 90,
  },
  navMenu: {
    backgroundColor: "#e9e9e9ff",
    position: "absolute",
    top: syTop,
    zIndex: 101,
    height: "100%",
    width: "80%",
    borderRadius: 20,
  },
  btnT: {
    backgroundColor: '#fff',
    margin: 3,
    padding: 10,
    borderRadius: 4,
  },
  btnText: {
    fontSize: 17,
  },
  btnCenter:{
    fontSize:17,
    textAlign:"center",
    backgroundColor:"#4680ff",
    color:"#fff"

  },
  bottomSide:{
    bottom:syTop,
    position:"absolute",
    padding:20,
    opacity:0.4
  },
  iTag:{
    fontStyle:"italic",
  },
  textCenter:{
    textAlign:"center",
  },
  bigText:{
    fontSize:30,
  },

});