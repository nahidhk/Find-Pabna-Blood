import React, { useState, useEffect } from 'react';
import { Linking, View, Text, TouchableOpacity, StatusBar, Button, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import mySetting from '@/data/setting.json';
import style from '@/app/style/style'




export default function Navbar() {
  const logoAndName = mySetting.appName;
  const [menuOpen, setMenuOpen] = useState(false);



  const [menuIcon, setMenuIcon] = useState('menu');
  useEffect(() => {
    if (menuOpen) {
      setMenuIcon('close-outline');
    } else {
      setMenuIcon('menu');
    }
  }, [menuOpen]);


  function toggleBtn() {
    setMenuOpen(!menuOpen);
  }



  return (
    <>
      <View style={[style.navbar, style.sTop]}>
        <Text style={style.logo}>{logoAndName}</Text>
        <TouchableOpacity>
          <Ionicons name={menuIcon} onPress={() => toggleBtn()} size={40} color={'#fff'} style={{ cursor: 'pinter' }} />
        </TouchableOpacity>
      </View>

      {
        menuOpen && (
          <View style={style.navMenu}>
            <View style={style.navbar}>
              <Text style={style.logo}>Menu</Text>
            </View>


            <View style={style.viewBox}>


              <TouchableOpacity style={style.btnT}>
                <Text style={style.btnText}>
                  <Ionicons name="home-outline" size={18} color="black" />{"  "}
                  Home
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.btnT}>
                <Text style={style.btnText}>
                  <Ionicons name="bug-outline" size={18} color="black" />{"  "}
                  Bug Report
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.btnT}>
                <Text style={style.btnText}>
                  <Ionicons name="create-outline" size={18} color="black" /> {"  "}
                  Edit old detels
                </Text>
              </TouchableOpacity>


              <TouchableOpacity style={style.btnT}>
                <Text style={style.btnText}>
                  <Ionicons name="globe-outline" size={18} color="black" />{"  "}
                  Offical Website
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/nahidhk/Find-Pabna-Blood')} style={style.btnT}>
                <Text style={style.btnText}>
                  <Ionicons name="logo-github" size={18} color="black" />{"  "}
                  Open Sorce
                </Text>
              </TouchableOpacity>







            </View>
          </View>
        )
      }
    </>

  );
}
