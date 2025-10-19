import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import applogo from "@/assets/images/icon.png";
import style from "./style/style";

export default function Home() {
  return (
    <View style={style.viewBox}>
      <View style={style.userBox}>
        {/* Profile Image */}
        <Image
          source={applogo}
          style={style.profileImage}
        />

        {/* User Info */}
        <View style={{ flex: 1 }}>
          <Text style={style.userName}>
            Md Nahidul Islam{" "}
            <MaterialIcons name="verified" size={18} color="#007bff" />
          </Text>

          <Text style={style.userDetail}>
            📞 +8801877357091
          </Text>

          <Text style={style.userDetail}>
            🩸 Blood Group: <Text style={{ color: "red", fontWeight: "bold" }}>A+</Text>
          </Text>

          <Text style={style.userDetail}>
            📍 Ataikula, Pabna
          </Text>

          {/* Social Icons */}
          <View style={style.socialRow}>
            <TouchableOpacity>
              <FontAwesome name="whatsapp" size={27} color="#25D366" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <FontAwesome name="telegram" size={25} color="#0088cc" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10 }}>
            <FontAwesome name="phone-square" size={25} color="#4680ff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
