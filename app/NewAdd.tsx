import { useLocalSearchParams , router } from "expo-router";
import { View, Text, Button } from "react-native";
import style from "./style/style";

export default function NewAdd() {
  const { mobileNumber } = useLocalSearchParams(); 

  return (
    <View style={style.viewBox}>
      <Text style={{ fontSize: 18 }}> addon this number in the back  {mobileNumber}</Text>
      <Button title="join now" onPress={() => router.back()} />
    </View>
  );
}
