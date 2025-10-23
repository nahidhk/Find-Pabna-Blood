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
    height: 70,
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
    color:"#a1a1a1ff",
    margin:3,
    borderWidth:1,
    borderColor:"#fff",
    borderBottomColor:"#77777750"
  },
  cRed:{
    color:"red"
  },
  input:{
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 4,
    padding: 10,
  },
  btn:{
    margin:20,
    borderRadius:100,
  },
userBox: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#ffffff",
  borderRadius: 15,
  borderWidth: 1,
  borderColor: "#e0e0e0",
  margin: 12,
  padding: 15,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
},

profileImage: {
  width: 90,
  height: 90,
  borderRadius: 45,
  marginRight: 15,
  borderWidth: 2,
  borderColor: "#007bff",
},

userName: {
  fontSize: 20,
  fontWeight: "700",
  color: "#333",
  marginBottom: 4,
},

userDetail: {
  fontSize: 15,
  color: "#555",
  marginBottom: 3,
},

socialRow: {
  flexDirection: "row",
  marginTop: 8,
},
popup:{
  width:"90%",
  backgroundColor:"#fff",
  padding:10,
  borderRadius:3,
}



});