import React, { useEffect } from "react";
import { Stack } from "expo-router";
import Navbar from "@/components/Nav";

export default function Layout() {
  

  return (
    <>
      <Navbar />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
