import React, { useEffect } from "react";
import { StyleSheet, Button, View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import Navbar from "@/components/Nav";
import * as NavigationBar from "expo-navigation-bar";




export default function Layout() {
  useEffect(() => {
    const init = async () => {
      
      if (Platform.OS === "android") {
        // await NavigationBar.setBackgroundColorAsync("#fff", false); 
        await NavigationBar.setButtonStyleAsync("dark");
      }
    };

    init();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
