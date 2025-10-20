import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView , Linking} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import style from "./style/style";
import jsonUrlApi from "@/data/json/json_rest_link.json"
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(jsonUrlApi.url_output)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={[style.viewBox, { alignItems: "center", justifyContent: "center", flex: 1 }]}>
        <ActivityIndicator size="80" color="#007bff" />
        <Text>লোডিং...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={style.viewBox}>
        {users.map((user, index) => (
          <View key={index} style={style.userBox}>

            <Image source={{ uri: user.avatar_url }} style={style.profileImage} />


            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={style.userName}>
                {user.name}{" "}
                {user.v && <MaterialIcons name="verified" size={18} color="#007bff" />}
              </Text>

              <Text style={style.userDetail}>📞 +880{user.phone}</Text>
              <Text style={style.userDetail}>
                🩸 Blood Group:{" "}
                <Text style={{ color: "red", fontWeight: "bold" }}>{user.blood}</Text>
              </Text>
              <Text style={style.userDetail}>📍 {user.address}</Text>


              <View style={style.socialRow}>
                <TouchableOpacity onPress={() => Linking.openURL(`https://wa.me/${user.whatsapp}`)}
>
                  <FontAwesome name="whatsapp" size={27} color="#25D366" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:+880${user.phone}`)} style={{ marginLeft: 10 }}>
                  <FontAwesome name="phone-square" size={25} color="#4680ff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
