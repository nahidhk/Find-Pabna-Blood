import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import Menu from './Menu';

export default function Navbar() {
  const logoAndName = "Find Pabna Blood"
  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>{logoAndName}</Text>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // status bar height adjust
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
});