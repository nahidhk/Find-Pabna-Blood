import React, { useState } from "react";
import { View, Text, TouchableOpacity, Linking, Animated, Image } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import style from "@/app/style/style";
import mySetting from "@/data/setting.json";



export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Slide animation
  const slideAnim = useState(new Animated.Value(-300))[0];

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setMenuOpen(false));
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <View style={[style.navbar, style.sTop]}>


        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity onPress={toggleMenu}>
            <Ionicons
              name={menuOpen ? "close-outline" : "menu-outline"}
              size={40}
              color="#fff"
            />
          </TouchableOpacity>

          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff", marginLeft: 15 }}>
            {mySetting.appName}
          </Text>
        </View>

      </View>

      {/* Slide Menu */}
      {menuOpen && (
        <Animated.View
          style={[
            style.navMenu,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          <View style={style.navbar}>
            <Text style={style.logo}>Menu</Text>
            <TouchableOpacity onPress={toggleMenu}>
              <Ionicons
                name={menuOpen ? "close-outline" : "menu-outline"}
                size={40}
                color="#fff"
              />
            </TouchableOpacity>
          </View>



          <View style={style.viewBox}>


            <View style={[style.btn,{justifyContent:"center",alignItems:"center"}]}>
              <Image
                source={require('../assets/images/android-icon-monochrome.png')}
                style={{ height: 100, width: 100, }}
              />
            </View>




            <TouchableOpacity
              style={style.btnT}
              onPress={() => {
                router.push("/");
                toggleMenu();
              }}
            >
              <Text style={style.btnText}>
                <Ionicons name="home-outline" size={17} /> Home
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.btnT}
              onPress={() => {
                router.push("/bug");
                toggleMenu();
              }}
            >
              <Text style={style.btnText}>
                <Octicons name="verified" size={17} color="black" /> Verify Profile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.btnT}
              onPress={() => {
                router.push("/about");
                toggleMenu();
              }}
            >
              <Text style={style.btnText}>
                <Ionicons name="information-circle-outline" size={17} /> About
                Us
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.btnT}
              onPress={() =>
                Linking.openURL("https://pabna-blood.vercel.app/")
              }
            >
              <Text style={style.btnText}>
                <Ionicons name="globe-outline" size={17} /> Offical Website
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.btnT, style.btnCenter]} onPress={() => {
              router.push("/join");
              toggleMenu();
            }}>
              <Text style={style.btnCenter}>
                <Ionicons name="add" size={17} color="#fff" />
                Add Profile
              </Text>
            </TouchableOpacity>


          </View>

          <View style={style.bottomSide}>
            <Text style={style.iTag}>
              Version 5.3.8
            </Text >
            <Text style={style.iTag}>
              Powered By:
            </Text >
            <Text style={style.iTag}>
              ভবানীপুর সমাজ কল্যাণ সংঘ
            </Text>
          </View>


        </Animated.View>
      )}
    </>
  );
}
