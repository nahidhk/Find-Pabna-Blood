import { useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";
import { router } from "expo-router";
import style from "./style/style";

export default function NewAdd() {
  const { mobileNumber } = useLocalSearchParams(); 

  return (
    <View style={style.viewBox}>
      <Text style={{ fontSize: 18 }}>📱 Received Number: {mobileNumber}</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
