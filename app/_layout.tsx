import React from "react";
import { Stack } from "expo-router";
import Navbar from "@/components/Nav";

export default function Layout() {
  return (
    <>
      {/* Navbar সব স্ক্রিনে থাকবে */}
      <Navbar />

      {/* Expo Router stack */}
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
