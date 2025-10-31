import React, { useEffect } from "react";
import { StyleSheet, Platform, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import Navbar from "@/components/Nav";
import * as NavigationBar from "expo-navigation-bar";

export default function Layout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    const init = async () => {
      if (Platform.OS === "android") {
        await NavigationBar.setBackgroundColorAsync(
          colorScheme === "dark" ? "#292929ff" : "#fff",
          false
        );
        await NavigationBar.setButtonStyleAsync(
          colorScheme === "dark" ? "light" : "dark"
        );
      }
    };
    init();
  }, [colorScheme]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#242424ff" : "#c9c9c9ff" },
      ]}
    >
      <Navbar />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
